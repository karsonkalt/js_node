import fs = require("fs")

function routes(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      ```
        <html>
          <head><title>Node App</title></head>
            <body>
            <h1>Users</h1>
            <ul>
                <li>Karson</li>
                <li>Patrick</li>
                <li>Brad</li>
            </ul>
            <form>
                <input type="text" name="user"/>
                <button type="submit">Submit</button>
            </form>
            </body>
        </html>
        ```
    );
    return res.end()
  }

  if (url === "/users" && method === "POST") {
    const body = []
    req.on("data", chunk => {
        body.push(chunk)
    }) 
    const parsedBody = Buffer.concat(body).toString()
    const message = parsedBody.split("=")[1]
    fs.writeFile("./newUsers.txt", message, (error) => {
        res.statusCode = 302
        res.setHeader("Location", "/users")
        return res.end()
    })
  }

  res.setHeader("Content-Type", "text/html");
  res.write(
    ```
    <html>
      <head><title>Node App</title></head>
        <body>
        <h1>My first node app</h1>
        <a href="/users">Go to users page</a>
        </body>
    </html>
    ```
  );
  return res.end();
}

module.export = routes;
