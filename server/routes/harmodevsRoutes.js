const express = require("express");
const router = express.Router();

const devsController = require("../controllers/devsController");

router.get("/", devsController, (req, res, next) => {
  res.status(201).json({ devs: res.locals.devs });
});

module.exports = router;
