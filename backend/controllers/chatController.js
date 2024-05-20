const ChatGroup = require('../models/chatGroup');

exports.joinRoom = async (req, res) => {
    try {
        const { role, school, Batch } = req.user;
        let roomNames = [];

        if (role === 'user') {
            roomNames.push(`${school}_${Batch}`);
            roomNames.push(`${school}_school`);
        } else if (role === 'teacher') {
            roomNames.push(`${school}_teachers`);
            roomNames.push(`${school}_admin`);
            roomNames.push(`${school}_school`);
        } else if (role === 'admin') {
            roomNames.push(`${school}_admin`);
            roomNames.push(`${school}_school`);
        }

        for (let roomName of roomNames) {
            let chatGroup = await ChatGroup.findOne({ roomName });

            if (!chatGroup) {
                chatGroup = new ChatGroup({ roomName, users: [req.user._id] });
            } else if (!chatGroup.users.includes(req.user._id)) {
                chatGroup.users.push(req.user._id);
            }

            await chatGroup.save();
            if (!req.io) {
                return res.status(500).json({ success: false, error: "Socket instance not available" });
            }
            req.io.to(roomName).emit('notification', { message: `${req.user.username} has joined the room.` });
        }

        res.status(200).json({ success: true, message: `Joined chat rooms ${roomNames}` });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
