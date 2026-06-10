const routerConfig = require("express").Router();

routerConfig.get("/", (req, res, next) => {
  res.json({
    message: "hello",
    status: "200",
  });
});
module.exports = routerConfig;
