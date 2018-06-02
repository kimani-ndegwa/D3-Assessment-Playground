const express = require("express");
const Router = express.Router();

// Controller

const { Controller } = require("./mvc");

Router.get("/", Controller.showHome);
Router.get("/person", Controller.showPerson);
Router.post("/person", Controller.createPerson);
Router.put("/person", Controller.updatePerson);
Router.delete("/person", Controller.deletePerson);

module.exports = Router;
