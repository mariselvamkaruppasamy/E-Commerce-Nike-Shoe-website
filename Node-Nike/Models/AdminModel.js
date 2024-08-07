const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    adminName : {type:String, require:true},
    adminEmail : {type:String, require:true},
    adminPassword :{type:String, require:true}
},{timestamps:true})

const adminModel = new mongoose.model('admindata',adminSchema)
module.exports = adminModel