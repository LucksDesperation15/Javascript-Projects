const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => { // Define a route for the root URL
  res.sendFile(__dirname + '/index.html');  // Send the 'index.html' file as the response
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
console.log(__dirname);