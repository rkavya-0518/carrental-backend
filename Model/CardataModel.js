const mongoose = require("mongoose")


const Cars = new mongoose.Schema({
    cardata:String,
    name:String,
    refimg:String,
    price:String,
    model:String,
    speed:String,
    rating:String,
    description:String,
    automatic:String,
    brand:String,
    gps:String,
    seatType:String,

})

module.exports = mongoose.model("Cars", Cars )