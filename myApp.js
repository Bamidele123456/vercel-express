const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

const absolutePath = path.join(__dirname, 'views', 'index.html');
const absolutePath1 = path.join(__dirname, 'public', 'style.css');

app.use('/public', express.static(path.dirname(absolutePath1)));

app.get('/', function(req, res) {
  res.sendFile(absolutePath);
});

app.get('/json', function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';

    const message = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json';

    
    res.json({ message });
  });


module.exports = app;
