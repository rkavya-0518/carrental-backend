const express = require("express");
const FindcarModel = require("../Model/FindcarModel");



const router = express.Router();

//post

router.post("/", async (req , res)=>{
    const Findcar = new FindcarModel(req.body)
    const result = await Findcar.save();
    res.send(result)
})

//read

router.get("/", async (req , res)=>{
   // const Findcar = new FindcarModel(req.body)
    const result = await Findcar.find();
    res.send(result)
})



module.exports = router