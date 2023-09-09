const express = require("express");
const createQuestion = require("../controllers/createQuestions");
const router = express.Router();

router.post("/", createQuestion);

module.exports = router;
