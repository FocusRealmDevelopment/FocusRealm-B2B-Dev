const express=require("express")
const {assignSubjectsAndBatches} = require("../controllers/teacherController")
const { isAuthenticatedUser,authorizeRoles} = require("../middleware/auth");
const router=express.Router()


router.post('/teachers/assignments/:teacherId', isAuthenticatedUser, authorizeRoles('admin'),assignSubjectsAndBatches);



module.exports=router