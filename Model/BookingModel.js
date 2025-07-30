const mongoose = require("mongoose")


const Booking = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    toaddress:String,
    person:String,
    luggage:String,
    date:String,
    time:String,
    message:String
})

module.exports = mongoose.model("Booking", Booking)