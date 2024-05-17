const cloudinary = require("cloudinary").v2;
const Assignment = require('../models/assignmentModel'); // Adjust the path as needed
const Teacher = require('../models/teacherModel'); // Adjust the path as needed



exports.uploadAssignment = async (req, res) => {
  try {
    const { teacherId, batch, subject, subtitle } = req.body;

    // Find the teacher
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    // Check if the teacher is assigned to the given batch and subject
    const isAssigned = teacher.assignments.some(
      (assignment) => assignment.batch === batch && assignment.subject === subject
    );

    if (!isAssigned) {
      return res.status(400).json({ success: false, message: 'Teacher is not assigned to this batch and subject' });
    }

    // Upload the file to Cloudinary
    const file = req.files.assignmentupload; // Ensure you are using form-data to pass the file
    const mycloud = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: "avatars",
      resource_type: "auto" // This allows for any file type, including documents
    });

    // Create a new assignment
    const newAssignment = await Assignment.create({
      teacher: teacherId,
      batch,
      subject,
      subtitle,
      assignmentupload: {
        public_id: mycloud.public_id,
        url: mycloud.secure_url,
      },
    });

    res.status(201).json({ success: true, assignment: newAssignment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
