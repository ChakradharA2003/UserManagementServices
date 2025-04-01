const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/database");
require("dotenv").config();

const registerUser = (req, res) => {
  const { full_name, mob_num, pan_num, password } = req.body;
  if (!full_name || !mob_num || !pan_num || !password)
    return res.status(400).json({ message: "All fields are required" });

  const hashedPassword = bcrypt.hashSync(password, 10);
  db.run(
    `INSERT INTO users (user_id, full_name, mob_num, pan_num, password) VALUES (?, ?, ?, ?, ?)`,
    [crypto.randomUUID(), full_name, mob_num, pan_num, hashedPassword],
    (err) => {
      if (err) return res.status(500).json({ message: "Error registering user" });
      res.status(201).json({ message: "User registered successfully" });
    }
  );
};

const loginUser = (req, res) => {
  const { mob_num, password } = req.body;
  if (!mob_num || !password) return res.status(400).json({ message: "All fields are required" });

  db.get(`SELECT * FROM users WHERE mob_num = ?`, [mob_num], (err, user) => {
    if (err || !user || !bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
  });
};

const logoutUser = (req, res) => {
  res.json({ message: "Logout successful" });
};

module.exports = { registerUser, loginUser, logoutUser };
