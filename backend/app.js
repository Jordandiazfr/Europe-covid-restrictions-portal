const express = require("express")
const {db, select} = require("./modules/db")
const app = express()
const port = 4000
require('dotenv').config();

app.get("/", (req,res) => {
    res.send("Hello")
    db()
})

app.get("/find", async (req,res) => {
    const data = await select()
    res.send(data)
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server listening in port ${port}`)
})