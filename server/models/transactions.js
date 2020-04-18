'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Transaction', schema);
