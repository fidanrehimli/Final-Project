const mongoose =require('mongoose')
const {Schema}=mongoose
const productSchema=new Schema({
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    catagory:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
})
const Product=mongoose.model('Product',productSchema)
module.exports=Product