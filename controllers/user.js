const {v4: uuidv4} = require("uuid")
const User = require("../models/user");
const {setUser} = require("../service/auth")

const handelCreateUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if( !fullName || !email || !password) return res.send("<h1>All fields are require</h1>")

  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
};

const handelUserLogin = async (req,res)=>{
  const {email,password} = req.body;
   const user = await User.findOne({email,password});
   if(!user) return res.render("login",{
    error:"Invalid Username or Password"
   });
   const sessionId = uuidv4();
   setUser(sessionId,user);
   res.cookie('uid', sessionId)
   return res.redirect("/")
};

module.exports = { handelCreateUser ,handelUserLogin};
