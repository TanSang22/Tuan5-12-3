const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://admin123:123456Z@cluster0.qm4lxjn.mongodb.net/?appName=Cluster0"
);

mongoose.connection.once("open", () => {
    console.log("Connected MongoDB Atlas");
});

module.exports = mongoose;