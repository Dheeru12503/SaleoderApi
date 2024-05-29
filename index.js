const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Load data from JSON files
const saleOrders = JSON.parse(
  fs.readFileSync(path.join(__dirname, "saleorder.json"), "utf8")
);
const productList = JSON.parse(
  fs.readFileSync(path.join(__dirname, "product.json"), "utf8")
);

// Endpoint for sale orders
app.get("/api/saleOrders", (req, res) => {
  res.json(saleOrders);
});

// Endpoint for product list
app.get("/api/product", (req, res) => {
  res.json(productList);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
