const express = require("express");

const {handelGenerateShortUrl,handelRedirectUrl,handelHiFromServer} = require("../controllers/url");

const router = express.Router();

router.route("/").post(handelGenerateShortUrl)
router.route("/:shortId").get(handelRedirectUrl)
router.route("/").get(handelHiFromServer);

module.exports = router;