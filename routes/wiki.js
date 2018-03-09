const express = require("express");
const router = express.Router();
const layout = require("../views/layout");
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send(layout(""));
});

router.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
