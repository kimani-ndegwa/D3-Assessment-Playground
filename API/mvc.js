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

  createPerson: (req, res) => {
    let person = new Model.PersonModel("Test", "Person");
    View.show(person);
  }
};

module.exports = {
  Model,
  View,
  Controller
};
