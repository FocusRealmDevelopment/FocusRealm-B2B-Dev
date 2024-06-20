const express = require('express');
const { createGroupChat, getGroupChats, sendMessage, getMessages } = require('../controllers/chatController');
const router = express.Router();


router.post('/create-group', createGroupChat);
router.get('/groups', getGroupChats);
router.post('/message', sendMessage);
router.get('/messages/:chatId', getMessages);

module.exports = router;
