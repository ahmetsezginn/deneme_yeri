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

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public'));

// Routes
app.use('/auth', authRoutes);

// Login Page Route
app.get('/login', (req, res) => {
  const { success } = req.query;
  res.render('login_page/login', { errorMessage: null, successMessage: success });
});

// Signup Page Route
app.get('/signup', (req, res) => {
  res.render('login_page/signup', { errorMessage: null });
});

// Default Route to Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;
