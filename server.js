const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Litening on port ${PORT}...`)
});
