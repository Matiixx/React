const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!!!",
    })
})

app.post("/app", (req, res) => {
    console.log(req.body);
})

app.listen(5000, () => {
    console.log("connected");
});