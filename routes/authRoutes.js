const express = require('express');
const { signup, signin } = require('../controllers/authController');

const router = express.Router();

// Signup Route
router.post('/signup', signup);

// Signin Route
router.post('/signin', signin);

module.exports = router;