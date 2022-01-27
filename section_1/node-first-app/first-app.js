console.log("Hello from node.js");
// We can also write to a file instead of the console in node.js

// fs is short for file system
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from node.js");
