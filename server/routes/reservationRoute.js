const express = require("express");
const {
  getAllReservation,
  createReservation,
  updateReservation,
  deleteReservation,
  getReservation,
} = require("../controllers/reservationController");

const reservationRouter=express.Router()

reservationRouter.get("/reservations",getAllReservation)
reservationRouter.post("/reservations",createReservation)
reservationRouter.put("/reservations/:id",updateReservation)
reservationRouter.delete("/reservations/:id",deleteReservation)
reservationRouter.get("/reservations/:id",getReservation)

module.exports=reservationRouter



