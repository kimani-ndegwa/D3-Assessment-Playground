// Initialize dot env.
require("dotenv").config();

const express = require("express");
const app = express();

// Get MVC structure and add it to middleware
const Router = require("./routes");

const PORT = process.env.PORT;

app.use(Router);

app.listen(PORT, (req, res) => {
  console.log(`Simple Express API running on port ${process.env.PORT}`);
});

module.exports = app;
