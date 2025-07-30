const express = require("express");
const EnquiryModel = require("../Model/EnquiryModel");



const router = express.Router();

//post

router.post("/", async (req , res)=>{
    const enquiries = new EnquiryModel (req.body)
    const result = await enquiries.save();
    res.send(result)
})

//read

router.get("/", async (req , res)=>{
    //const Cars = new CardataModel(req.body)
    const result = await EnquiryModel.find();
    res.send(result)
})

//Delete
router.delete("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await EnquiryModel.deleteOne(query);
    res.send(result)
})


module.exports = router