const express = require('express');
const { createGroupChat, getGroupChats, sendMessage, getMessages } = require('../controllers/chatController');
const router = express.Router();
const { authenticateUser } = require('../middlewares/auth');

router.post('/create-group', authenticateUser, createGroupChat);
router.get('/groups', authenticateUser, getGroupChats);
router.post('/message', authenticateUser, sendMessage);
router.get('/messages/:chatId', authenticateUser, getMessages);

module.exports = router;
