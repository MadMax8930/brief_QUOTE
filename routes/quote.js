const express = require('express');
const quoteController = require('../controllers/quote.controller');
const checkAuth = require('../middleware/check-auth');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.get("/random", quoteController.findRandom); //localhost/quote
router.post("", checkAuthMiddleware.checkAuth, quoteController.save);   //localhost/quote
router.get("/:id", quoteController.showById); //localhost/quote/id
router.get("/", quoteController.showAll); //localhost/quote
router.patch("/:id", checkAuthMiddleware.checkAuth, quoteController.update); //localhost/quote/id
router.delete("/:id", checkAuthMiddleware.checkAuth, quoteController.destroy); //localhost/quote/id

module.exports = router;