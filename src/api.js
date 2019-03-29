// configs
const key = "haka_ton2"; // secret key

// reqs
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// cors
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 500000000000000000000000000
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// datas
const customers = fs.readFileSync("../rData/customers/customers.json");
const employees = fs.readFileSync("../rData/employees/employees.json");
// products
const products = fs.readFileSync("../rData/products/products.json");
// stores
const stores = fs.readFileSync("../rData/stores/stores.json");

// handlers
app.get("/", (req, res) => {
  console.log("somebody meddled with root");
  res.send("GET OUT OF MY ROOT!");
});
app.get("/customers", (req, res) => {
  console.log(":D");
  res.send(JSON.parse(customers));
});
app.get("/employees", (req, res) => {
  console.log(":D");
  res.send(JSON.parse(employees));
});
app.get("/products", (req, res) => {
  console.log(":D");
  res.send(JSON.parse(products));
});
app.get("/stores", (req, res) => {
  console.log(":D");
  res.send(JSON.parse(stores));
});

// open to localhost:6900
app.listen(6900, () => console.log("Ready to gamibinify in port 6900.."));
