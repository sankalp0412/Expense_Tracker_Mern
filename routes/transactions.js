const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');
const BASE_URL = process.env.BASE_URL;

router
    .route(`${BASE_URL}/`)
    .get(getTransactions)
    .post(addTransaction);

router
    .route(`${BASE_URL}/:id`)
    .delete(deleteTransaction);

module.exports = router;