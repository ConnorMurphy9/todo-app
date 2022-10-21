const express = require("express");
const app = express();
const sequelize = require("./config/connection");
const controllers = require("./controllers")

const Model = require("./models");

const PORT = 5500;

app.use("/api", controllers);
app.use(express.urlencoded({}))
app.get('/', (req, res) => {
    res.json("hi");
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("I'm running.")
});
});

