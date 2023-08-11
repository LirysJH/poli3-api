require('dotenv').config();

const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;
const MONGO_DB_URL = 'mongodb+srv://lirys:lvz1RdFAFhyhk3Ry@cluster0.3zh0boc.mongodb.net/';
const DB_URL = process.env.MONGODB_URI || MONGO_DB_URL;

const mongoose = require('mongoose');
mongoose.connect(DB_URL);

const database = mongoose.connection;

database.on('connected', () => console.log('DataBase connected'));
database.once('error', (err) => console.log(err));

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/routes.ts');

app.use(express.json()); // support json
app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ':${PORT}'`));