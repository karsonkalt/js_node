// const http = require("http");
const path = require("path");
const rootDir = require("./util/path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminData = require("./routes/admin");
const shop = require("./routes/shop");

app.set("view engine", "pug");
app.set("views", "views");

// Parsing middleware before other middlewares
// It will handle string parsing for us, but not JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shop);

app.use((req, resp, next) => {
  // Will be executed on every request if it was first
  resp.status(404);
  resp.sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
