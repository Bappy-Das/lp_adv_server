const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working !")
});

app.listen(port, () => {
    console.log(`lawer_panel_server app listening on port ${port}`)
})

app.all("*", (req, res) => {
    res.send("NO route found.");
});