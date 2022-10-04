API Name:Loginselect     //UserLogin

Request:
{
    "useremail":"zxc@gmail.com",
    "userpassword":"zxc"
   
}
Response:

[
    {
        "id": 4
    }
]

-----------------------------------
API Name:signupRegister       //UserSignup

Request:
{
    "userfirstname":"viji",
    "userlastname":"thomas",
    "useremail":"poi@gmail.com",
    "userpassword":"poi",
    "userrepassword":"poi",
    "refuserroleid":"1"
    
}

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 5,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}

-----------------------------------
API Name: signupEdit                //ProfileUpdate
Request:
{
    "userfirstname":"veena",
    "userlastname":"gopi",
    "useremail":"dds@gmail.com",
    "userpassword":"dds",
    "userrepassword":"dds",
    "refuserroleid":"1",
    "id":"4"
}

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}
-------------------------------------------------------------------------------
API Name:Getproductwithfilter               //only featured viewed
Request:
{type:featured}

{
    "featured":"1"
}

Response:

[
    {
        "txtproductname": "Cantilever chair",
        "txtcode": "Y523202",
        "txtprice": "$42.00"
    },
    {
        "txtproductname": "Cantilever1 chair",
        "txtcode": "Y523203",
        "txtprice": "$42.00"
    }
]

-----------------------------------
API Name:Getproductwithfilterall

Request:

{
    "type":"featured"

}

Response:

[
    {
        "txtproductname": "Cantilever chair",
        "txtcode": "Y523202",
        "txtprice": "$42.00"
    },
    {
        "txtproductname": "Cantilever1 chair",
        "txtcode": "Y523203",
        "txtprice": "$42.00"
    }
]

----
Request:
{
    "type":"trending"

}

Response:

[
    {
        "txtproductname": "revolving chair",
        "txtcode": "J987201",
        "txtprice": "42.00"
    },
    {
        "txtproductname": "executive chair",
        "txtcode": "J456202",
        "txtprice": "46.00"
    }
]

----
Request:
{
    "type":"latest"

}

Response:
[
    {
        "txtproductname": "ergonomic chair",
        "txtcode": "Z234201",
        "txtprice": "45.00"
    },
    {
        "txtproductname": "swivel chair",
        "txtcode": "Z234202",
        "txtprice": "40.00"
    },
    {
        "txtproductname": "guest chair",
        "txtcode": "W323455",
        "txtprice": "45.00"
    },
    {
        "txtproductname": "ergonomic chair",
        "txtcode": "Z234201",
        "txtprice": "45.00"
    },
    {
        "txtproductname": "swivel chair",
        "txtcode": "Z234202",
        "txtprice": "40.00"
    },
    {
        "txtproductname": "guest chair",
        "txtcode": "W323455",
        "txtprice": "45.00"
    }
]
---------------------------------------------------------------

API Name:GetCategories     //viewed

Request:
{
    "id":"2"
}
Response:

[
    {
        "txtcatename": "mini IKEA chair",
        "txtcateprice": "57.00"
    }
]
-------------------------------------

API Name:GetBlogs            //viewed
    

Request:
        {
             "id":"1"
        }

Response:[
    {
        "txtuser": "Saber Ali",
        "txttitle": "Top esssential Trends in 2021",
        "txtdescr": "More off this less hello samlande lied much\nover tightly circa horse taped mightly",
        "createddate": "2022-10-03T07:40:10.000Z"
    }
]

-------------------------


API Name:GetRelatedProducts

Request:
{
    "productA":"3"
}

Response:

[
    {
        "id": 3,
        "productB": 3
    },
    {
        "id": 4,
        "productB": 12
    },
    {
        "id": 5,
        "productB": 9
    }
]

-------------------------


API Name:InsertAddress

Request:

{

    "userid":"4",
    "userfirstname":"veena ",
    "userlastname":"gopi",
    "useraddress":"ukken",
    "userappaend":"other",
    "usercity":"thissur",
    "usercountry":"india",
    "userpostcode":"680123"    
}

Response:

{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 2,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}
-------------------------


API Name: AddressUpdate

Request:
{

    "userid":"5",
    "userfirstname":"maria ",
    "userlastname":"seby",
    "useraddress":"ooty cottage",
    "userappaend":"hjkj",
    "usercity":"Tvm",
    "usercountry":"india",
    "userpostcode":"690876",
    "id":"3"
    
}

Response:
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
    "protocol41": true,
    "changedRows": 1
}

-------------------------


API Name: GetAddress

Request:

{
    "id":"1"
}

Response:

[
    {
        "id": 1,
        "refuserid": 3,
        "txtfirstname": "manu",
        "txtlastname": "jijo",
        "txtaddress": "hill quater",
        "txtappaend": "employee",
        "txtcity": "kochi",
        "txtcountry": "india",
        "txtpostcode": "678908"
    }
]

-------------------------

API Name:

Request:

Response:

-------------------------

API Name:

Request:

Response:

-------------------------