// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware (for parsing JSON)
app.use(express.json());
console.log("Server running ");

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, there too many Clothes !');
});

// Start the server
app.listen(port,'0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});
