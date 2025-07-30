const mongoose = require("mongoose")
const url = "mongodb+srv://rkavya0518:0YhDLBxcEfROi7YF@kavya.tdktl.mongodb.net/"

mongoose.connect(url)

.then(()=>console.log("Database Connected...."))
.catch(err => console.error("Could not connect to MongoDB..",err));
