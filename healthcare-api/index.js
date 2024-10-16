const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Initialize app
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/services', require('./routes/services'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
