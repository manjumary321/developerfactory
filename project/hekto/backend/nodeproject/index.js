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
   
    host:"localhost",
    user: "root",
    password: "password",
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

//  -----------signup/Register/insert------------

app.post("/signupRegister", (req, res) => {
    // console.log(req)
    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;
    var userrepassword = req.body.userrepassword;
    var refuserroleid = req.body.refuserroleid;
    // var id = req.body.id;
    var sql ="insert into tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword,refuserroleid) values ('"+userfirstname+"','" +userlastname+"','" +useremail+"','"+userpassword+"''','"+userrepassword+"','"+refuserroleid+"' )";

    con.query(sql,function(err,result){
        if(err)throw (err)
        res.send(result);
        console.log("1 record Register");
    })
   
   
});





//  -----------signup/Edit/update------------

app.post("/signupEdit", (req, res) => {
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
    var sql ="select id from tblusers where txtemail = '" + useremail + "'&& txtpassword = '" + userpassword + "'";
    con.query(sql,function(err,result){
        if (err) { 
        console.log(err);
        res.send(err);
    }
      else {
        console.log(result);
        res.send(result);
      }

    })
})

//  -----------products with filter/select------------

app.post("/signupEdit", (req, res) => {
    // console.log(req)
    var productname = req.body.productname;
    var code = req.body.code;
    var price = req.body.price;
    var featured = req.body.featured;
    var id = req.body.id;
    var sql ="update tblusers set txtfirstname ='" + userfirstname+ "',txtlastname ='" + userlastname+ "',txtemail ='" + useremail + "', txtpassword ='" + userpassword + "', txtrepassword ='" +userrepassword + "', refuserroleid=' " +refuserroleid + "' where id ='" + id +  " ' ";

    con.query(sql,function(err,result){
        if(err)throw (err)
        res.send(result);
        console.log("1 record updated");
    })
   
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




