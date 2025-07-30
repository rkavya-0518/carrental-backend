const mongoose = require("mongoose")


const enquiries = new mongoose.Schema({
    username:String,
    email:String,
    message:String
})

module.exports = mongoose.model("enquiries", enquiries )