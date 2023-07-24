// index.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database!");
});

app.post("/register", (req, res) => {
  const { firstName, lastName, email, password, contact } = req.body;

  con.query(
    "INSERT INTO users (firstName, lastName, email, password, contact) VALUES (?, ?, ?, ?, ?)",
    [firstName, lastName, email, password, contact],
    (err, result) => {
      if (err) {
        console.error("Error while registering user:", err);
        res.status(500).json({ message: "Error while registering user." });
        return;
      }
      res.status(200).json({ message: "User registered successfully!" });
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  con.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.error("Error while logging in:", err);
        res.status(500).json({ message: "Error while logging in." });
        return;
      }

      if (result.length > 0) {
        res.status(200).json({ message: "Login successful!", user: result[0] });
      } else {
        res.status(401).json({ message: "Invalid credentials!" });
      }
    }
  );
});

const port = 3001; // You can use any available port
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
