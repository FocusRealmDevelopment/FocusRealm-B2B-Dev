const express=require("express")
const passport = require("passport");
const {registerUser, loginUser,logout,forgotPassword, resetPassword,  updatePassword,getUserDetails} = require("../controllers/studentController")
const { isAuthenticatedStudent,authorizeRoles} = require("../middleware/auth");
const router=express.Router()
const ErrorHandler=require("../utils/errorHandler")


router.route("/student/register").post(registerUser)
router.route("/student/login").post(loginUser)
router.route("/student/logout").get(isAuthenticatedStudent,authorizeRoles("authStudent"),logout)
router.route("/student/password/update").put(isAuthenticatedStudent,authorizeRoles("authStudent"),updatePassword)
 router.route("/student/password/forgot").post(forgotPassword)
 router.route("/student/password/reset/:token").put(resetPassword)
 router.route("/student/me").get( isAuthenticatedStudent,getUserDetails)


module.exports=router