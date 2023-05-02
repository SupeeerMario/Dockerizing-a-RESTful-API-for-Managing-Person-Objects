var Person = require("../models/person");


exports.findPersons = (req, res) => {
  Person.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Persons.",
      });
    });
};

exports.findPersonById = (req, res) => {
  const id = req.params.id;

  Person.findById(req.params.id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Person not found with id: " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Person with id: " + id });
    });
};


exports.createNewPerson = (req, res) => {

  const personData = new Person({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email
  });
  personData
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Person.",
      });
    });
};

exports.updateById = (req, res) => {
  const id = req.params.id;

  Person.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    {
      id: req.body.id,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email
    },
    {
      new: true
    }
  )
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Person not found with id: " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Person with id: " + id });
    });
};


exports.deletePersonById = (req, res) => {
  const id = req.params.id;

  Person.findByIdAndRemove(req.params.id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Person not found with id: " + id });
      else res.send("Person deleted with id :" + id);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Person with id: " + id });
    });
};