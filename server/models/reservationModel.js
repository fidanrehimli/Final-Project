const mongoose = require('mongoose')

const {Schema} = mongoose

const ReservationSchema = new Schema({
    ticketId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ticket",
    },
    name:{
        type:String,
        required:true,
    },
    checkInDate:{
        type:Date,
        required:true,
    },
    checkOutDate:{
        type:Date,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    confirmed:{
        type:Boolean,
        default:false,
    },
    stats:{
        type:String,
        enum:['available','sold'],
        default:'available'
    }
},
{
    timestamps:true
}
)
const Reservation = mongoose.model('TicketCart',ReservationSchema)
module.exports=Reservation