const express = require('express');
const quoteController = require('../controllers/quote.controller');
const checkAuth = require('../middleware/check-auth');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();
router.get("/account", checkAuthMiddleware.checkAuth, quoteController.readByuserId);
router.get("/random", quoteController.findRandom); //localhost/quote
router.post("/", checkAuthMiddleware.checkAuth, quoteController.createQuote);   //localhost/quote
router.get("/:id", quoteController.readQuote); //localhost/quote/id
router.get("/", quoteController.readAllQuotes); //localhost/quote
router.patch("/:id", checkAuthMiddleware.checkAuth, quoteController.updateQuote); //localhost/quote/id
router.delete("/:id", checkAuthMiddleware.checkAuth, quoteController.deleteQuote); //localhost/quote/id
// router.get("/account", checkAuthMiddleware.checkAuth, quoteController.getList);


module.exports = router;