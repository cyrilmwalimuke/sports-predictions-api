const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

const quotes = [
  "Success is not final, failure is not fatal.",
  "Do what you can with what you have.",
  "Stay hungry, stay foolish.",
];

// Route
app.get("/quote", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

// Root
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));