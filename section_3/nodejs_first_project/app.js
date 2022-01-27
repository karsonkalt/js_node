const fs = require("fs");
const http = require("http");

let counter = 1;

function rqListener(req, res) {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body>
        <h1>Hello from node You've visited ${counter} times.</h1>
        <form action="/message" method="POST">
          <input name="message" type="text" />
          <button type="submit">Send</button>
        </form>
    </body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // These are event listeners which are async
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("./message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  counter++;
}

const server = http.createServer(rqListener);

server.listen(3000);
