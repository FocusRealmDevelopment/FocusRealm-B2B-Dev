const express=require("express")
const passport = require("passport");
const {registerTeacher, loginTeacher,logout,forgotPassword, resetPassword,  updatePassword,getUserDetails} = require("../controllers/teacherController")
const { isAuthenticatedTeacher,authorizeRoles} = require("../middleware/auth");
const router=express.Router()
const ErrorHandler=require("../utils/errorHandler")


router.route("/teacher/register").post(registerTeacher)
router.route("/teacher/login").post(loginTeacher)
router.route("/teacher/logout").get(isAuthenticatedTeacher,authorizeRoles("authTeacher"),logout)
router.route("/teacher/password/update").put(isAuthenticatedTeacher,authorizeRoles("authTeacher"),updatePassword)
 router.route("/teacher/password/forgot").post(forgotPassword)
 router.route("/teacher/password/reset/:token").put(resetPassword)
 router.route("/teacher/me").get( isAuthenticatedTeacher ,getUserDetails)


module.exports=router