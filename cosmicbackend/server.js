const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const eventRoutes = require('./routes/events');
const observerRoutes = require('./routes/observers');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/observers', observerRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


