// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create app
const app = express();

// Add other middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route handlers
app.get('/posts/:id/comments', (req, res) => {
    res.send([]);
});

// Start listening
app.listen(4001, () => {
    console.log('Listening on 4001');
});