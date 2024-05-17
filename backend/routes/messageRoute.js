const express = require('express');
const router = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');
const { sendMessage } = require('../controllers/messageController');


// POST route to send a message

router.post('/sendMessage', isAuthenticatedUser, sendMessage);

module.exports = router;
