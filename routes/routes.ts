import {IEmployee} from '../models/IEmployee';
import * as express from 'express';
import {Router, Request, Response} from "express";

const router: Router = express.Router();
const EmployeeModel = require('../models/employeeModel');

// POST - create new employee
router.post('/addEmployee', async (req: Request, res: Response): Promise<void> => {
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
        const data: JSON = await employeeData.save(); // save to db

        res.status(200).json(data);
    } catch(err: any) {
        res.status(404).json({ message: err.message });
    }
})

// GET - get all employees
router.get('/getEmployees', async (req: Request, res: Response): Promise<void> => {
    try {
        const employees: Array<IEmployee> = await EmployeeModel.find();

        res.json(employees);
    } catch(err: any) {
        res.status(500).json({ message: err.message });
    }
})

// GET - get employee by ID
router.get('/getEmployee/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const employeeId: string = req.params.id;
        const employee: unknown = await EmployeeModel.findById(employeeId);

        res.json(employee);
    } catch(err: any) {
        res.status(500).json({ message: err.message });
    }
})

// PATCH - update employee by id
router.patch('/updateEmployee/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const employeeId: string = req.params.id;
        const data: unknown = req.body;
        const options: { new: boolean } = { new: true };
        const result: unknown = await EmployeeModel.findByIdAndUpdate(employeeId, data, options);

        res.send(result);
    } catch(err: any) {
        res.status(500).json({ message: err.message });
    }
})

// DELETE - delete employee by id
router.delete('/deleteEmployee/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const employeeId: string = req.params.id;
        await EmployeeModel.findByIdAndDelete(employeeId);

        res.send(`Deleted ${employeeId} employee`);
    } catch(err: any) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;