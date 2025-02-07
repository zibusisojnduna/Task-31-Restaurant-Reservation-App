const express = require("express");
const User = require("../models/user")
const router = express.Router()

router.post("/register", async (req, res) => {
    const { email, password } = req.body
    
    try {
        const userExists =await User.findOne({ email})
        if (userExists) {
            return res.status(400).json({ message:"Email already exists"})
        }

        const newUser = new User({ email, password})
        await newUser.save()

        res.status(201).json({ message:"User created successfully"})
    } catch (error) {
        res.status(500).json({ message:"Error creating user"})
    }
})

module.exports = router