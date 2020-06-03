require('dotenv').config()
//dotenv must be at the top level
//Create a
const express = require('express');
const app = require('./server.js');


const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`\n* Server Running on http://localhost:${port} *\n`);
}); 
