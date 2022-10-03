const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send(`Hello world from the server app.js`);
});
app.get('/login', (req, res) => {
    res.send(`Hello world from the login `);
});
app.get('/signup', (req, res) => {
    res.send(`Hello world from the signup`);
});
app.listen(3000, () => {
    console.log(`server is runnig at port no 3000`);
})