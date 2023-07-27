const express = require("express");
const router = express.Router();

const coolStuffController = require("../controllers/coolStuffController");

router.get("/", coolStuffController, (req, res, next) => {
  res.status(201).json({ devs: res.locals.cool_stuff });
});

module.exports = router;
