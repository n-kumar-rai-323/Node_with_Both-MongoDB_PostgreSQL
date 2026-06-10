const http = require("http");
const app = require("./config/express.config");
require("./config/mongo.db");
const PORT = process.env.PORT || 9005;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
