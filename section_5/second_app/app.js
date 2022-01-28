// const http = require("http");
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

app.get("/", (req, resp, next) => {
  resp.send("<h1>Homepage</h1>");
});

app.use((req, resp, next) => {
  // Will be executed on every request if it was first
  resp.status(404);
  resp.send("<h1>404. Page not Found</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
