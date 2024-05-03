const User = require('../models/userModel');
const Teacher = require('../models/teacherModel');


const assignSubjectsAndBatches = async (req, res) => {
  try {
    
    const teacherId = req.params.teacherId;
    
    const authenticatedUser = req.user;
    
   
    const teacher = await User.findOne({ _id: teacherId });

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }
    if (teacher.role!=="teacher") {
        return res.status(404).json({ message: "Teacher not found." });
      }

      if (teacher.school !== authenticatedUser.school) {
        return res.status(403).json({ message: "You can only assign subjects and batches to teachers from your own school." });
      }

    const { assignments } = req.body;
    
      let existingTeacher = await Teacher.findOne({ user: teacherId });

     
      if (existingTeacher) {
        existingTeacher.assignments.push(...assignments);
        await existingTeacher.save();
      } else {
        await Teacher.create({
          user: teacherId, // Assign the user ID
          assignments: assignments // Assign the provided assignments
        });
      }

    res.status(200).json({
      success: true,
      message: `teacher ${teacher.name} updated successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { assignSubjectsAndBatches };
