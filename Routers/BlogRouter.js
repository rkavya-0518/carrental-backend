const express = require("express");
const BlogModal=require("../Model/BlogModal")



const router = express.Router();

//post

router.post("/", async (req , res)=>{
    const Cars = new BlogModal(req.body)
    const result = await Cars.save();
    res.send(result)
})

//read

router.get("/", async (req , res)=>{
    //const Cars = new BlogModal(req.body)
    const result = await BlogModal.find();
    res.send(result)
})

//read one object

router.get("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await BlogModal.findOne(query);
    res.send(result)
})

//Delete
router.delete("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await BlogModal.deleteOne(query);
    res.send(result)
})

//Update

router.put("/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await BlogModal.updateOne(query,{$set: req.body})
    res.send(result)
})


module.exports = router