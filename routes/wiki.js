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
    slug: req.body.title
  });
  try {
    await page.save();
    console.log(page);
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', (req, res, next) => {
  res.send(`you asked for slug ${req.params.slug}`)
})

module.exports = router;
