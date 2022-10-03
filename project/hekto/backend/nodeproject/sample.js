const express = require("express");
const app = express();
// var mysql = require('mysql');

const port = 4000;
app.use(express.json())//for reading json request


//------------------sample-------
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/n", (req, res) => {
    res.send("Sample Express Route!");
});

app.post("/addition", (req, res) => {
    let a = req.body.numone;
    let b = req.body.numtwo;
    let sum = a + b;
    res.send("Result=" + sum);
});