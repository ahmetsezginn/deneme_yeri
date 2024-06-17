const db = require('../../config/database');

const getUserByUsernameAndPassword = (username, password, callback) => {
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.get(query, [username, password], (err, row) => {
    callback(err, row);
  });
};

module.exports = {
  getUserByUsernameAndPassword
};
