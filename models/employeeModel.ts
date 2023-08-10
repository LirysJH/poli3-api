import Mongoose from 'mongoose';

const dataSchema: Mongoose.Schema = new Mongoose.Schema({
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
        type: Object,
        amount: {
            required: true,
            type: String
        },
        possibility: {
            required: true,
            type: Boolean
        }
    },
    department: {
        required: true,
        type: Object,
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
            type: Object,
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
        }
    }
});

module.exports = Mongoose.model('EmployeeData', dataSchema);