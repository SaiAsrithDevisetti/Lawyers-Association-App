const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    phonenumber : {
        type:String,
        required:true
    },
    emailid : {
        type:String,
        required:true
    },
    registerid : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    bio : {
        type:String,
        required:true
    }
})

const Data = new mongoose.model('LawyersData', dataSchema);

module.exports = Data;