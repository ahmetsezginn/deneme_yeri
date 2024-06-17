const userModel = require('../models/userModel');

const login = (req, res) => {
  const { username, password } = req.body;
  userModel.getUserByUsernameAndPassword(username, password, (err, user) => {
    if (err) {
      res.status(500).send('An error occurred');
    } else if (user) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  });
};

module.exports = {
  login
};
