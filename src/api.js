// secret key
const key = "haka_ton2";

// reqs
const express = require("express");
const app = express();
app.use(express.json());

// handlers
app.get("/", (req, res) => {
  console.log("somebody meddled with root");
  res.send("GET OUT OF MY ROOT!");
});

// open to localhost:6900
app.listen(6900, () => console.log("Ready to gamibinify in port 6900.."));
