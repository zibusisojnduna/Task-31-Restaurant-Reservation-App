const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()
const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => console.log("Connected to MongoDB"))
 .catch((error) => console.error("MongoDb connection error:", error))

 app.listen(3000, () => console.log("Server is running on http://localhost:3000"))  