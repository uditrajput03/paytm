require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    if (!req.header.authorization || !req.header.authorization.startswith("Bearer")) {
        return res.status(411).json({
            message: "Invalid token"
        })
    }
    try {
        let token = req.header.authorization.split(" ")[1];
        let jwtData = jwt.verify(token, process.env.JWT_SECRET);
        if(jwtData.userId){
            req.userId = jwtData.userId;
            next();
        }
    }
    catch{
        return res.status(403).json({});
    }
}
module.exports = {
    authMiddleware
}