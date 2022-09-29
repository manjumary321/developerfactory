const express = require("express");
const app = express();
var mysql=require('mysql');

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

//  -----------connection------------
var con = mysql.createConnection({
    host: "database-1.c2ptdumfetep.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "password123",
    database: "hekto",
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected");
    }
})




//  -----------signup/update------------

app.post("/signupupdate", (req, res) => {
    // console.log(req)
    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;
    var userrepassword = req.body.userrepassword;
    var refuserroleid = req.body.refuserroleid;
    var id = req.body.id;
    var sql ="update tblusers set txtfirstname ='" + userfirstname+ "',txtlastname ='" + userlastname+ "',txtemail ='" + useremail + "', txtpassword ='" + userpassword + "', txtrepassword ='" +userrepassword + "', refuserroleid=' " +refuserroleid + "' where id ='" + id +  " ' ";

    con.query(sql,function(err,result){
        if(err)throw (err)
        res.send(result);
        console.log("1 record updated");
    })
   
   
});






//  -----------login/select------------
app.post("/Loginselect",(req,res)=>{
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;
    var sql ="select id from tblusers where txtemail = '" + useremail + "'and txtpassword = '" + userpassword + "'";
    con.query(sql,function(err,result){
        if (err) { 
        console.log(err);
        res.send(err)
    }
      else {
        console.log(result);
        res.send(result);
      }

    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




