const express = require("express");
const {connectToMongoDB} = require("./connect");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const path = require("path")
const urlRoute = require("./routers/url");
const staticRouter = require("./routers/staticRouter");
const userRouter = require("./routers/user")
const {loggedInUserOnly} = require("./middlewares/auth")

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use("/url", loggedInUserOnly ,urlRoute);
app.use("/",staticRouter);
app.use("/user",userRouter)

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>{
    console.log("mongodb connected");
}).catch((error)=>{console.log(error);});

app.set("view engine","ejs");
app.set("views", path.resolve("./views"))

app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`)
})