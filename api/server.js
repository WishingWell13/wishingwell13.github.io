const express = require('express');
const app = express();
const bodyParser     = require('body-parser');

const port = process.env.PORT || 8000; // Use the port provided by the host or default to 3000

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});