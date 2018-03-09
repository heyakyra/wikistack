const express = require("express");
const router = express.Router();
const layout = require("../views/layout");
const { Page } = require("../models");
const { addPage } = require("../views");
const bodyParser = require("body-parser");

router.get("/", (req, res, next) => {
  res.send(layout(""));
});

router.post("/", async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: req.body.title.replace(/[^a-zA-Z0-9 :]/g, "").replace(/ +/g, "_")
  });
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
