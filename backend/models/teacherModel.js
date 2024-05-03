const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignments: [{
    batch: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  }],
});


module.exports = mongoose.model("Teacher", teacherSchema);
