const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Datenbank-Pfad
const dbPath = path.join(process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + '/.config'), 'SchulplanerPro', 'schulplaner.db');

// Erstelle Verzeichnis falls nicht vorhanden
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}

let db = null;

// Initialisiere Datenbank
function initDatabase() {
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Datenbankfehler:', err);
                reject(err);
            } else {
                console.log('✅ Datenbank verbunden:', dbPath);
                createTables();
                resolve(db);
            }
        });
    });
}

// Erstelle Tabellen
function createTables() {
    db.serialize(() => {
        // Noten Tabelle
        db.run(`
            CREATE TABLE IF NOT EXISTS noten (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                fach TEXT NOT NULL,
                note REAL NOT NULL,
                datum TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(fach, datum)
            )
        `);

        // Termine Tabelle
        db.run(`
            CREATE TABLE IF NOT EXISTS termine (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titel TEXT NOT NULL,
                datum TEXT NOT NULL,
                typ TEXT DEFAULT 'sonstiges',
                fertig INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Notizen Tabelle
        db.run(`
            CREATE TABLE IF NOT EXISTS notizen (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titel TEXT NOT NULL,
                text TEXT,
                datum TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Fehlzeiten Tabelle
        db.run(`
            CREATE TABLE IF NOT EXISTS fehlzeiten (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                datum TEXT NOT NULL,
                stunden REAL NOT NULL,
                art TEXT DEFAULT 'sonstiges',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Statistiken Tabelle
        db.run(`
            CREATE TABLE IF NOT EXISTS statistiken (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                durchschnitt REAL,
                beste_note REAL,
                schlechteste_note REAL,
                gesamt_noten INTEGER DEFAULT 0,
                gesamt_fehlzeiten REAL DEFAULT 0,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('✅ Tabellen erstellt/überprüft');
    });
}

// ===== NOTEN FUNKTIONEN =====
function addNote(fach, note, datum) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT OR REPLACE INTO noten (fach, note, datum) VALUES (?, ?, ?)',
            [fach, note, datum],
            function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID });
            }
        );
    });
}

function getNotes() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM noten ORDER BY datum DESC', (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function deleteNote(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM noten WHERE id = ?', [id], function(err) {
            if (err) reject(err);
            else resolve();
        });
    });
}

// ===== TERMINE FUNKTIONEN =====
function addTermin(titel, datum, typ) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO termine (titel, datum, typ) VALUES (?, ?, ?)',
            [titel, datum, typ],
            function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID });
            }
        );
    });
}

function getTermine() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM termine ORDER BY datum ASC', (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function deleteTermin(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM termine WHERE id = ?', [id], function(err) {
            if (err) reject(err);
            else resolve();
        });
    });
}

function toggleTermin(id) {
    return new Promise((resolve, reject) => {
        db.run(
            'UPDATE termine SET fertig = NOT fertig WHERE id = ?',
            [id],
            function(err) {
                if (err) reject(err);
                else resolve();
            }
        );
    });
}

// ===== NOTIZEN FUNKTIONEN =====
function addNotiz(titel, text, datum) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO notizen (titel, text, datum) VALUES (?, ?, ?)',
            [titel, text, datum],
            function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID });
            }
        );
    });
}

function getNotizen() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM notizen ORDER BY created_at DESC', (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function deleteNotiz(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM notizen WHERE id = ?', [id], function(err) {
            if (err) reject(err);
            else resolve();
        });
    });
}

// ===== FEHLZEITEN FUNKTIONEN =====
function addFehlzeit(datum, stunden, art) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO fehlzeiten (datum, stunden, art) VALUES (?, ?, ?)',
            [datum, stunden, art],
            function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID });
            }
        );
    });
}

function getFehlzeiten() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM fehlzeiten ORDER BY datum DESC', (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function deleteFehlzeit(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM fehlzeiten WHERE id = ?', [id], function(err) {
            if (err) reject(err);
            else resolve();
        });
    });
}

// ===== STATISTIKEN =====
function getStatistics() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM noten', (err, noten) => {
            if (err) {
                reject(err);
                return;
            }

            db.all('SELECT SUM(stunden) as total FROM fehlzeiten', (err, fehlzeiten) => {
                if (err) {
                    reject(err);
                    return;
                }

                if (noten.length === 0) {
                    resolve({
                        durchschnitt: 0,
                        beste_note: 0,
                        schlechteste_note: 0,
                        gesamt_noten: 0,
                        gesamt_fehlzeiten: 0
                    });
                    return;
                }

                const grades = noten.map(n => n.note);
                const avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
                const best = Math.min(...grades);
                const worst = Math.max(...grades);

                resolve({
                    durchschnitt: avg,
                    beste_note: best,
                    schlechteste_note: worst,
                    gesamt_noten: noten.length,
                    gesamt_fehlzeiten: fehlzeiten[0]?.total || 0
                });
            });
        });
    });
}

// ===== DATENBANK EXPORT/IMPORT =====
function exportData() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM noten', (err, noten) => {
            if (err) {
                reject(err);
                return;
            }
            db.all('SELECT * FROM termine', (err, termine) => {
                if (err) {
                    reject(err);
                    return;
                }
                db.all('SELECT * FROM notizen', (err, notizen) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    db.all('SELECT * FROM fehlzeiten', (err, fehlzeiten) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve({
                            noten,
                            termine,
                            notizen,
                            fehlzeiten,
                            exportDate: new Date().toISOString()
                        });
                    });
                });
            });
        });
    });
}

module.exports = {
    initDatabase,
    addNote,
    getNotes,
    deleteNote,
    addTermin,
    getTermine,
    deleteTermin,
    toggleTermin,
    addNotiz,
    getNotizen,
    deleteNotiz,
    addFehlzeit,
    getFehlzeiten,
    deleteFehlzeit,
    getStatistics,
    exportData
};
