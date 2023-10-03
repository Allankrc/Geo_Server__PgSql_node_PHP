//https://www.kindsonthegenius.com/build-a-rest-api-with-node-js-and-postgresql-get-post-putdelete-step-by-step/
const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();   

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();

