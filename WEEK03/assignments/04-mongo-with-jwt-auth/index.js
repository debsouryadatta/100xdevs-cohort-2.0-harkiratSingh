const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const { connectDb } = require('./db');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)


app.get('/ping', (req, res) => {
    res.send('pong!');
});

// Global catch
app.use(errorHandlerMiddleware)

const PORT = 2000;

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});
