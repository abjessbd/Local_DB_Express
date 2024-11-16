const express = require('express');
const middlewares = require('../middlewares/middlewares');

const app = express();

app.use(middlewares);

app.get('/health', (_req, res) => {
    res.status(200).json({
        message: 'Server is running smoothly...'
    })
});

module.exports = app;