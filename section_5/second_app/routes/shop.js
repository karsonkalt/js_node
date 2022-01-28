const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const { products } = require("./admin");

const shop = express.Router();

shop.get("/", (req, resp, next) => {
  resp.render("shop", { products, title: "Shop" });
  //   resp.sendFile("../views/shop.html");
});

module.exports = shop;
