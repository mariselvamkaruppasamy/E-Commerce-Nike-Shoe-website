const express = require("express")

const app = express()
require('dotenv').config();

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded())
app.use(express.json())
const cors = require("cors")
app.use(cors())
const path = require("path")
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

const mongoose = require("mongoose")
const MONGODB_URL = "mongodb://127.0.0.1:27017/bookhub022"

const userSignRouter = require('./Routes/UserSignRoute')
app.use(userSignRouter)

const adminRouter = require('./Routes/AdminRoute')
app.use(adminRouter)

const productRouter = require('./Routes/ProductRoute')
app.use(productRouter)


mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log("DB Connected..");
    })
    .catch((err)=>{
        console.log("DB Connection Failed..", err);
    })

app.listen(4500,()=>{
    console.log("Server Loading..");
})