const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    img:{type:String, required:true},
    brand:{type:String, required:true},
    category:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number,  default:0,required:true},
    rating:{type:Number,  default:0,required:true},
    instock:{type:Number,  default:0,required:true},
    numreviews:{type:Number, default:0, required:true}
});


const productModel = new mongoose.model("Product", productSchema);

module.exports = productModel;