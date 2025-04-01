const db = require("../models/database");

// Get all users
const getAllUsers = (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(rows);
  });
};

// Get a single user
const getUser = (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM users WHERE user_id = ?", [id], (err, row) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (!row) return res.status(404).json({ message: "User not found" });
    res.json(row);
  });
};

// Update user
const updateUser = (req, res) => {
    const { user_id, full_name } = req.body;
    if (!user_id || !full_name) return res.status(400).json({ message: "Missing fields" });
  
    db.run(
      "UPDATE users SET full_name = ? WHERE user_id = ?",
      [full_name, user_id],
      function (err) {
        if (err) return res.status(500).json({ message: "Error updating user" });
        res.json({ message: "User updated successfully" });
      }
    );
  };
  

// Delete user
const deleteUser = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM users WHERE user_id = ?", [id], function (err) {
    if (err) return res.status(500).json({ message: "Error deleting user" });
    res.json({ message: "User deleted successfully" });
  });
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
