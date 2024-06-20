const express=require("express")
const passport = require("passport");
const {registerAdmin, loginAdmin,logout,forgotPassword, resetPassword,  updatePassword,getUserDetails
  ,getAllAdmin,getSingleAdmin,updateAdminRole,deleteAdmin, getAllTeacher,getSingleTeacher,updateTeacherRole,deleteTeacher,addBatches,getBatches
} = require("../controllers/adminController")
const {isAuthenticatedAdmin,authorizeRoles} = require("../middleware/auth");
const router=express.Router()
const ErrorHandler=require("../utils/errorHandler")


router.route("/admin/register").post(registerAdmin)
router.route("/admin/login").post(loginAdmin)
router.route("/admin/logout").get(isAuthenticatedAdmin,authorizeRoles("authAdmin"),logout)
router.route("/admin/password/update").put(isAuthenticatedAdmin,authorizeRoles("authAdmin"),updatePassword)
 router.route("/admin/password/forgot").post(forgotPassword)
 router.route("/admin/password/reset/:token").put(resetPassword)
 router.route("/admin/me").get( isAuthenticatedAdmin,getUserDetails)

// super admin
 router
  .route("/superAdmin/admins")
  .get(isAuthenticatedAdmin, authorizeRoles("superAdmin"), getAllAdmin);

  
  router
  .route("/superAdmin/admin/:id")
  .get(isAuthenticatedAdmin, authorizeRoles("superAdmin"),getSingleAdmin)
  .put(isAuthenticatedAdmin, authorizeRoles("superAdmin"), updateAdminRole)
  .delete(isAuthenticatedAdmin, authorizeRoles("superAdmin"), deleteAdmin);


  // authAdmin
  router
  .route("/authAdmin/admins")
  .get(isAuthenticatedAdmin, authorizeRoles("authAdmin"), getAllTeacher);

  
  router
  .route("/superAdmin/user/:id")
  .get(isAuthenticatedAdmin, authorizeRoles("authAdmin"),getSingleTeacher)
  .put(isAuthenticatedAdmin, authorizeRoles("authAdmin"), updateTeacherRole)
  .delete(isAuthenticatedAdmin, authorizeRoles("authAdmin"), deleteTeacher);



module.exports=router