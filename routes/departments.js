const express = require('express');
const Department = require('../models/department');
const router = express.Router();

// GET all departments
router.get('/', async (req, res) => {
  const departments = await Department.findAll();
  res.json(departments);
});

// GET a department by ID
router.get('/:id', async (req, res) => {
  const department = await Department.findByPk(req.params.id);
  if (!department) return res.status(404).send('Department not found.');
  res.json(department);
});

// Add a new department
router.post('/', async (req, res) => {
  const newDepartment = await Department.create(req.body);
  res.status(201).json(newDepartment);
});

// Update a department
router.put('/:id', async (req, res) => {
  const department = await Department.findByPk(req.params.id);
  if (!department) return res.status(404).send('Department not found.');

  await department.update(req.body);
  res.json(department);
});

// DELETE a department
router.delete('/:id', async (req, res) => {
  const department = await Department.findByPk(req.params.id);
  if (!department) return res.status(404).send('Department not found.');

  await department.destroy();
  res.status(204).send();
});

module.exports = router;
