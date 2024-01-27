// const z = require("zod");

// const schema = z.object({
    
// })


const express = require('express');

const app = express();

const PORT = 2500;

app.get('/ping', (req, res) => {
    throw new Error("Something went wrong");
})

app.use((err,req, res, next) => {
    res.status(500).send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})