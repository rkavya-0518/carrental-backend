const express = require("express");
const CardataModel = require("../Model/CardataModel");



const router = express.Router();

//post

router.post("/", async (req , res)=>{
    const Cars = new CardataModel(req.body)
    const result = await Cars.save();
    res.send(result)
})

//read

router.get("/", async (req , res)=>{
    //const Cars = new CardataModel(req.body)
    const result = await CardataModel.find();
    res.send(result)
})

//read one object

router.get("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await CardataModel.findOne(query);
    res.send(result)
})

//Delete
router.delete("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await CardataModel.deleteOne(query);
    res.send(result)
})

//Update

router.put("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await CardataModel.updateOne(query,{$set: req.body})
    res.send(result)
})


module.exports = router