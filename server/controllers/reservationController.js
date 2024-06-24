const Reservation = require('../models/reservationModel')

const getAllReservation = async(req,res,next)=>{
    try{
        const reservation = await Reservation.find()
        if(!reservations){
            res.status(400)
            throw new Error("Cannot find reservation")
        }
        res.status(200).json(reservations)
    }catch(error){
        next(error)
    }
}

const createReservation = async(req,res,next)=>{
    try{
        const reservation = await Reservation.create(req.body)
        if(!reservation){
            res.status(400)
            throw new Error("Cannot create reservation")
        }
        return res.status(201).json(reservation)
    }catch(error){
        next(error)
    }
}

const updateReservation = async(req,res,next)=>{
    try{
        const updateReservation = await Reservation.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {new:true}
        )
        if(!updateReservation){
            res.status(400)
            throw new Error("Cannot create reservation")
        }
        const reservations = await Reservation.find()
        return res.status(200).json(updateReservation)
    }catch(error){
        next(error)
    }
}

const deleteReservation = async (req,res,next)=>{
    try{
        const reservation = await Reservation.findByIdAndDelete(req.params.id)
        if(!reservation){
            res.status(400)
            throw new Error("Cannot deleted ticket")
        }
        return res.status(200).json({id:req.params.id})
    }catch(error){
        next(error)
    }
}

const getReservation = async(req,res,next)=>{
    try{
        const reservation = await Reservation.findById(req.params.id)
        if(!reservation){
            res.status(400)
            throw new Error("booking not found")
         }
         return res.status(200).json(reservation)
    }catch (error) {
        next(error)
    }
}

module.exports = {
    getAllReservation,
    createReservation,
    updateReservation,
    deleteReservation,
    getReservation
}