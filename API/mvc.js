/**
 * Simple demonstration of how MVC pattern is often separated.
 */
const Person = require("../DataStructures/person");

// Very simpe model for a person as an example.
const Model = {
  PersonModel: Person
};

// Just log out something here.
const View = {
  show: data => {
    console.log(`Our data is -->${JSON.stringify(data)}`);
  }
};

// Connects the Model to the View.

const Controller = {
  showHome: (req, res) => {
    res.json("Welcome to the home API route.");
  },

  showPerson: (req, res) => {
    let person = new Model.PersonModel("Test", "Person");
    View.show(person);
  },

  createPerson: (req, res) => {
    let person = new Model.PersonModel("Test", "Person");
    // Return what is in the body for now.
    res.status(201).send({ data: req.body });
  },

  updatePerson: (req, res) => {
    res.send({ data: req.body });
  },

  deletePerson: (req, res) => {
    res.status(204).send("");
  }
};

module.exports = {
  Model,
  View,
  Controller
};
