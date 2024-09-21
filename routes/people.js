const express = require('express');
const Person = require('../models/person');
const Department = require('../models/department');
const router = express.Router();

// GET all people
router.get('/', async (req, res) => {
  const people = await Person.findAll({ include: Department });
  res.json(people);
});

// GET a person by ID
router.get('/:id', async (req, res) => {
  const person = await Person.findByPk(req.params.id, { include: Department });
  if (!person) return res.status(404).send('Person not found.');
  res.json(person);
});

// Add a new person
router.post('/', async (req, res) => {
  const newPerson = await Person.create(req.body);
  res.status(201).json(newPerson);
});

// Update a person
router.put('/:id', async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (!person) return res.status(404).send('Person not found.');

  await person.update(req.body);
  res.json(person);
});

// DELETE a person
router.delete('/:id', async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (!person) return res.status(404).send('Person not found.');

  await person.destroy();
  res.status(204).send();
});

module.exports = router;
