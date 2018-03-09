const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const layout = require("./views/layout");
const PORT = 3039;
const models = require("./models");

models.db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send(layout(""));
});

const init = async () => {
  const data = await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};
