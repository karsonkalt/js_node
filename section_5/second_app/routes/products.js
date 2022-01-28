const express = require("express");

const products = express.Router();

products.get("/products", (req, resp, next) => {
  // Will be executed on every request
  resp.send(`
      <h1>All Products</h1>
      <ul>
        <li>Toy</li>
        <li>Pencil</li>
        <li>Gym Bag</li>
      </ul>
      <a href="/admin/products/new">Add a product</a>
    `);
});

products.get("/products/new", (req, resp, next) => {
  // Will be executed on every request
  resp.send(`
      <h1>Add a Product</h1>
      <form action="/admin/products" method="POST">
          <input type="text" name="product"/>
          <button type="submit">Send</input>
      </form>
    `);
});

products.post("/products", (req, resp, next) => {
  console.log(req.body);
  resp.redirect("/");
});

module.exports = products;
