const db = require('../../config/database');

const getUserByEmailAndPassword = (email, password, callback) => {
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.get(query, [email, password], (err, row) => {
    callback(err, row);
  });
};

const createUser = (name, email, password, callback) => {
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.run(query, [name, email, password], function (err) {
    callback(err, this.lastID);
  });
};

module.exports = {
  getUserByEmailAndPassword,
  createUser
};
