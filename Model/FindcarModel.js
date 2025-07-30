const mongoose = require("mongoose")


const Findcar = new mongoose.Schema({
    fromaddress:String,
    toaddress:String,
    emdateail:String,
    time:String,
    carType:String
})

module.exports = mongoose.model("Findcar", Findcar)