const handleRenderHomePage = (req,res)=>{
    res.render("home")
}

const handelRenderSignUP = (req,res)=>{
    res.render("signUp")
}

const handelRenderLogin = (req,res)=>{
    res.render("login")
}

module.exports = {handleRenderHomePage,handelRenderSignUP,handelRenderLogin}