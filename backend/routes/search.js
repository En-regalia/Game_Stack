// Search function using the external API "https://boardgameprices.co.uk/api/plugin"
app.get(searchRoute, async (req, res) => {
    const searchTerm = req.query.s || "Scythe" // Setting the search query within the fuction to /search?s=search. Search URL (searchRoute) currenlty defined in .env. Default value defined as "Scythe"
    const response = await axios.get('https://boardgameprices.co.uk/api/search',{
        params: { // details of API paramiters that can be used. Currently hardcoded but once working will need to be updated to rec.query.xx variables to facilitate HTTP requests from front end as with searchTerm
            search: searchTerm,
            sitename: 'localhost3000',
            stock: 'Y',
            currency: 'GBP',
        }
    })
    res.json(response.data) // returns json object data to the frontend
})