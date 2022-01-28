const path = require("path");
const express = require("express");

const shop = express.Router();

shop.get("/", (req, resp, next) => {
  resp.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  //   resp.sendFile("../views/shop.html");
});

module.exports = shop;
