const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
dotenv.config()
//create server

const app = express()

mongoose.connect(process.env.DB).then(()=>{
    console.log("connected to database")
}).catch((e)=>{
    console.log(e)
})
app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on port ${process.env.PORT}!`)
})
