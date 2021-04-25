var express = require('express');
var app = express();
var mssql = require("./server.js");

app.get('/', async function (req, res) {
    var result = await mssql.executeQuery("select * from cx.Campaigns;")
    res.send(result);
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});