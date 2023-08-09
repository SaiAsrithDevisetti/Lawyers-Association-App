const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dsasrith2003:vectech@lawyersdatabase.sirng38.mongodb.net/');

const connection = mongoose.connection;
connection.once('open', function () {
    console.log("connected to mongodb");
})
