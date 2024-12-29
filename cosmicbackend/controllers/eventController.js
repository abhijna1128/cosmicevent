const db = require("../config/db"); // Ensure this path is correct


// Fetch all events
exports.getAllEvents = (req, res) => {
    const query = 'SELECT * FROM CosmicEvent';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Add a new event
exports.addEvent = (req, res) => {
    const { Name, Type, DateOfDiscovery, Duration, Coordinates, Magnitude, ObserverID, Description } = req.body;
    const query = 'INSERT INTO CosmicEvent (Name, Type, DateOfDiscovery, Duration, Coordinates, Magnitude, ObserverID, Description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [Name, Type, DateOfDiscovery, Duration, Coordinates, Magnitude, ObserverID, Description], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Event added successfully!', eventId: result.insertId });
    });
};

// Update an event
exports.updateEvent = (req, res) => {
    const { id } = req.params;
    const { Name, Type, DateOfDiscovery, Duration, Coordinates, Magnitude, ObserverID, Description } = req.body;
    const query = 'UPDATE CosmicEvent SET Name = ?, Type = ?, DateOfDiscovery = ?, Duration = ?, Coordinates = ?, Magnitude = ?, ObserverID = ?, Description = ? WHERE EventID = ?';
    db.query(query, [Name, Type, DateOfDiscovery, Duration, Coordinates, Magnitude, ObserverID, Description, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Event updated successfully!' });
    });
};

// Delete an event
exports.deleteEvent = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM CosmicEvent WHERE EventID = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Event deleted successfully!' });
    });
};
