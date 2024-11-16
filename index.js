const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use([cors(), express.json()]);

app.get('/health', (req, res) => {
    res.status(200).json({
        message: 'Server is running smoothly...'
    })
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});