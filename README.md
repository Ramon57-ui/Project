# 📚 Schulplaner Pro - Dokumentation

Eine moderne Web-Anwendung zur Verwaltung von Schulnoten, Terminen, Notizen und Fehlzeiten mit motivierenden Features.

## 🎯 Funktionen

### 📝 Notenverwaltung
- ✅ Noten von 1-6 mit 0,1er-Schritten eingeben
- ✅ Verschiedene Fächer verwalten
- ✅ Farb-Codierung nach Notenwert
- ✅ Alle Noten sortiert nach Datum anzeigen
- ✅ Einzelne Noten löschen

### 📅 Terminverwaltung
- ✅ Termine/Prüfungen mit Datum und Uhrzeit eintragen
- ✅ Verschiedene Kategorien: Prüfung, Hausaufgabe, Projekt, Sonstiges
- ✅ Termine als erledigt markieren
- ✅ Automatische Sortierung nach Datum
- ✅ Termine löschen

### 📝 Notizen-System
- ✅ Beliebige Notizen mit Titel erstellen
- ✅ Längere Textinhalte speichern
- ✅ Alle Notizen mit Erstellungsdatum anzeigen
- ✅ Notizen jederzeit löschen

### ⏰ Fehlzeiten-Tracker
- ✅ Fehlzeiten mit Grund eintragen
- ✅ Stundenzahl erfassen
- ✅ Verschiedene Gründe: Krank, Zahnarzt, Arzt, Urlaub, Sonstiges
- ✅ Gesamte Fehlzeiten automatisch berechnen
- ✅ Chronologische Übersicht

### 📈 Statistiken & Auswertungen
- ✅ Durchschnittsnote berechnen
- ✅ Beste und schlechteste Note anzeigen
- ✅ Balkendiagramm mit Chart.js
- ✅ Durchschnittsnote pro Fach visualisieren
- ✅ Automatische Aktualisierung bei neuen Noten

### 🏆 Achievement-System
- ✅ 6 verschiedene Erfolge freischalten
- ✅ Visuelle Anzeige von Lock/Unlock Status
- ✅ Motivierende Ziele erreichen
- ✅ Lerntag-Feature mit Counter

### 🌙 Dark/Light Mode
- ✅ Umschalter im Header
- ✅ Einstellung wird gespeichert
- ✅ Angenehm für die Augen

### 💾 Datenspeicherung
- ✅ LocalStorage speichert alle Daten
- ✅ Daten bleiben auch nach Browser-Neustart
- ✅ Option zum Löschen aller Daten

### 📱 Responsive Design
- ✅ Funktioniert auf Desktop, Tablet und Smartphone
- ✅ Touch-freundliche Bedienung
- ✅ Scrollbare Tab-Navigation auf kleinen Geräten

## 🚀 Erste Schritte

### Installation
1. Lade alle Dateien in einen Ordner
2. Öffne `index.html` im Browser
3. Fertig! Keine Installation nötig 🎉

### Live Server (empfohlen)
1. Installiere die Extension "Live Server" in VS Code
2. Rechtsklick auf `index.html`
3. "Open with Live Server" wählen
4. Automatisches Reload bei Dateiänderungen

## 📖 Wie man die App nutzt

### Noten hinzufügen
1. Gehe zum Tab "📊 Noten"
2. Gib ein:
   - **Fach**: z.B. "Mathematik"
   - **Note**: 1.0 - 6.0 (Dezimalzahlen möglich)
   - **Datum**: Wann hast du die Note bekommen?
3. Klicke "✅ Note speichern"

### Termine erstellen
1. Tab "📅 Termine" öffnen
2. Gib ein:
   - **Termintitel**: z.B. "Mathematik Test"
   - **Datum & Uhrzeit**: Wann ist der Termin?
   - **Typ**: Prüfung / Hausaufgabe / Projekt / Sonstiges
3. "✅ Termin speichern"

### Notizen schreiben
1. Tab "📝 Notizen" öffnen
2. Gib ein:
   - **Titel**: Kurzer Überblick
   - **Text**: Deine Notiz
3. "✅ Notiz speichern"

### Fehlzeiten verwalten
1. Tab "⏰ Fehlzeiten" öffnen
2. Gib ein:
   - **Datum**: Wann warst du abwesend?
   - **Stunden**: Wie viele Stunden?
   - **Art**: Grund der Abwesenheit
3. "✅ Fehlzeit speichern"

### Statistiken ansehen
1. Tab "📈 Statistiken" öffnen
2. Sehe:
   - Dein Durchschnitt
   - Beste und schlechteste Note
   - Grafik mit Durchschnitt pro Fach
   - Gesamtzahl der Noten

### Achievements
1. Tab "🏆 Achievements" öffnen
2. Sehe alle deine Erfolge
3. Grüne Erfolge = freigeschaltet ✅
4. Aktiviere "🚀 Lerntag" für extra Motivation

## 🔧 Technische Details

### Dateistruktur
```
schulplaner-app/
├── index.html       (HTML - Struktur)
├── styles.css       (CSS - Design)
├── app.js          (JavaScript - Logik)
└── README.md       (Diese Datei)
```

### Verwendete Technologien
- **HTML5** - Semantische Struktur
- **CSS3** - Modern Styling mit CSS Variables
- **JavaScript (ES6+)** - App-Logik
- **Chart.js** - Diagramme & Grafiken
- **LocalStorage API** - Persistente Datenspeicherung

### Browserkompatibilität
- ✅ Chrome/Chromium (empfohlen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browser

## 🎨 Design-Anpassungen

### Farben ändern
In `styles.css` die `:root` Variablen anpassen:
```css
:root {
    --accent-color: #3498db;      /* Hauptfarbe */
    --success-color: #27ae60;      /* Grün */
    --danger-color: #e74c3c;       /* Rot */
    --warning-color: #f39c12;      /* Orange */
}
```

### Schriftart ändern
In `styles.css` die Font-Family anpassen:
```css
body {
    font-family: 'Georgia', serif;  /* Andere Schrift */
}
```

### Button-Stil ändern
In `styles.css` Button-Klassen anpassen:
```css
.btn-primary {
    background-color: #e91e63;  /* Pink */
    border-radius: 20px;        /* Runder */
}
```

## ⚙️ Erweitermöglichkeiten

### 1. Neue Achievements hinzufügen
In `app.js`, in der `achievementsData` Variable:
```javascript
{
    id: 7,
    icon: '⭐',
    title: 'Neuer Erfolg',
    description: 'Beschreibung',
    unlocked: false
}
```

### 2. Neue Tab hinzufügen
In `index.html` - Navigation:
```html
<button class="tab-btn" data-tab="hausaufgaben">📋 Hausaufgaben</button>
```

In `index.html` - Content:
```html
<section id="hausaufgaben" class="tab-content">
    <h2>📋 Hausaufgaben</h2>
    <!-- Dein Content -->
</section>
```

### 3. Neue Fehlzeitkategorie
In `app.js`, in `renderFehlzeiten()`:
```javascript
const artEmoji = {
    'krank': '🤒',
    'zahn': '🦷',
    'neue-kategorie': '🎯'  // Neue Kategorie
};
```

### 4. Email-Export
Durch externe Services wie Firebase/Backend möglich

### 5. Druckfunktion
```javascript
function printData() {
    window.print();
}
```

## 🐛 Häufige Fehler & Lösungen

### Chart wird nicht angezeigt
**Problem**: "Chart is not defined"
**Lösung**: 
- Internet-Verbindung prüfen (Chart.js lädt von CDN)
- Browser aktualisieren (Ctrl+Shift+R)
- Browser-Cache leeren

### Dark Mode funktioniert nicht
**Problem**: Klassenwechsel funktioniert nicht
**Lösung**:
- Browser-Konsole öffnen (F12)
- Keine Fehler? → Neustart
- `app.js` in `index.html` eingebunden?

### Daten werden nicht gespeichert
**Problem**: Nach Neustart sind Daten weg
**Lösung**:
- localStorage ist in Private Browsing deaktiviert
- LocalStorage Limit erreicht? (bei ~5MB)
- Browser-Cache löschen (und Seite neuladen)

### Eingabefelder funktionieren nicht
**Problem**: Kann nicht eingeben
**Lösung**:
- JavaScript ist deaktiviert? → Aktivieren
- Andere Erweiterungen? → Deaktivieren
- Browser Neustart

### Buttons funktionieren nicht
**Problem**: Click hat keine Reaktion
**Lösung**:
- `app.js` korrekt eingebunden?
- Browser-Konsole auf Fehler checken (F12)
- Älteren Browser aktualisieren

## 📊 Tastenkombinationen

| Tastenkombination | Funktion |
|---|---|
| Strg + S | Speichern (Browser-Standard) |
| Enter | Absenden in Eingabefeldern |
| F12 | Browser-Konsole öffnen |
| Strg + Shift + I | Inspektor öffnen |
| Strg + Shift + C | Element inspizieren |

## 🌐 Online-Version hosten

### Kostenlos auf GitHub Pages
1. GitHub Account erstellen
2. Neues Repository "schulplaner"
3. Dateien hochladen
4. Settings → Pages → Main Branch
5. URL kopieren - fertig! 🎉

### Andere Optionen
- Netlify (kostenlos, einfach)
- Vercel (kostenlos, schnell)
- Firebase Hosting (kostenlos, Google)
- Heroku (mit Backend-Support)

## 📞 Kontakt & Support

**Bugs melden?**
- Browser-Konsole (F12) Fehler kopieren
- Schritt-für-Schritt Anleitung schreiben
- Screenshot machen

**Feature-Wünsche?**
- Gute Ideen sammeln
- Beschreiben was soll verbessert werden
- Wireframe/Skizze zeichnen

## 📜 Lizenz

Diese Anwendung ist Open Source und frei nutzbar. 
Gerne teilen, verwenden und erweitern!

## 🎉 Viel Erfolg!

Nutze diese App um deine Schulzeit besser zu organisieren.
Mit regelmäßiger Nutzung wirst du:

✅ Bessere Noten erreichen
✅ Weniger Stress haben
✅ Besser organisiert sein
✅ Lernen macht mehr Spaß
✅ Ziele erreichen 🏆

**Happy Learning! 📚🚀**

---

**Version**: 1.0
**Letzte Aktualisierung**: Dezember 2025
**Autor**: Schulplaner Team
