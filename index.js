const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/user.schema');

const app = express();
const PORT = 8080;

// parse json middleware
app.use(express.json());

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// api health
app.get('/api/health', (req, res) => {
    res.send('Hello from the server');
})

// POST - /api/register - creates a new user
app.post("/api/register", (req, res) => {
    const { username, email, password } = req.body;

    // validate the request body
    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the fields"
        })
    }
    try {
        // create a new user
        const newUser = {
            username,
            email,
            password
        }

        // user model
        const user = new User(newUser);

        // save the user
        user.save();

        // send the succecss response
        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
    } catch (error) {
        console.log(error);
    }
})

// POST - /api/login - login a user

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})