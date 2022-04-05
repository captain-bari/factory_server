const express = require('express');
const app = express();

// const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require("body-parser")
// const db = mysql.createPool({
//     host : 'remotemysql.com',
//     user : 'NEe9ehOvCX',
//     password : 'pefMVux24e',
//     database : 'NEe9ehOvCX'
// })

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/' , (req , res) => {
    res.send("hello");
})

app.listen(process.env.PORT || 5001,() =>{
    console.log("running");
})