const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

// app.get('/login', (req, res) => {
//     res.send(`Hello world from the login `);
// });
// app.get('/signup', (req, res) => {
//     res.send(`Hello world from the signup`);
// });
app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})