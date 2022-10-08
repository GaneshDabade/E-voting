const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
router.get('/', (req, res) => {
    res.send(`Hello world from the server router js `);
});

router.post('/register', async(req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist." });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching." });
        } else {
            const user = new User({ name, email, phone, password, cpassword });

            await user.save();
            res.status(201).json({ message: "User registered successfully." });
        }
    } catch (err) {
        console.log(err);
    }
});

//login route
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz filled the data" });
        }

        const userLogin = await User.findOne({ email: email });
        const isMatch = (userLogin) ? await bcrypt.compare(password, userLogin.password) : userLogin;

        if (!userLogin) {
            res.status(400).json({ error: "Invalid Credientials" });
        } else if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials" });
        } else {
            res.json({ message: "user Signin Successfully" });
        }
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;