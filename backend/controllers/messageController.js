const Message = require('../models/messageModel');
const ChatGroup = require('../models/chatGroup');

exports.sendMessage = async (req, res) => {
  try {
    const { roomId, message } = req.body;
    const sender = req.user._id; // Assuming you have authentication middleware to add the user to the request object
    
    // Check if the user is joined to the specified chat group
    const isJoined = await ChatGroup.exists({ _id: roomId, users: sender });
    if (!isJoined) {
      return res.status(400).json({ success: false, message: 'You are not joined to this chat group' });
    }

    // Create a new message object
    const newMessage = {
      sender,
      message
    };

    // Find the message document for the given roomId
    let messageDoc = await Message.findOne({ roomId });

    // If message document doesn't exist, create a new one
    if (!messageDoc) {
      messageDoc = new Message({ roomId, messages: [newMessage] });
    } else {
      // Add the new message to the existing messages array
      messageDoc.messages.push(newMessage);
    }

    // Save the updated message document
    await messageDoc.save();

    // Emit the message to the room using socket.io
   
      // req.io.to(roomId).emit('message', { sender, message });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
