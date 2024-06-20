const Admin = require('../models/adminModel');
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncError")
const {sendtokenAdmin}=require("../utils/jwtToken")
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const cloudinary=require("cloudinary")
// register a user 


exports.registerAdmin=catchAsyncErrors(async (req,res,next)=>{
  const mycloud=await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"avatars",
    width:150,
    crop:"scale"
  })
  
    const {email, password,name,age,gender, mobileNumber,school, address, pinCode, DOB} = req.body;

    const admin = await Admin.create({
      email,
      password,name,age,gender, mobileNumber,school,address, pinCode, DOB,
      avatar: {
        public_id:mycloud.public_id,
        url:mycloud.secure_url,
      },
    });

    sendtokenAdmin(admin, 201, res);
  
})


// login user


exports.loginAdmin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const admin = await Admin.findOne({ email }).select("+password");

  if (!admin) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await admin.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
   
  sendtokenAdmin(admin, 200, res);

});



// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const admin = await Admin.findOne({ email: req.body.email });

  if (!admin) {
    return next(new ErrorHandler("Admin not found", 404));
  }


  // Get ResetPassword Token
  const resetToken = user.getresetPasswordToken();
  await admin.save({ validateBeforeSave: false });


  const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: admin.email,
      subject: "Focus Realm Password Recovery",
      message:message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${admin.email} successfully`,
    });
  } catch (error) {
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpire = undefined;

    await admin.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }

});


// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const admin = await Admin.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!admin) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not password", 400));
  }

  admin.password = req.body.password;
  admin.resetPasswordToken = undefined;
  admin.resetPasswordExpire = undefined;

  await admin.save();

  sendtokenAdmin(admin, 200, res);
});



// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const admin = await Admin.findById(req.user.id).select("+password");

  const isPasswordMatched = await admin.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  admin.password = req.body.newPassword;

  await admin.save();

  sendtokenAdmin(admin, 200, res);
});


// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const admin = await Admin.findById(req.user.id);

  res.status(200).json({
    success: true,
    admin,
  });
});



// // update User Profile
// exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
//   const newUserData = {
//     name: req.body.name,
//     email: req.body.email,
//     mobileNumber: req.body.mobileNumber,
//     mobileNumberParent: req.body.mobileNumberParent,
//      Batch:req.body.Batch
//   };
   

//    if (req.body.avatar === "") {
//     const user = await User.findById(req.user.id);

//     const imageId = user.avatar.public_id;

//      await cloudinary.v2.uploader.destroy(imageId);

//     const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
//       folder: "avatars",
//       width: 150,
//       crop: "scale",
//     });

//     newUserData.avatar = {
//       public_id: myCloud.public_id,
//       url: myCloud.secure_url,
//     };
//   }

//   const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//     user
//   });
// });




exports.logout = catchAsyncErrors(async (req, res, next) => {
 res.cookie("token", null, {
   expires: new Date(Date.now()),
   httpOnly: true,
 });

 res.status(200).json({
   success: true,
   message: "Logged Out",
 });
 });









//   super admin controllers
//Get all admins-------super admin controllers
 exports.getAllAdmin = catchAsyncErrors(async (req, res, next) => {
  const admins = await Admin.find();

  res.status(200).json({
    success: true,
    admins,
  });
});

// Get single admin--------super admin controllers
exports.getSingleAdmin = catchAsyncErrors(async (req, res, next) => {
  const admin = await Admin.findById(req.params.id);

  if (!admin) {
    return next(
      new ErrorHandler(`Admin does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    admin,
  });
});


// update admin Role to authAdmin----------super admin controllers

exports.updateAdminRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    role: req.body.role,
  };

  

 await Admin.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});



// Delete admin ------super admin controllers
exports.deleteAdmin = catchAsyncErrors(async (req, res, next) => {
  const admin = await Admin.findByIdAndRemove(req.params.id);

  if (!admin) {
    return next(
      new ErrorHandler(`Admin does not exist with Id: ${req.params.id}`, 400)
    );
  }


  const imageId = admin.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);



  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});






// authAdmin controllers 


// Add multiple batches
exports.addBatches = catchAsyncErrors(async (req, res, next) => {
  const { batches } = req.body;

  if (!Array.isArray(batches) || batches.length === 0) {
    return next(new ErrorHandler("Batches should be a non-empty array", 400));
  }

  const admin = await Admin.findById(req.user.id);
  if (!admin) {
    return next(new ErrorHandler("Admin not found", 404));
  }

  admin.batches.push(...batches);
  await admin.save();

  res.status(200).json({ message: "Batches added successfully", batches: admin.batches });
});

// Get all batches for an admin
exports.getBatches = catchAsyncErrors(async (req, res, next) => {
  const admin = await Admin.findById(req.user.id);
  if (!admin) {
    return next(new ErrorHandler("Admin not found", 404));
  }

  res.status(200).json({ batches: admin.batches });
});











 //  authAdmin controllers --------- teachers 

//Get all teacher via authAdmin of his school-------  authAdmin controllers

exports.getAllTeacher = catchAsyncErrors(async (req, res, next) => {

  const teachers = await Teacher.find({ school: req.user.school });

  res.status(200).json({
    success: true,
    teachers,
  });
});


// Get single teacher-------- authadmin controllers
exports.getSingleTeacher = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(
      new ErrorHandler(`Teacher does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    teacher,
  });
});


// update teacher Role to authTeacher----------  authAdmin controllers

exports.updateTeacherRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    role: req.body.role,
  };

  

 await Teacher.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});



// Delete teacher ------ authAdmin controllers
exports.deleteTeacher = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findByIdAndRemove(req.params.id);

  if (!teacher) {
    return next(
      new ErrorHandler(`Teacher does not exist with Id: ${req.params.id}`, 400)
    );
  }


  const imageId = teacher.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);



  res.status(200).json({
    success: true,
    message: "Teacher Deleted Successfully",
  });
});







 //  authAdmin controllers --------- students 

//Get all teacher via authAdmin of his school-------  authAdmin controllers

exports.getAllStudent = catchAsyncErrors(async (req, res, next) => {

  const students = await Teacher.find({ school: req.user.school });

  res.status(200).json({
    success: true,
    teachers,
  });
});


// Get single teacher-------- authadmin controllers
exports.getSingleTeacher = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(
      new ErrorHandler(`Teacher does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    teacher,
  });
});


// update teacher Role to authTeacher----------  authAdmin controllers

exports.updateTeacherRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    role: req.body.role,
  };

  

 await Teacher.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});



// Delete teacher ------ authAdmin controllers
exports.deleteTeacher = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findByIdAndRemove(req.params.id);

  if (!teacher) {
    return next(
      new ErrorHandler(`Teacher does not exist with Id: ${req.params.id}`, 400)
    );
  }


  const imageId = teacher.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);



  res.status(200).json({
    success: true,
    message: "Teacher Deleted Successfully",
  });
});






