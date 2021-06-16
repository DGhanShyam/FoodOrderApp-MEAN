// Use Express
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const cors= require('cors')
var database;
var productsColumn = "food";

var app = express();


app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

const LOCAL_DATABASE = "mongodb://localhost:27017/app";
const LOCAL_PORT = 8080;

mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (error, client) {

        if (error) {
            console.log(error);
        }

        database = client.db();
        console.log("Database connected..");

        var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
            var port = server.address().port;
            console.log("App now running on port", port);
        });
    });


app.get("/products", function (req, res) {
    database.collection(productsColumn).find({}).toArray(function (error, data) {
        if (error) {
            manageError(res, err.message, "error getting user chat");
        } else {
            res.status(200).json(data);
        }
    });
});


