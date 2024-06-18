const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Static Files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/auth', authRoutes);

// Login Page Route
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login_page/login.html'));
});

// Signup Page Route
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login_page/signup.html'));
});

// Default Route to Serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;
