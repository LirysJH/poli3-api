import Mongoose from 'mongoose';

const declarationsSchema: Mongoose.Schema = new Mongoose.Schema({
    amount: {
        required: true,
        type: Number
    },
    possibility: {
        required: true,
        type: Boolean
    }
});

const scheduleSchema: Mongoose.Schema = new Mongoose.Schema({
    monday: {
        required: true,
        type: String
    },
    tuesday: {
        required: true,
        type: String
    },
    wednesday: {
        required: true,
        type: String
    },
    thursday: {
        required: true,
        type: String
    },
    friday: {
        required: true,
        type: String
    }
});

const departmentSchema: Mongoose.Schema = new Mongoose.Schema({
    number: {
        required: true,
        type: String
    },
    cabinet: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    schedule: {
        required: false,
        type: scheduleSchema
    }
});

const employeeSchema: Mongoose.Schema = new Mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    title: {
        required: false,
        type: String
    },
    bio: {
        required: false,
        type: String
    },
    workplace: {
        required: false,
        type: String
    },
    mobile: {
        required: false,
        type: String
    },
    declarations: {
        required: true,
        type: declarationsSchema
    },
    department: {
        required: true,
        type: departmentSchema
    }
});

module.exports = Mongoose.model('EmployeeData', employeeSchema);