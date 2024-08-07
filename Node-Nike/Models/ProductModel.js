const mongoose = require("mongoose")

const productShema = new mongoose.Schema({
    productName: {type:String, require:true},
    productAmount: {type:Number, require:true},
    productOldAmount: {type:Number, require:true},
    productDiscount: {type:Number, require:true},
    productCatagory : {type:String, require:true},
    productImage: {type:[String], require:true},
    productSubImages: {type:[String], require:true}
}, {timestamps:true})

const product = new mongoose.model('product',productShema)
module.exports = product

