import mongoose  from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://bd7l6ka24:fidan123@cluster0.vknliuk.mongodb.net/userAdmin').then(()=>console.log("Connected"))
}