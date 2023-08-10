import {Express} from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

const PORT: number = 3000;
const mongoDBUrl: string = 'mongodb+srv://lirys:lvz1RdFAFhyhk3Ry@cluster0.3zh0boc.mongodb.net/';

mongoose.connect(mongoDBUrl);
const database: mongoose.Connection = mongoose.connection;

database.on('connected', () => console.log('DataBase connected'));
database.once('error', (err: Error) => console.log(err));

const express = require('express');
const app: Express = express();
const cors = require('cors');
const routes = require('./routes/routes');

app.use(express.json()); // support json
app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running at :${PORT}`));