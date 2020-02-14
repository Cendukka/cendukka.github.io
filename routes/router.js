"use strict"
// Require all packages and files
const express = require('express');
const router = express.Router();
const scoreboardController = require("../controllers/scoreboardController")

//get the correct requested page
router.get("/", scoreboardController.showScoreboard);

module.exports = router;