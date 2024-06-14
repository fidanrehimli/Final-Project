const mongoose =require('mongoose')
const {Schema}=mongoose
const adminSchema=new Schema({
    image:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
})
const adminModel=mongoose.model('adminModel',adminSchema)
module.exports=adminModel