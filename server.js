const express = require('express');
const port = 4000;
const app = express();

app.listen(port)

console.log('Server running at http://localhost:' + port)

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`Hello World`);
  return res.end();
});
