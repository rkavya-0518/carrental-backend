const express = require("express");
const BookingModel = require("../Model/BookingModel");



const router = express.Router();

//post

router.post("/", async (req , res)=>{
    const Booking = new BookingModel(req.body)
    const result = await Booking.save();
    res.send(result)
})

//read

router.get("/", async (req , res)=>{
    const Booking = new BookingModel(req.body)
    const result = await Booking.find();
    res.send(result)
})



module.exports = router