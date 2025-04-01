const db = require("./database");

const User = {
  create: (user, callback) => {
    const query = `INSERT INTO users (user_id, full_name, mob_num, pan_num, password) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [user.user_id, user.full_name, user.mob_num, user.pan_num, user.password], callback);
  },

  findByMobile: (mob_num, callback) => {
    db.get(`SELECT * FROM users WHERE mob_num = ?`, [mob_num], callback);
  },

  findAll: (callback) => {
    db.all(`SELECT user_id, full_name, mob_num, pan_num FROM users WHERE is_active = 1`, [], callback);
  },

  findById: (user_id, callback) => {
    db.get(`SELECT user_id, full_name, mob_num, pan_num FROM users WHERE user_id = ?`, [user_id], callback);
  },

  updateUser: (user_id, updateData, callback) => {
    const fields = Object.keys(updateData).map((key) => `${key} = ?`).join(", ");
    const values = [...Object.values(updateData), user_id];
    db.run(`UPDATE users SET ${fields} WHERE user_id = ?`, values, callback);
  },

  deleteUser: (user_id, callback) => {
    db.run(`DELETE FROM users WHERE user_id = ?`, [user_id], callback);
  }
};

module.exports = User;
