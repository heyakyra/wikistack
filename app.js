const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const layout = require("./views/layout");
const PORT = 3039;
const models = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

models.db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use("/wiki", wikiRouter);
//app.use('/user', userRouter);

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.redirect("/wiki");
});

const init = async () => {
  const data = await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

init();
