const http = require("http");
const app = require("./bin/www.js");
require("./database/index.js")

http
    .createServer(app)
    .listen(3000, () => console.log("Serveur at http://localhost:3000"));