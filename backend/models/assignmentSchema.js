const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  assignmentupload: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
