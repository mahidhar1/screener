const express = require("express");
const router = express.Router();

// Redirect to data route if request is made to home route;
router.get("/", (req, res) => res.redirect("/data"));

module.exports = router;
