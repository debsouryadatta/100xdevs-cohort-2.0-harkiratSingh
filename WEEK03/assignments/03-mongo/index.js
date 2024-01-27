const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const { connectDb } = require('./db');
require('dotenv').config();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get('/ping', (req, res) => {
    res.send('pong!');
});

// Global catch
app.use((err,req,res,next)=> {
    res.status(500).json({message: err.message});
})

const PORT = 2000;

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});
