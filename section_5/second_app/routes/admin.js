const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const adminRoutes = express.Router();

const products = [];

adminRoutes.get("/add-product", (req, resp, next) => {
  // Will be executed on every request
  resp.sendFile(path.join(rootDir, "views", "products_new.html"));
});

adminRoutes.post("/products/new", (req, resp, next) => {
  products.push({ title: req.body.title });
  resp.redirect("/");
});

exports.routes = adminRoutes;
exports.products = products;
