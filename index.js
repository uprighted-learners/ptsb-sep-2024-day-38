const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 8080;

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// api health
app.get('/', (req, res) => {
    res.send('Hello from the server');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})