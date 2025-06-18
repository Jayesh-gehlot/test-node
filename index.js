// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware (for parsing JSON)
app.use(express.json());
console.log("Server running ");

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
