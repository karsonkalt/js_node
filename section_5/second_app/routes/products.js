const path = require("path");
const express = require("express");

const products = express.Router();

products.get("/products/new", (req, resp, next) => {
  // Will be executed on every request
  resp.sendFile(path.join(__dirname, "../", "views", "products_new.html"));
});

products.post("/products", (req, resp, next) => {
  console.log(req.body);
  resp.redirect("/");
});

module.exports = products;
