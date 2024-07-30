
const express = require("express");
const app = express();
const cors = require('cors');
const { default: axios } = require("axios");
const port = 3001;

app.use(cors())

const url = 'https://fakestoreapi.com/products'
fetch(url)
    .then(response => {
        for(const pair of response.headers){
            
          }
        return response.text();
    }).then(data => {
        console.log("Happy product");
    });

app.listen(port,() => {
    console.log(`server is running on port http://localhost:${port}`);
});
// app.get(`https://fakestoreapi.com/products`, function (req,res,next){