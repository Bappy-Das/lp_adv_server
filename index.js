const express = require("express");
const cors = require("cors");
require("dotenv").config();
var colors = require('colors');
const mongoose = require("mongoose");
const connectToDatabase = require("./src/utils/dbConnect");

const crypto = require('crypto');

// const userRoute = require("./src/routes/v1/users.route");
const routes = require('./src/routes/v1/index')
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());



try {
    connectToDatabase()
    app.listen(port, () => {
        console.log(`server connected with listening port ${port}`.green.bold)
    })

} catch (error) {
    console.log(error);
}
app.get("/", (req, res) => {
    // res.send("Server is on running !")
    // const randomBytes = crypto.randomBytes(64).toString('hex');
    res.json({
        status: "Success",
        message: "Server is on running ",
    })
});
routes(app)
// app.use("/api/v1", userRoute);

app.all("*", (req, res) => {
    // res.send("No route found.");
    res.send({
        status: "Failed",
        message: "No route found."
    })
});