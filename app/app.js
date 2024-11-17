const express = require('express');
const middlewares = require('../middlewares/middlewares');
const usersRoute = require('../routes/usersRoute/usersRoute');

const app = express();

app.use(middlewares);
app.use(usersRoute);

app.get('/health', (_req, res) => {
    res.status(200).json({
        message: 'Server is running smoothly...'
    })
});

module.exports = app;