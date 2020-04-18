'use strict';

const { Router } = require('express');
const router = new Router();
const Transaction = require('./../models/transactions');

router.get('/', (req, res, next) => {
  Transaction.find()
    .then((transactions) => {
      res.json(transactions);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post('/addTransaction', (req, res, next) => {
  Transaction.create({
    text: req.body.text,
    amount: req.body.amount,
  })
    .then((transaction) => {
      res.json(transaction);
    })
    .catch((error) => {
      res.json(error);
    });
});

//rota para deletar workspace
router.delete('/deleteTransaction', (req, res, next) => {
  Transaction.findByIdAndRemove(req.body._id)
    .then(() => {
      res.json({ message: `${req.body._id} was removed succesfully` });
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
