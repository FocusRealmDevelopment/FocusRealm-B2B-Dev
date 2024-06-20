const Chat = require('../models/chatModel');
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');
const Admin = require('../models/adminModel');

// Create group chats
exports.createGroupChat = async (req, res) => {
  try {
    const { groupType, school, batch } = req.body;

    let members = [];
    let name;

    if (groupType === 1) {
      // Group 1: All students of the same school and same batch
      members = await Student.find({ school, Batch: batch }).select('_id');
      name = `${school} - Batch ${batch} Students`;
    } else if (groupType === 2) {
      // Group 2: All students of the same school with all teachers of the same school
      const students = await Student.find({ school }).select('_id');
      const teachers = await Teacher.find({ school }).select('_id');
      members = [...students, ...teachers];
      name = `${school} - Students and Teachers`;
    } else if (groupType === 3) {
      // Group 3: All students of the same school with all teachers and admins of the same school
      const students = await Student.find({ school }).select('_id');
      const teachers = await Teacher.find({ school }).select('_id');
      const admins = await Admin.find({ school }).select('_id');
      members = [...students, ...teachers, ...admins];
      name = `${school} - Students, Teachers, and Admins`;
    } else {
      return res.status(400).json({
        success: false,
        message: 'Invalid group type',
      });
    }

    const memberIds = members.map(member => member._id);
    const chat = await Chat.create({ name, members: memberIds, membersModel: 'Student' });

    res.status(201).json({
      success: true,
      chat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all group chats for a user
exports.getGroupChats = async (req, res) => {
  try {
    const userId = req.user._id;
    const chats = await Chat.find({ members: userId }).populate('members');
    res.status(200).json({
      success: true,
      chats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Send a message in a chat
exports.sendMessage = async (req, res) => {
  try {
    const { chatId, content } = req.body;
    const message = await Message.create({
      chat: chatId,
      sender: req.user._id,
      content,
    });
    res.status(201).json({
      success: true,
      message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all messages in a chat
exports.getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    const messages = await Message.find({ chat: chatId }).populate('sender');
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
