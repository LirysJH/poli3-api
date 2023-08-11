import {Express} from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

const DEFAULT_PORT: number = 5000;
const PORT: string | number = process.env.PORT || DEFAULT_PORT;
const MONGO_DB_URL: string = 'mongodb+srv://lirys:lvz1RdFAFhyhk3Ry@cluster0.3zh0boc.mongodb.net/';
const DB_URL: string = process.env.MONGODB_URI || MONGO_DB_URL;

mongoose.connect(DB_URL);

const database: mongoose.Connection = mongoose.connection;

database.on('connected', () => console.log('DataBase connected'));
database.once('error', (err: Error) => console.log(err));

const express = require('express');
const app: Express = express();
const cors = require('cors');
const routes = require('./src/routes/routes');

app.use(express.json()); // support json
app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ':${PORT}'`));