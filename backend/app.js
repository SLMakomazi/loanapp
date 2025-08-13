require('dotenv').config();
const express = require('express');
const pool = require('./config/database');
const app = express();
const port = process.env.PORT || 10000;

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
    database: 'loanapp_db',
    status: 'online'
  });
});

// Test database connection
app.get('/test-db', async (req, res) => {
  let client;
  try {
    // Get a client from the pool
    client = await pool.connect();
    
    // Test the connection
    const result = await client.query('SELECT NOW()');
    
    res.json({
      status: 'success',
      database: 'connected',
      postgres: 'working',
      current_time: result.rows[0].now,
      connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER
      }
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to connect to database',
      error: error.message,
      details: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        hasPassword: !!process.env.DB_PASSWORD,
        nodeEnv: process.env.NODE_ENV,
        ssl: process.env.NODE_ENV === 'production' ? 'enabled' : 'disabled'
      }
    });
  } finally {
    // Release the client back to the pool
    if (client) client.release();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Connected to database: ${process.env.DB_NAME}`);
});