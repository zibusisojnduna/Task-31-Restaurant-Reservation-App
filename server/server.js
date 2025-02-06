const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://zibusiso:<db_password>@cluster0.bhwb9.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))


app.get("/", (req, res) => {
    res.send("Hello World!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})