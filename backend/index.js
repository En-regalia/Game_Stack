const http = require('node:http');
const express = require('express');
const axios = require('axios')
const db = require('./db/database.js')
const searchRoutes = require('./routes/search.js')


//activation of dotenv
if (process.env.NODE_ENV !== 'production') { // Server check to confirm dotenv file still required. Move variables and defations to local valriable once in production. Change in dev .env file when relivent.
    require('dotenv').config();
}

// App setup with .env variables defined in .env file
const app = express();
const PORT = process.env.PORT
const searchURL = process.env.SEARCH_URL // likely unessacery to store in .env file decide later 

//middlware activation
app.use(express.json());

// mounting differnt server functions.
app.use(searchURL,searchRoutes) // search function

// Server Activation  
app.listen(PORT,() => {
    console.log(`Server running listening on port ${PORT}`); // Start up server message. Port defined in .env file in development. 
});



