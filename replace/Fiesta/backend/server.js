const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const gameRoutes = require("./routes/gameRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONNECT MONGODB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Error:", err));

// ROUTES
app.use("/api/game", gameRoutes);

// SERVER START
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
