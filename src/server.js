// secret key
const key = "haka_ton1";

// Node requirements
const express = require("express");
const app = express();
app.use(express.json());

// Handle GET root
app.get("/", (req, res) => {
  console.log("somebody meddled with root");
  res.send("GET OUT OF MY ROOT!");
});
