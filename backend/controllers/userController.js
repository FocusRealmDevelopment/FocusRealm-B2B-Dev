const User = require('../models/userModel');
const ErrorHandler=require("../utils/errorHandler")
const catchAsyncErrors=require("../middleware/catchAsyncError")
const sendToken=require("../utils/jwtToken")
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
  
    const {email, password,name,age,gender, mobileNumber,school, mobileNumberParent,Batch} = req.body;

    const user = await User.create({
      email,
      password,name,age,gender, mobileNumber,school, mobileNumberParent,Batch,
      avatar: {
        public_id:mycloud.public_id,
        url:mycloud.secure_url,
      },
    });

    sendToken(user, 201, res);
  
})


// login user


exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;


  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
   
  sendToken(user, 200, res);

});


// LOGOUT 

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



// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }


  // Get ResetPassword Token
  const resetToken = user.getresetPasswordToken();
  await user.save({ validateBeforeSave: false });


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
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

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

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
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

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});



// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});


// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});



// update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    mobileNumberParent: req.body.mobileNumberParent,
     Batch:req.body.Batch
  };
   

   if (req.body.avatar === "") {
    const user = await User.findById(req.user.id);

    const imageId = user.avatar.public_id;

     await cloudinary.v2.uploader.destroy(imageId);

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
      width: 150,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user
  });
});


exports.getUsersBySchool = catchAsyncErrors(async (req, res, next) => {
  const userSchool = req.user.school; // Get the school name associated with the logged-in user

  // // Check if the user is not an admin or a teacher
  // if (req.user.role === 'admin' || req.user.role === 'teacher') {
  //     return next(new ErrorHandler("Unauthorized access", 403));
  // }

  // If the user is admin or teacher, and the school is not provided in the query, restrict access
  if (!userSchool) {
      return next(new ErrorHandler("User's school name is not provided", 400));
  }

  const users = await User.find({ school: userSchool }); // Query users with the school name associated with the logged-in user

  res.status(200).json({
      success: true,
      count: users.length,
      data: users
  });
});



// Get all users(superAdmin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});