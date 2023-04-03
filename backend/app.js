const express = require("express");
var cors = require("cors");
const app = express();
const cookie = require("cookie-parser");
//route  product import
const productroute = require("./routes/productRoute");
const userroute = require("./routes/userRoute");
const orderroute = require("./routes/orderRoute");
const errorHandler = require("./middleware/errorHandler");
app.use(cors());
app.use(express.json());
app.use(cookie());
app.use("/api/v1", productroute);
app.use("/api/v1", userroute);
app.use("/api/v1", orderroute);
app.use(errorHandler);

module.exports = app;
