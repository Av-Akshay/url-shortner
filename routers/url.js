const express = require("express");

const {handelGenerateShortUrl,handelRedirectUrl} = require("../controllers/url");

const router = express.Router();

router.route("/").post(handelGenerateShortUrl)
router.route("/:shortId").get(handelRedirectUrl)

module.exports = router;