
var mysql = require('mysql');
var con = mysql.createConnection(
    {
        host: "database-2.c2ptdumfetep.us-west-2.rds.amazonaws.com",
        user: "admin",
        password: "password123",
        database: "matrimony"
    });

con.connect((err) => {
    if (err)
        console.log(err)
    else
        console.log("Connected")
});
exports.handler = function (event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    let buff = new Buffer(event.body, 'base64');
    let text = buff.toString('ascii');
    let req = JSON.parse(text);
    let username = req.username;
    con.query("SELECT * FROM tblcaste where id!='" + username + "'", (err, result) => {
        if (err)
            return callback(null, err)
        else 
            return callback(null, result)
    })
}
