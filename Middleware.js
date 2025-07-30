const jwt = require("jsonwebtoken")

const Middle = (req, res, next)=>{
    let token = req.header("x-token");
    if(!token){
        res.send("Auth Token Not Found")
    }
    let decode = jwt.verify(token,"Kavya")
    req.user = decode.user;
    next();
}

module.exports = Middle