const shortid = require('shortid');
const Url = require("../models/url")

const handelGenerateShortUrl = async(req,res)=>{
    const body = req.body;
    if(!body.Url) return res.status(400).json({error: "url is require"})
   const shortId = shortid();
   await Url.create({
    shortId: shortId,
    redirectURL: body.Url,
    visitedHistory:[]
   });
   return res.json({id: shortId});
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
    console.log(entries?.redirectURL);
  
    res.redirect(entries?.redirectURL)
}

const handelHiFromServer = async (req,res)=>{
   const allUrls = await Url.find({});
   
  res.render("home",{
    urls: allUrls
  })
}

module.exports = {handelGenerateShortUrl,handelRedirectUrl,handelHiFromServer}