const express = require("express");
const getLanguage=require('../controllers/getLanguage');
const router = express.Router();

router.get("/", getLanguage);

module.exports = router;