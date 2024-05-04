const mongoose = require('mongoose');

const chatGroupSchema = new mongoose.Schema({
  roomName: {
    type: String,
    unique: true,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('chatGroup', chatGroupSchema);
