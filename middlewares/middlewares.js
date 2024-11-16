const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const middlewares = [cors(), morgan('dev'), express.json()];

module.exports = middlewares;