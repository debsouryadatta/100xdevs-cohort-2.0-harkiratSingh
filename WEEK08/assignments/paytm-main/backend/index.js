const express = require("express");
const { connectDB } = require("./db");
const router = require("./routes");
const app = express();

require('dotenv').config();

const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use("/api/v1", router);

app.listen(4000, ()=> {
    connectDB();
    console.log("Server is running on port 4000");
})
