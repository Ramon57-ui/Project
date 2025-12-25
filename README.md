# 📚 Schulplaner Pro - Quali-Edition 2025

> **Dein persönlicher Lernbegleiter für den Qualifizierenden Abschluss**

<div align="center">

![Version](https://img.shields.io/badge/Version-2.0-blue)
![Status](https://img.shields.io/badge/Status-Aktiv-success)
![License](https://img.shields.io/badge/License-MIT-green)

**[🚀 Schnellstart](#-schnellstart) • [📊 Features](#-features-übersicht) • [📐 Quali-Inhalte](#-quali-vorbereitung) • [🔧 API](#-api-endpunkte)**

</div>

---

## 🎯 Features-Übersicht

| Feature | Beschreibung |
|---------|-------------|
| 📊 **Noten** | Alle Noten verwalten & Durchschnitt berechnen |
| 📅 **Kalender** | Termine & Prüfungen im Blick |
| 📝 **Notizen** | Wichtiges schnell notieren |
| ⏰ **Fehlzeiten** | Krankheitstage dokumentieren |
| 🇬🇧 **Englisch** | Grammatik, Vokabeln & Quali-Tipps |
| 📐 **Mathe** | Formeln, Geometrie & Rechenwege |
| 📖 **Deutsch** | Rechtschreibung, Grammatik & Textarbeit |
| ⏱️ **Lern Zeit** | Fokus-Timer mit anpassbarer Dauer |
| 🔢 **Rechner** | Wissenschaftlicher Taschenrechner |
| 📈 **Statistiken** | Notentrends visualisiert mit Chart.js |
| 🏆 **Achievements** | Motivation durch Erfolge & Streak-Counter |

---

## 🚀 Schnellstart

### 1️⃣ Repository klonen
```bash
git clone https://github.com/Ramon57-ui/Project.git
cd Project/schulplaner-app
```

### 2️⃣ Dependencies installieren
```bash
npm install
```

### 3️⃣ Server starten
```bash
node server.js
```

### 4️⃣ Browser öffnen
```
http://localhost:3000
```

---

## 🛠️ Technologie-Stack

| Kategorie | Technologie |
|-----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ |
| **Backend** | Node.js, Express.js |
| **Datenbank** | SQLite3 |
| **Charts** | Chart.js |
| **Design** | Glasmorphism, CSS Variables |
| **Theme** | Blau-Lila Gradient |

---

## 📁 Projektstruktur

```
schulplaner-app/
├── 📄 index.html       # Haupt-UI mit allen 12 Tabs
├── 📄 styles.css       # Blau-Lila Glasmorphism Design
├── 📄 app.js           # Frontend-Logik & Features
├── 📄 server.js        # Express REST-API
├── 📄 db.js            # SQLite Datenbank-Wrapper
├── 📄 package.json     # Node.js Dependencies
├── 📄 README.md        # Diese Dokumentation
└── 📄 ARBEITSPLAN.md   # Entwicklungs-Roadmap
```

---

## 🎨 Design

### Farbschema
| Farbe | Hex | Verwendung |
|-------|-----|------------|
| 🔵 **Primär** | `#5c6bc0` | Navigation, Buttons |
| 🟣 **Sekundär** | `#7e57c2` | Akzente, Hover |
| 💜 **Akzent** | `#ab47bc` | Highlights |
| 🌈 **Gradient** | Blau → Lila | Hintergrund |

### UI-Elemente
- ✨ Glasmorphism-Effekte mit `backdrop-filter`
- 🌙 Dark Mode Support
- 📱 Responsive Layout
- 🎯 12 intuitive Tab-Navigation

---

## 📐 Quali-Vorbereitung

### 🇬🇧 Englisch-Bereich
| Inhalt | Was du lernst |
|--------|---------------|
| **Grammar** | Simple Present, Past, Future, Conditionals, If-Sätze |
| **Vocabulary** | Familie, Schule, Freizeit, Gefühle, Essen, Berufe |
| **Quali-Tipps** | Textverständnis, Übersetzung, Prüfungstricks |

### 📐 Mathe-Bereich
| Inhalt | Formeln & Themen |
|--------|------------------|
| **Geometrie** | Kreis, Rechteck, Dreieck, Würfel, Kugel, Zylinder |
| **Algebra** | Gleichungen, Prozent, Dreisatz, Pythagoras |
| **Rechner** | π, √, x², sin/cos/tan, Potenzen (x^y) |

### 📖 Deutsch-Bereich
| Inhalt | Was du lernst |
|--------|---------------|
| **Grammatik** | Satzglieder, Zeitformen, Konjugation, Kasus |
| **Rechtschreibung** | das/dass, seit/seid, Groß-/Kleinschreibung |
| **Textarbeit** | Analyse, Zusammenfassung, Erörterung |

---

## 🔧 API-Endpunkte

| Methode | Endpunkt | Beschreibung |
|---------|----------|--------------|
| `GET` | `/api/noten` | Alle Noten abrufen |
| `POST` | `/api/noten` | Neue Note speichern |
| `DELETE` | `/api/noten/:id` | Note löschen |
| `GET` | `/api/termine` | Alle Termine abrufen |
| `POST` | `/api/termine` | Neuen Termin speichern |
| `DELETE` | `/api/termine/:id` | Termin löschen |
| `GET` | `/api/notizen` | Alle Notizen abrufen |
| `POST` | `/api/notizen` | Neue Notiz speichern |
| `DELETE` | `/api/notizen/:id` | Notiz löschen |
| `GET` | `/api/fehlzeiten` | Alle Fehlzeiten abrufen |
| `POST` | `/api/fehlzeiten` | Neue Fehlzeit speichern |
| `DELETE` | `/api/fehlzeiten/:id` | Fehlzeit löschen |

---

## 📋 Entwicklungs-Roadmap

Siehe **[ARBEITSPLAN.md](ARBEITSPLAN.md)** für den detaillierten Wochenplan.

### ✅ Abgeschlossen (v2.0)
- [x] Quali-Vorbereitung: Englisch, Mathe, Deutsch
- [x] Wissenschaftlicher Taschenrechner
- [x] Lern Zeit mit anpassbarer Dauer
- [x] Blau-Lila Glasmorphism Design

### 🔄 Geplant
- [ ] 🎯 Quiz-System mit Punkten
- [ ] 📈 Lernfortschritt-Tracking
- [ ] 🔔 Prüfungs-Erinnerungen
- [ ] 📱 Verbesserte Mobile-Ansicht
- [ ] 📤 Daten-Export (PDF)

---

## 💻 Lokale Entwicklung

### Voraussetzungen
- Node.js v18+
- npm oder yarn
- Moderner Browser

### Git Workflow
```bash
# Änderungen speichern
git add -A
git commit -m "Feature: Beschreibung"
git push origin main
```

---

## 📝 Changelog

### v2.0 (Januar 2025)
- ✨ Quali-Vorbereitung: Englisch, Mathe, Deutsch Tabs
- 🔢 Wissenschaftlicher Taschenrechner (π, √, x², sin/cos/tan)
- ⏱️ Lern Zeit mit +1/-1 und +5/-5 Buttons
- 🎨 Blau-Lila Glasmorphism Design

### v1.0 (Dezember 2024)
- 📊 Noten-Verwaltung
- 📅 Kalender & Termine
- 📝 Notizen-System
- ⏰ Fehlzeiten-Tracker
- 📈 Statistiken mit Charts
- 🏆 Achievement-System

---

## 👤 Autor

**Ramon** | 8. Klasse Mittelschule | Quali 2025

---

## 📄 Lizenz

MIT License - Frei verwendbar für persönliche Projekte.

---

<div align="center">

**⭐ Viel Erfolg beim Quali! ⭐**

*Jeden Tag ein bisschen lernen - Erfolg kommt Schritt für Schritt!*

</div>
