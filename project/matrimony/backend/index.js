const express=require('express');
const app = express();
var mysql =require('mysql');


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

    app.post("/insert",function(req,res){
        var id
        var sql =" insert into tblusers (txtProfileFor,txtUsername,txtMobile)  values ('Relative','anil','3455')"
        con.query(sql,function(err,result){
            if(err)throw err;
            res.send(result);
        })
    })

    app.post("/update",function(req,res){
        var sql ="update tblusers set dtDOB = '2022-05-23', refReligion ='1',refCaste= '4',refMothertoungue='1', txtEmail='qwe@gmail.com', txtPassword ='3455' where id"
        con.query(sql,function(err,result){
            if(err)throw err;
            res.send(result);
        })
    })
    

    app.listen(8000, () => {
        console.log("Server is running in port 8000");
      });

