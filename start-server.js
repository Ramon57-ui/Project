#!/usr/bin/env node
// Eigenständiger Server - läuft unabhängig von der Electron-App
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// ===== NOTEN ROUTES =====
app.post('/api/noten', async (req, res) => {
    try {
        const { fach, note, datum } = req.body;
        const result = await db.addNote(fach, note, datum);
        res.json({ success: true, id: result.id });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.get('/api/noten', async (req, res) => {
    try {
        const noten = await db.getNotes();
        res.json(noten);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ===== START SERVER =====
app.listen(PORT, () => {
    console.log(`\n🚀 Schulplaner Server läuft auf http://localhost:${PORT}`);
    console.log('📌 Der Server bleibt auch nach dem Schließen der App online!\n');
});

// Graceful Shutdown
process.on('SIGTERM', () => {
    console.log('Server wird beendet...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('Server wird beendet...');
    process.exit(0);
});
