const express = require('express');
const app = express();

app.use(express.json());

// app.use('/api/v1/RESOURCE', require('./routes/resource'));

app.get('/', (req, res) => {
  res.send('Grandpa Tweets!');
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
