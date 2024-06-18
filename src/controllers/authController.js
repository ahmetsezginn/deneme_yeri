const userModel = require('../models/userModel');

const login = (req, res) => {
  const { email, password } = req.body;
  userModel.getUserByEmailAndPassword(email, password, (err, user) => {
    if (err) {
      res.render('login_page/login', { errorMessage: 'An error occurred', successMessage: null });
    } else if (user) {
      res.redirect('/'); // Başarılı girişten sonra ana sayfaya yönlendir
    } else {
      res.render('login_page/login', { errorMessage: 'Invalid email or password', successMessage: null });
    }
  });
};

const signup = (req, res) => {
  const { name, email, password } = req.body;
  userModel.createUser(name, email, password, (err, userId) => {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT') { // Benzersiz email hatası
        res.render('login_page/signup', { errorMessage: 'Email already exists' });
      } else {
        res.render('login_page/signup', { errorMessage: 'An error occurred' });
      }
    } else {
      res.render('login_page/login', { errorMessage: null, successMessage: 'Signup successful! Please log in.' });
    }
  });
};

module.exports = {
  login,
  signup
};
