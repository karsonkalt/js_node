// const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const products = require("./routes/products");
const shop = require("./routes/shop");

// Parsing middleware before other middlewares
// It will handle string parsing for us, but not JSON
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", products);
app.use(shop);

app.use((req, resp, next) => {
  // Will be executed on every request if it was first
  resp.status(404);
  resp.sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
