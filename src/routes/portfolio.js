const express = require('express');
const router = express.Router();
const portfolioData = require('../data/portfolio');

// GET - the portfolio info
router.get("/", async (req, res) => {
  res.json(portfolioData);
});

module.exports = router;