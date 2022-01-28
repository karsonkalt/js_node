const express = require("express");

const shop = express.Router();

shop.get("/shop", (req, resp, next) => {
  resp.send(`
        <h1>Shop</h1>
    `);
});

module.exports = shop;
