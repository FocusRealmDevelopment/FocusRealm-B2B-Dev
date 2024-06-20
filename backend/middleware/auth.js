const catchAsyncErrors=require("./catchAsyncError")
const ErrorHander = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");
const Admin = require('../models/adminModel');
const Teacher = require('../models/teacherModel');

exports.isAuthenticatedStudent = catchAsyncErrors(async (req, res, next) => {
     const  {token}  = req.cookies;
       
    if (!token) {
        return next(new ErrorHander("Please Login to access this resource", 401));
      }
    
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Student.findById(decodedData.id);

      next();
  });


exports.isAuthenticatedTeacher = catchAsyncErrors(async (req, res, next) => {
  const  {token}  = req.cookies;
    
 if (!token) {
     return next(new ErrorHander("Please Login to access this resource", 401));
   }
 
   decodedData = jwt.verify(token, process.env.JWT_SECRET);

   req.user = await Teacher.findById(decodedData.id);

   next();
});


exports.isAuthenticatedAdmin = catchAsyncErrors(async (req, res, next) => {
  const  {token}  = req.cookies;
    
 if (!token) {
     return next(new ErrorHander("Please Login to access this resource", 401));
   }
 
   decodedData = jwt.verify(token, process.env.JWT_SECRET);

   req.user = await Admin.findById(decodedData.id);

   next();
});


  exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new ErrorHander(
            `Role: ${req.user.role} is not allowed to access this resouce `,
            403
          )
        );
      }
  
      next();
    };
  };
