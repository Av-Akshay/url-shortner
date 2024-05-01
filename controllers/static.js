const Url = require("../models/url")

const handleRenderHomePage = async (req,res)=>{
    if(!req.user) return res.redirect("/login")
     const allUrls = await Url.find({ createdBy:req.user._id});
    res.render("home",{
        urls: allUrls
    })
}

const handelRenderSignUP = (req,res)=>{
    res.render("signUp")
}

const handelRenderLogin = (req,res)=>{
    res.render("login")
}

module.exports = {handleRenderHomePage,handelRenderSignUP,handelRenderLogin}