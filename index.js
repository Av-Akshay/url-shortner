const express = require("express");
const urlRoute = require("./routers/url");
const {connectToMongoDB} = require("./connect");
const bodyParser = require('body-parser');
const path = require("path")

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/url",urlRoute);

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>{
    console.log("mongodb connected");
}).catch((error)=>{console.log(error);});

app.set("view engine","ejs");
app.set("views", path.resolve("./views"))

app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`)
})