const express = require("express");
const router = express.Router();
const {handelCreateUser,handelUserLogin} = require("../controllers/user");


router.route("/").post(handelCreateUser)
router.route("/login").post(handelUserLogin)

module.exports= router;