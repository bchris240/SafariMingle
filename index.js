// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Define routes
app.use('/api/users', require('./routes/user-routes'));
app.use('/api/thoughts', require('./routes/thought-routes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
