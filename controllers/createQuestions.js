const question = require("../models/doubtClearanceModel");

const createQuestion = async (req, res) => {
  const { title, issue, language, comments, publisher } = req.body;

  try {
    const result = await question.create({
      title,
      issue,
      language,
      comments,
      publisher,
    });

    if (!result) {
      return res.json({ err: "Failed to Create Question" });
    } else {
      return res.json({ result });
    }
  } catch (err) {
    res.json({ err: err.message });
  }
};

module.exports = createQuestion;
