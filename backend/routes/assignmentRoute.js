const express=require("express")
const {uploadAssignment} = require('../controllers/assignmentController');
const router=express.Router()
const { isAuthenticatedUser,authorizeRoles} = require("../middleware/auth");
const ErrorHandler=require("../utils/errorHandler")


router.route('/uploadAssignment').post(isAuthenticatedUser,authorizeRoles("teacher"),uploadAssignment)



module.exports = router;
