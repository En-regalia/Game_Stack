const http = require('node:http');
const express = require('express');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log(`Server running listening on port ${PORT}`);
});




