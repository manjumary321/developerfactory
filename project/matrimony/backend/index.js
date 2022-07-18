const express=require('express');
const app = express();
var mysql =require('mysql');
app.use(express.json());

const cors = require('cors');
app.use(cors());

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password:"password",
        database:"matrimony"
    });


    con.connect(function(err){
        if(err) {
            console.log(err);
        }
        else{
            console.log("Connected");
        }
    })

   
    // var sql = " insert into tblusers (txtUsername,txtAddress,txtEmail)  values ('anil','ekm','asd@gmail.com')"
    
    // app.post("/insert", (req, resp) => {
    //   // if(err) throw err;
    //   // console.log("connected!");
      


    // app.post("/insert",function(req,res){
    //     var id
    //     var sql =" insert into tblusers (txtUsername,txtAddress,txtEmail)  values ('anil','ekm','asd@gmail.com')"
    //     con.query(sql,function(err,result){
    //         if(err)throw err;
    //         res.send(result);
    //     })
    // })


    // con.query(sql, function (err, result) {
    //     if (err) console.log(err);
    //     else {
    //       console.log(result);
    //       resp.send(result);
    //     }
    //   });
/*-----------------------------------------------*/
    // app.post("/insert",function(req,res){
    //   //  var id
    //     var sql =" insert into tblusers (txtProfileFor,txtUsername,txtMobile)  values ('Relative','anil','3455')"
    //     con.query(sql,function(err,result){
    //         if(err)throw err;
    //         res.send(result);
    //     })
    // })

/*-------------------------------HomePage1/Resigter---------------------------*/     

    // app.post("/insert",(req,res)=>{
        
    app.post("/HomePage1",(req,res)=>{

        var profilefor = req.body.profilefor;
        var username = req.body.username;
        var mobile = req.body.mobile;
        var sql =" insert into tblusers (txtProfileFor,txtUsername,txtMobile)  values ('"+ profilefor +"','" + username +"','" + mobile +"' )";

        //   var sql =" insert into tblusers (txtProfileFor,txtUsername,txtMobile)  values ('self','anu','8976')";
          con.query(sql,function(err,result){
              if(err)throw err
              res.send(result);
              console.log("1 record insereted");
          })
      })
/*-----------------------------Signup21-------------------------------------*/


    app.post("/Signup21",function(req,res){
        var dateofmonth = req.body.dateofmonth;
        var religion = req.body.religion;
        var caste = req.body.caste;
        var subcaste = req.body.subcaste;
        var mothertoungue = req.body.mothertoungue;
        var gmail = req.body.gmail;
        var password = req.body.password;
        var id = req.body.id;
               
        var sql ="update tblusers set dtDOB ='" + dateofmonth + "', refReligion = '" + religion + "', refCaste ='" + caste + "', txtSubcaste ='" + subcaste + "', refMothertoungue ='" + mothertoungue + "', txtEmail=' " + gmail + "', txtPassword ='" + password + "' where id ='" + id +  " ' ";
        con.query(sql,function(err,result){
            if(err)throw err
            res.send(result); 
            console.log("1 record updated");                       
        })
    })
    

    /*-------------------------------Login------------------------------*/

    app.post("/Login",(req,res)=>{
        var username = req.body.username;
        var password = req.body.password;
        var sql ="select id from tblusers where txtUserName = '" + username + "'and txtPassword = '" + password + "'";
        con.query(sql,function(err,result){
            if (err) { 
            console.log(err);
            res.send(err)}
          else {
            console.log(result);
            res.send(result);
          }

        })
    })

/*----------------------------ProflieList1----------------------------------*/

app.post("/ProflieList1",(req,res)=>{
   
    sql="select * from tblusers";
    con.query(sql,function (err, result){
        if (err) 
          console.log(err);
        else {
          console.log(result);
          res.send(result);
        }
       })
    })

/*-----------------------------Proflie1----------------------------------------*/

app.post("/Proflie1",(req,res)=>{
    var id = req.body.id
    sql="select id, txtUserName, txtHeight, txtGender,dtDOB,refReligion,refCaste,refMothertoungue, txtEmail, txtPassword, txtAddress, txtInterests, refEducation, refProfession, refState, txtProfileFor, blImage, txtMobile, txtSubcaste from tblusers where id = '" + id + "'";
    con.query(sql,function (err, result){
        if (err) 
          console.log(err);
        else {
          console.log(result);
          res.send(result);
        }
       })
    })

/*----------------------------------search--------------------------------------*/

app.post ("/search",(req,res)=>{
    var username = req.body.username;
    sql="select id, dtDOB,refReligion,refCaste,txtProfileFor from tblusers where txtUserName ='" + username +"'";
    con.query(sql,function (err, result){
        if (err) 
          console.log(err);
        else {
          console.log(result);
          res.send(result);
        }
       })
})

    app.post("/select", (req, res)=>{
        var parametervariable=req.body.parameter;
        sql ="SELECT * from tblusers where id='"+ parametervariable +"'";
        con.query(sql,function (err, result){
          if (err) 
            console.log(err);
          else {
            console.log(result);
            res.send(result);
          }
         })
        });//API//

    app.post("/delete",(req,res)=>{
        var deleteid = req.body.deleteid;
        sql="delete from tblusers where id= '" + deleteid + "'";
        con.query(sql,function(err, result){
            if(err) 
                console.log(err);
            else{
                console.log(result);
                res.send(result);
            }
        })
    });    

    app.listen(8000, () => {
        console.log("Server is running in port 8000");
      });

