const Teacher = require('../models/teacherModel');
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncError")
const {sendtokenTeacher}=require("../utils/jwtToken")
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const cloudinary=require("cloudinary")
// register a user 


exports.registerTeacher=catchAsyncErrors(async (req,res,next)=>{
  const mycloud=await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"avatars",
    width:150,
    crop:"scale"
  })
  
    const {email, password,name,age,gender, mobileNumber,school, address, pinCode,DOB} = req.body;

    const teacher = await Teacher.create({
      email,
      password,name,age,gender, mobileNumber,school, address, pinCode,DOB,
      avatar: {
        public_id:mycloud.public_id,
        url:mycloud.secure_url,
      },
    });

    sendtokenTeacher(teacher, 201, res);
  
})


// login user


exports.loginTeacher = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const teacher = await Teacher.findOne({ email }).select("+password");

  if (!teacher) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await teacher.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
   
  sendtokenTeacher(teacher, 200, res);

});



// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findOne({ email: req.body.email });

  if (!teacher) {
    return next(new ErrorHandler("Teacher not found", 404));
  }


  // Get ResetPassword Token
  const resetToken = teacher.getresetPasswordToken();
  await teacher.save({ validateBeforeSave: false });


  const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Focus Realm Password Recovery",
      message:message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${teacher.email} successfully`,
    });
  } catch (error) {
    teacher.resetPasswordToken = undefined;
    teacher.resetPasswordExpire = undefined;

    await teacher.save({ validateBeforeSave: false });

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

  const teacher = await Teacher.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!teacher) {
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

  teacher.password = req.body.password;
  teacher.resetPasswordToken = undefined;
  teacher.resetPasswordExpire = undefined;

  await teacher.save();

  sendtokenTeacher(teacher, 200, res);
});



// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findById(req.user.id).select("+password");

  const isPasswordMatched = await teacher.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  teacher.password = req.body.newPassword;

  await teacher.save();

  sendtokenTeacher(teacher, 200, res);
});


// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const teacher = await Teacher.findById(req.user.id);

  res.status(200).json({
    success: true,
    teacher,
  });
});


// // update Teacher Profile
// exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
//   const newUserData = {
//     name: req.body.name,
//     email: req.body.email,
//     mobileNumber: req.body.mobileNumber,
//     gender: req.body.gender,
//     address: req.body.address,
//     pinCode: req.body.pinCode,
//     DOB: req.body.DOB,
//     school: req.body.school,
//     batches: req.body.batches // Include batches in the update
//   };

//   // Handle avatar update if provided
//   if (req.body.avatar !== "") {
//     const teacher = await Teacher.findById(req.user.id);

//     if (teacher.avatar.public_id) {
//       const imageId = teacher.avatar.public_id;
//       await cloudinary.v2.uploader.destroy(imageId);
//     }

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

//   const teacher = await Teacher.findByIdAndUpdate(req.user.id, newUserData, {
//     new: true,
//     runValidators: true,
//     useFindAndModify: false,
//   });

//   res.status(200).json({
//     success: true,
//     teacher
//   });
// });

//logout

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

