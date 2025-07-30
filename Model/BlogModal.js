const mongoose = require("mongoose")


const Blog = new mongoose.Schema({
    title:String,
    blogImg:String,
    author:String,
    content:String,
    date:String
})

module.exports = mongoose.model("Blog", Blog)