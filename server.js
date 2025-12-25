const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

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

app.delete('/api/noten/:id', async (req, res) => {
    try {
        await db.deleteNote(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ===== TERMINE ROUTES =====
app.post('/api/termine', async (req, res) => {
    try {
        const { titel, datum, typ } = req.body;
        const result = await db.addTermin(titel, datum, typ);
        res.json({ success: true, id: result.id });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.get('/api/termine', async (req, res) => {
    try {
        const termine = await db.getTermine();
        res.json(termine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/termine/:id', async (req, res) => {
    try {
        await db.deleteTermin(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.put('/api/termine/:id/toggle', async (req, res) => {
    try {
        await db.toggleTermin(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ===== NOTIZEN ROUTES =====
app.post('/api/notizen', async (req, res) => {
    try {
        const { titel, text } = req.body;
        const datum = new Date().toLocaleDateString('de-DE');
        const result = await db.addNotiz(titel, text, datum);
        res.json({ success: true, id: result.id });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.get('/api/notizen', async (req, res) => {
    try {
        const notizen = await db.getNotizen();
        res.json(notizen);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/notizen/:id', async (req, res) => {
    try {
        await db.deleteNotiz(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ===== FEHLZEITEN ROUTES =====
app.post('/api/fehlzeiten', async (req, res) => {
    try {
        const { datum, stunden, art } = req.body;
        const result = await db.addFehlzeit(datum, stunden, art);
        res.json({ success: true, id: result.id });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.get('/api/fehlzeiten', async (req, res) => {
    try {
        const fehlzeiten = await db.getFehlzeiten();
        res.json(fehlzeiten);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/fehlzeiten/:id', async (req, res) => {
    try {
        await db.deleteFehlzeit(req.params.id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// ===== STATISTIKEN ROUTE =====
app.get('/api/statistiken', async (req, res) => {
    try {
        const stats = await db.getStatistics();
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ===== EXPORT ROUTE =====
app.get('/api/export', async (req, res) => {
    try {
        const data = await db.exportData();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ===== HEALTH CHECK =====
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Start Server
async function startServer() {
    try {
        await db.initDatabase();
        return app.listen(PORT, () => {
            console.log(`✅ Server läuft auf http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('❌ Server-Fehler:', err);
        process.exit(1);
    }
}

// Start immediately if run directly
if (require.main === module) {
    startServer();
}

module.exports = { startServer };
