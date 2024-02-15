const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    password:String
})
const User = new mongoose.model('User' , userSchema);
export default User;