const shortid = require('shortid');
const Url = require("../models/url")

const handelGenerateShortUrl = async(req,res)=>{
    const body = req.body;
    if(!body.Url) return res.status(400).json({error: "url is require"})
   const shortId = shortid();
   await Url.create({
    shortId: shortId,
    redirectURL: body.Url,
    visitedHistory:[],
    createdBy: req.user._id
   });
   return res.render("home",{
    id:shortId
   })
};

const handelRedirectUrl = async (req,res)=>{
    const shortId = req.params.shortId;
    const entries =  await Url.findOneAndUpdate(
        {
        shortId
    },
    {
        $push:{
        visitedHistory:{
            timeStamp: Date.now()
        }
    }})
  
    res.redirect(entries?.redirectURL)
}

module.exports = {handelGenerateShortUrl,handelRedirectUrl}