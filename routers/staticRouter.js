const express = require("express");
const {handleRenderHomePage,handelRenderSignUP,handelRenderLogin} = require("../controllers/static")

const router = express.Router();

router.route("/").get(handleRenderHomePage)
router.route("/signup").get(handelRenderSignUP)
router.route("/login").get(handelRenderLogin)


module.exports= router;