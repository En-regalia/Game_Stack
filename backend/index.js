const http = require('node:http');
const express = require('express');
const axios = require('axios')
const db = require('.db/database.js')
const searchRoutes = require('./routes/search.js')

const app = express();

if (process.env.NODE_ENV !== 'production') { // Server check to confirm dotenv file still required. Move variables and defations to local valriable once in production. Change in dev .env file when relivent.
    require('dotenv').config();
}

//.env variables defined in .env file
const PORT = process.env.PORT
const searchURL = process.env.SEARCH_URL


app.listen(PORT,() => {
    console.log(`Server running listening on port ${PORT}`); // Start up server message. Port defined in .env file in development. 
});

// mounting differnt server functions.
app.use(searchURL,searchRoutes) // search function


