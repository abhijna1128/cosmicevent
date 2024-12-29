const db = require("../config/db");

// Fetch all observers
exports.getAllObservers = (req, res) => {
    const query = 'SELECT * FROM Observer';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Add a new observer
exports.addObserver = (req, res) => {
    const { Name, Affiliation, Location, ContactInfo, EquipmentUsed } = req.body;
    const query = 'INSERT INTO Observer (Name, Affiliation, Location, ContactInfo, EquipmentUsed) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Name, Affiliation, Location, ContactInfo, EquipmentUsed], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Observer added successfully!', observerId: result.insertId });
    });
};
