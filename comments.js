// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse request body as JSON
app.use(express.json());

// Fake comments data
const comments = {
  1: 'First comment!',
    2: 'Second comment!'
  };