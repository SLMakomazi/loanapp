require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = process.env.PORT || 3000;

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Loan App Backend is running!',
    database: process.env.DB_NAME,
    status: 'online'
  });
});

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    
    const [rows] = await connection.execute('SELECT 1 as test');
    await connection.end();
    
    res.json({
      status: 'success',
      database: 'connected',
      tables: ['users', 'loans', 'payments'] // List your main tables here
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to connect to database',
      error: error.message
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Connected to database: ${process.env.DB_NAME}`);
});