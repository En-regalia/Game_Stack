const http = require('node:http');
const express = require('express');
const axios = require('axios')

if (process.env.NODE_ENV !== 'production') { // Server check to confirm dotenv file still required. Move variables and defations to local valriable once in production. Change in dev .env file when relivent.
    require('dotenv').config();
}

const app = express();

const PORT = process.env.PORT
const searchRoute = process.env.SEARCH_URL

app.listen(PORT,() => {
    console.log(`Server running listening on port ${PORT}`); // Start up server message. Port defined in .env file in development. 
});

app.get(searchRoute, async (rec, res) => {
    const searchTerm = rec.query.s || "Scythe" // Setting the search query within the fuction to /search?s=search. Search URL (searchRoute) currenlty defined in .env. Default value defined as "Scythe"
    const response = await axios.get('https://boardgameprices.co.uk/api/search',{
        Params: { // details of API paramiters that can be used. Currently hardcoded but once working will need to be updated to rec.query.xx variables to facilitate HTTP requests from front end as with searchTerm
            search: searchTerm,
            sitename: 'localhost3000',
            stock: 'Y',
            currency: GBP

        }
    })
    


})


