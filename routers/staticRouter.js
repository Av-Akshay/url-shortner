const express = require("express");
const {handleRenderHomePage} = require("../controllers/static")

const router = express.Router();

router.route("/").get(handleRenderHomePage)

module.exports= router;