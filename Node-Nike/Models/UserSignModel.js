const mongoose = require("mongoose")

const userSignSchema = new mongoose.Schema({
    fullName: {type:String, require:true},
    userName: {type:String, require:true},
    userEmail: {type:String, require:true},
    userNumber: {type:String, require:true},
    password: {type:String, require:true},
    productId:{type:[String]}
}, {timestamps:true})

const userSign = new mongoose.model("userdata", userSignSchema)
module.exports = userSign