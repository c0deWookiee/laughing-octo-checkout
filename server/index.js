const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const router = require("./routes");
//database
const db = require("../db/db.js");
//port
const port = 1338;
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname + "/dist")));
//router
app.use("/api", router);

app.listen(port, () => {
  console.log("the server is connected on " + port);
});
