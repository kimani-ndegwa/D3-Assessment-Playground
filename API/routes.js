const express = require("express");
const Router = express.Router();

// Controller

const { Controller } = require("./mvc");

Router.get("/", Controller.showHome);
Router.get("/person", Controller.createPerson);

module.exports = Router;
