const express = require("express");
const app = new express();
const { notFoundHandler, errorHandler } = require("./src/utility/error");
const baseRoute = require("./src/routes/base.route");
const routes = require("./src/routes/index.route");

/* 
added new lines
*/

// ? connected DB
const connectDB = require("./config/db").apply();
// ? use middleware
const cors = require("cors");
const morgan = require("morgan");
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

// ? routes
app.use("/", baseRoute);
app.use("/api/v1", routes);

// ? error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
