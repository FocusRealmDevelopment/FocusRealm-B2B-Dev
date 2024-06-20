const Student = require('../models/studentModel');
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncError")
const {sendtokenStudent}=require("../utils/jwtToken")
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const cloudinary=require("cloudinary")
// register a user 


exports.registerUser=catchAsyncErrors(async (req,res,next)=>{
  const mycloud=await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"avatars",
    width:150,
    crop:"scale"
  })
  
    const {email, password,name,age,gender, mobileNumber,school, mobileNumberParent,Batch,address,pinCode,rollNo,DOB} = req.body;

    const  student= await Student.create({
      email,
      password,name,age,gender, mobileNumber,school, mobileNumberParent,Batch,address,pinCode,rollNo,DOB,
      avatar: {
        public_id:mycloud.public_id,
        url:mycloud.secure_url,
      },
    });

    sendtokenStudent(student, 201, res);
  
})


// login user


exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const student = await Student.findOne({ email }).select("+password");

  if (!student) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await student.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
   
  sendtokenStudent(student, 200, res);

});



// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findOne({ email: req.body.email });

  if (!student) {
    return next(new ErrorHandler("Student not found", 404));
  }


  // Get ResetPassword Token
  const resetToken = student.getresetPasswordToken();
  await student.save({ validateBeforeSave: false });


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
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    student.resetPasswordToken = undefined;
    student.resetPasswordExpire = undefined;

    await student.save({ validateBeforeSave: false });

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

  const student = await Student.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!student) {
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

  student.password = req.body.password;
  student.resetPasswordToken = undefined;
  student.resetPasswordExpire = undefined;

  await student.save();

  sendtokenStudent(student, 200, res);
});



// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.user.id).select("+password");

  const isPasswordMatched = await student.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  student.password = req.body.newPassword;

  await student.save();

  sendtokenStudent(student, 200, res);
});


// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.user.id);

  res.status(200).json({
    success: true,
    student,
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

