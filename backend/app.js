const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bfhlRoutes = require('./routes/bfhlRoutes');
const corsOptions = {
    origin: true,
    credentials: true,
  };
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/bfhl', bfhlRoutes);
console.log("ssh")

const PORT = process.env.PORT || 8006;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));