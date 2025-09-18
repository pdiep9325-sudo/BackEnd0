const { createServer } = require("node:http"); //no need to install "require"
// boi vi no duoc tich hop trong nodejs roi,chi can goi ra va su dung

const hostname = "localhost"; //localhost === 127.0.0.1  - range 127.0.0.1 -> 127.0.0.255
const port = 7000; // tham so port range 1 -> around 65000. advoid 21 (file transfer protocol)
// 23 (telnet), 80 (HTTP), 443 (HTTPS). frontend port use 3000 or 3001 3002, backend 8000,8001,8002

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
