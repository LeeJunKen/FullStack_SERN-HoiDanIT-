import express from "express";
import bodyParser from "body-parser";
import viewEnginee from "./config/viewEnginee";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB"
require('dotenv').config(); //Help Run process.env

let app = express();

//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEnginee(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//PORT === underfined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})