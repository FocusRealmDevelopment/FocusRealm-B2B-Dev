const express=require("express")
const passport = require("passport");
const {registerUser, loginUser,logout,forgotPassword, resetPassword,  updatePassword,getUserDetails, updateProfile,getUsersBySchool,getAllUser } = require("../controllers/userController")
const { isAuthenticatedUser,authorizeRoles} = require("../middleware/auth");
const router=express.Router()
const ErrorHandler=require("../utils/errorHandler")


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(isAuthenticatedUser,logout)
router.route("/password/update").put(isAuthenticatedUser,updatePassword)
 router.route("/password/forgot").post(forgotPassword)
 router.route("/password/reset/:token").put(resetPassword)
 router.route("/me").get( isAuthenticatedUser ,getUserDetails)
 router.route("/me/update").put(isAuthenticatedUser,updateProfile)



   router.route("/users").get(isAuthenticatedUser,authorizeRoles("superAdmin"),getAllUser )
 router.route("/users/school").get(isAuthenticatedUser,(req, res, next) => {
    if (req.user.role === 'admin' || req.user.role === 'teacher') {
      next();
    } else {
      return next(new ErrorHandler("Unauthorized access", 403));
    }
  },getUsersBySchool)


module.exports=router