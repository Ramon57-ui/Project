const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let serverProcess;

// Starte den Server als separaten Prozess
function startServer() {
    const serverPath = path.join(__dirname, 'server.js');
    serverProcess = spawn('node', [serverPath], {
        stdio: 'inherit',
        detached: true // Prozess läuft unabhängig von der Electron-App
    });

    serverProcess.on('error', (err) => {
        console.error('Server konnte nicht gestartet werden:', err);
    });

    console.log('Server gestartet (PID: ' + serverProcess.pid + ')');
}

// Erstelle das App-Fenster
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    const url = isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, 'index.html')}`;

    mainWindow.loadURL(url);

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
        // Server bleibt online! Nicht beenden.
    });
}

app.on('ready', () => {
    startServer();
    // Gib dem Server Zeit zu starten
    setTimeout(() => {
        createWindow();
    }, 1000);
});

app.on('window-all-closed', () => {
    // App wird geschlossen, aber Server läuft weiter
    // Fenster schließen beendet die Electron-App nicht vollständig
    if (process.platform !== 'darwin') {
        // Nicht auf macOS beenden
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// Cleanup beim Beenden (optional - Server läuft im Hintergrund weiter)
process.on('exit', () => {
    // Serverprocess wird absichtlich NICHT beendet
    // Damit läuft der Server auch nach Schließen der App weiter
});
