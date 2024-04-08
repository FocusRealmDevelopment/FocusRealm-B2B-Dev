const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");
const { joinRoom } = require("../controllers/chatController");



// POST route to send a message
router.post('/joinRoom', isAuthenticatedUser,joinRoom);

module.exports = router;
