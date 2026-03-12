const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/users",userRoutes);
app.use("/roles",roleRoutes);

app.listen(3000,()=>{
    console.log("Server running port 3000");
});