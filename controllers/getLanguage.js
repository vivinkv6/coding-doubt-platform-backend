const question = require("../models/doubtClearanceModel");

//get language related questions
const getLanguage = async (req, res) => {
  const { language } = req.query;

  //check if the language related questions is available or not
  const result = await question.find({ language });

  if (result.length == 0) {
    res.json({ msg: "No More Questions" });
  } else {
    res.json({ result });
  }
};

module.exports = getLanguage;
