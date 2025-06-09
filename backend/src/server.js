const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes (will be added later)
app.use('/api/auth', require('./routes/auth.routes'));

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});