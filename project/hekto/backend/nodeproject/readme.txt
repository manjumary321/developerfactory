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
API Name: signupEdit
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
-----------------------------------
API Name:
Request:
Response:

-----------------------------------