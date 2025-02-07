const express = require("express");
const Reservation = require("../models/reservation")
const router = express.Router()

router.post("/reservations", async (req, res) => {
    const reservation = new Reservation(req.body)
    await reservation.save()
    res.status(201).json(reservation)
})

router.get("/reservations", async (req, res) => {
    const reservations = await Reservation.find()
    res.json(reservations)
})

module.exports = router