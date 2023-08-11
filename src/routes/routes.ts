const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/employeeModel.ts');

// POST - create new employee
// @ts-ignore
router.post('/addEmployee', async (req, res) => {
    const employeeData = new EmployeeModel({
        name: req.body.name,
        image: req.body.image,
        title: req.body.title,
        bio: req.body.bio,
        workplace: req.body.workplace,
        mobile: req.body.mobile,
        declarations: req.body.declarations,
        department: req.body.department
    });

    try {
        const data = await employeeData.save(); // save to db

        res.status(200).json(data);
    } catch(err) {
        // @ts-ignore
        res.status(404).json({ message: err.message });
    }
})

// GET - get all employees
// @ts-ignore
router.get('/getEmployees', async (req, res) => {
    try {
        const employees = await EmployeeModel.find();

        res.json(employees);
    } catch(err) {
        // @ts-ignore
        res.status(500).json({ message: err.message });
    }
})

// GET - get employee by ID
// @ts-ignore
router.get('/getEmployee/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await EmployeeModel.findById(employeeId);

        res.json(employee);
    } catch(err) {
        // @ts-ignore
        res.status(500).json({ message: err.message });
    }
})

// PATCH - update employee by id
// @ts-ignore
router.patch('/updateEmployee/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const data = req.body;
        const options = { new: true };
        const result = await EmployeeModel.findByIdAndUpdate(employeeId, data, options);

        res.send(result);
    } catch(err) {
        // @ts-ignore
        res.status(500).json({ message: err.message });
    }
})

// DELETE - delete employee by id
// @ts-ignore
router.delete('/deleteEmployee/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        await EmployeeModel.findByIdAndDelete(employeeId);

        res.send(`Deleted ${employeeId} employee`);
    } catch(err) {
        // @ts-ignore
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;