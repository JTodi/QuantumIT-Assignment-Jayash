const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(cors());


const Route = require('./Routes/route');


mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', Route);

app.listen(PORT, ()=> console.log("Server connected") );