// server/server.js

const express = require('express');
const path = require('path');
const db = require('./db'); // Import the database connection
const app = express();
const port = 3000;

// Serve static files from the /public directory
app.use(express.static(path.join(__dirname, '../public')));

// Example route to test database query
app.get('/api', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM products');
    res.json({ message: 'Data from MySQL:', data: rows });
  } catch (err) {
    console.error('Error querying the database:', err);
    res.status(500).json({ message: 'Error querying the database', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

