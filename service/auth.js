const jwt = require("jsonwebtoken");
const secretKey= "@kshayChauhan1998" 

const setUser=(user)=>{
    return jwt.sign({
      _id: user._id,
      email:user.email
    },secretKey)
}
const getUser=(token)=>{
  if(!token) return null
  return jwt.verify(token,secretKey)
};

module.exports= {setUser,getUser}