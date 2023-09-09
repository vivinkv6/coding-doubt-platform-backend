require("dotenv").config(); //hide credential data
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//router
const questionRouter = require("./routes/questionRouter");
const getLanguageRouter = require("./routes/getLanguageRouter");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");

//middleware
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

//endpoints
app.use("/create", questionRouter);
app.use("/language?:language", getLanguageRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);

//connect mongodb  database with node js using mongoose(nodejs Driver)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server and Database run Successfully`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
