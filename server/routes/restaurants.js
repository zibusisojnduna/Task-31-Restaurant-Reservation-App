const express = require("express");
const Restaurant = require("../models/restaurant")
const router = express.Router()

router.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.find()
    res.json(restaurants) 
})

router.post("/restaurants", async (req, res) => {
    const newRestaurant = new Restaurant(req.body)
    await newRestaurant.save()
    res.status(201).json(newRestaurant)
})

module.exports = router