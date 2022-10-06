const express = require("express");
const app = express();
var mysql = require('mysql');

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

    host: "localhost",
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
    var sql = "insert into tblusers (txtfirstname,txtlastname,txtemail,txtpassword,txtrepassword,refuserroleid) values ('" + userfirstname + "','" + userlastname + "','" + useremail + "','" + userpassword + "''','" + userrepassword + "','" + refuserroleid + "' )";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Register");
    })


});





//  -----------ProfileUpdate/signup/Edit------------

app.post("/signupEdit", (req, res) => {
    // console.log(req)
    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;
    var userrepassword = req.body.userrepassword;
    var refuserroleid = req.body.refuserroleid;
    var id = req.body.id;
    var sql = "update tblusers set txtfirstname ='" + userfirstname + "',txtlastname ='" + userlastname + "',txtemail ='" + useremail + "', txtpassword ='" + userpassword + "', txtrepassword ='" + userrepassword + "', refuserroleid=' " + refuserroleid + "' where id ='" + id + " ' ";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record updated");
    })

});



//  -----------login/select------------

app.post("/Loginselect", (req, res) => {
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword;
    var sql = "select id from tblusers where txtemail = '" + useremail + "'&& txtpassword = '" + userpassword + "'";
    con.query(sql, function (err, result) {
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

app.post("/Getproductwithfilter", (req, res) => {
    // console.log(req)

    var featured = req.body.featured;

    var sql = "select txtproductname,txtcode,txtprice from tblproduct where featured ='" + featured + "'";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result viewed");
    })

});

//  -----------products with filter/select all condition------------
app.post("/Getproductwithfilterall", (req, res) => {
    // console.log(req)
    var type = req.body.type;
    switch (type) {
        case 'featured':
            // var featured = req.body.featured;
            // var sql = "select txtproductname,txtcode,txtprice from tblproduct where featured ='" + featured + "'";
            var sql = "select txtproductname,txtcode,txtprice from tblproduct where featured =1";
            break;
        case 'latest':
            // var latest = req.body.latest;
            // var sql = "select txtproductname,txtcode,txtprice from tblproduct where latest ='" + latest + "'";
            var sql = "select txtproductname,txtcode,txtprice from tblproduct where latest =1";
            break;
        case 'trending':
            // var trending = req.body.trending;
            // var sql = "select txtproductname,txtcode,txtprice from tblproduct where trending ='" + trending + "'";
            var sql = "select txtproductname,txtcode,txtprice from tblproduct where trending =1";
            break;
        default: alert("result no found")  ;  
    }
    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result viewed");
    })

});


//  -----------GetCategories/select------------

app.post("/GetCategories", (req, res) => {
    // console.log(req)

    var id = req.body.id

    var sql = "select txtcatename,txtcateprice from tblcategories where id='"+id+"'";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result Categories");
    })

});

//  -----------GetBlogs/select------------

app.post("/GetBlogs", (req, res) => {
    // console.log(req)

      var id = req.body.id

    var sql = "select txtuser,txttitle,txtdescr,createddate from tblblogs where id='"+id+"'";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result Blogs");
    })

});

//  -----------GetBlogs/select------------

app.post("/GetRelatedProducts", (req, res) => {
    // console.log(req)

      var productA = req.body.productA

    var sql = "select id ,productB from tblrelatedproduct where productA='"+productA+"'";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result RelatedProducts");
    })

});

//  -----------InsertAddress------------

app.post("/InsertAddress", (req, res) => {
    // console.log(req)
    var userid = req.body.userid;
    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var useraddress = req.body.useraddress;
    var userappaend = req.body.userappaend;
    var usercity = req.body.usercity;
    var usercountry = req.body.usercountry;
    var userpostcode = req.body.userpostcode;

   
    var sql = "insert into tbladdress (refuserid,txtfirstname,txtlastname,txtaddress,txtappaend,txtcity,txtcountry,txtpostcode) values ('"+userid+"','" + userfirstname + "','" + userlastname + "','" + useraddress + "','" + userappaend + "','" + usercity + "','" + usercountry + "','"+userpostcode+"')";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Insert Address");
    })


});

//  -----------AddressUpdate------------

app.post("/AddressUpdate", (req, res) => {
    // console.log(req)
    var userid = req.body.userid;
    var userfirstname = req.body.userfirstname;
    var userlastname = req.body.userlastname;
    var useraddress = req.body.useraddress;
    var userappaend = req.body.userappaend;
    var usercity = req.body.usercity;
    var usercountry = req.body.usercountry;
    var userpostcode = req.body.userpostcode;
    var id = req.body.id;
    var sql = "update tbladdress set refuserid ='" + userid + "',txtfirstname ='" + userfirstname + "',txtlastname ='" + userlastname + "',txtaddress ='" + useraddress + "', txtappaend ='" + userappaend + "', txtcity ='" + usercity + "', txtcountry=' " + usercountry + "' ,txtpostcode='" + userpostcode + "' where id ='" + id + " ' ";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("1 record Address updated");
    })

});

//  -----------GetBlogs/select------------

app.post("/GetAddress", (req, res) => {
    // console.log(req)

      var id = req.body.id

    var sql = "select * from tbladdress where id='"+id+"'";

    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result Address Veiwed");
    })

});


//  -----------GetSingleProduct/select------------

app.post("/GetSingleProduct", (req, res) => {
    // console.log(req)

      var id = req.body.id

    // var sql = "select * from tblsingleprod where id='"+id+"'";
    // var sql ="select tblproduct.txtproductname,tblsingleprod.refproductid,tblsingleprod.txtproductdescr from tblproduct join tblsingleprod on tblproduct.id=tblsingleprod.id"
    var sql="  select tblproduct.txtproductname,tblsingleprod.txtproductdescr,tblproduct.txtprice from tblproduct join tblsingleprod on tblproduct.id=tblsingleprod.id where tblproduct.id='"+id+"'; "
    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result single product Veiwed");
    })

});

//  -----------GetCartList/select------------

app.post("/GetCartList", (req, res) => {
    // console.log(req)

      var id = req.body.id

    // var sql = "select * from tblsingleprod where id='"+id+"'";
    // var sql ="select tblproduct.txtproductname,tblsingleprod.refproductid,tblsingleprod.txtproductdescr from tblproduct join tblsingleprod on tblproduct.id=tblsingleprod.id"
    var sql="SELECT pd .txtproductname as productname,pd.txtprice as price,ct.txtquantity as quantity,ct.txttotal FROM tblcart ct JOIN tblsingleprod spd  ON ct.id = spd.id JOIN tblproduct pd ON spd.id =pd.id where ct.id='"+id+"'; "
    con.query(sql, function (err, result) {
        if (err) throw (err)
        res.send(result);
        console.log("result Cart Veiwed");
    })

});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




