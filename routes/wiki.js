const express = require("express");
const router = express.Router();
const layout = require("../views/layout");
const { addPage } = require("../views");
const bodyParser = require("body-parser");

router.get("/", (req, res, next) => {
  res.send(layout(""));
});

router.post("/", async (req, res, next) => {
  try {
    let userData = req.body;
    console.log(userData);
    res.send(`you said: ${userData}`);
  } catch(error) {
      next(error)
    };
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
