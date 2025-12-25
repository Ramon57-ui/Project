# 📋 Schulplaner - Arbeitsplan & Verbesserungen

> **Stand:** Dezember 2025  
> **Fokus:** Ein echter, funktionaler Schulplaner  
> **Status-Legende:** ⬜ Offen | 🔄 In Arbeit | ✅ Erledigt

---

## 🎯 Kern-Funktionen des Planers

| Feature | Status | Wichtigkeit |
|---------|--------|-------------|
| 📅 **Termine/Kalender** | ✅ 100% | KERN |
| 📝 **Notizen** | ✅ 100% | KERN |
| 📊 **Noten** | ✅ 100% | KERN |
| ⏰ **Fehlzeiten** | ✅ 100% | KERN |
| 📈 **Statistiken** | ✅ 95% | WICHTIG |
| 🏆 **Achievements** | ✅ 100% | BONUS |

---

## 📅 WOCHE 1: Planer-Features optimieren

### Tag 1: Bessere Terminverwaltung 📅
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 2-3 Stunden

- [ ] **Quali-Prüfungstermine speichern**
  - Große Kalender-Ansicht mit Highlights
  - Farbcodierung: Englisch 🇬🇧, Mathe 📐, Deutsch 📖
  - Countdown zu Prüfungen (z.B. "noch 45 Tage")

- [ ] **Termine filtern & sortieren**
  - Nach Typ: Prüfung, Hausaufgabe, Projekt
  - Nach Datum
  - Nur kommende Termine anzeigen

- [ ] **Reminder/Benachrichtigungen**
  - Warnung 1 Woche vor Prüfung
  - Warnung 1 Tag vorher
  - Browser-Benachrichtigung (optional)

**Datei bearbeiten:** `index.html` + `app.js`

---

### Tag 2-3: Noten-Management verbessern 📊
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 3-4 Stunden

- [ ] **Noten nach Fach sortieren**
  - Tab für jedes Fach (Englisch, Mathe, Deutsch, etc.)
  - Durchschnitt pro Fach berechnen
  - Trend zeigen (besser/schlechter geworden?)

- [ ] **Noten für Quali relevant markieren**
  - Quali-Prüfungs-Noten separat tracken
  - Trennung: Schuljahr-Noten vs. Quali-Noten

- [ ] **Export-Funktion**
  - Noten als Text/Liste zum Kopieren
  - Einfacher zum Notieren im Schulplaner

**Datei bearbeiten:** `index.html` + `app.js`

---

### Tag 4: Notizen intelligenter nutzen 📝
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 2-3 Stunden

- [ ] **Notizen nach Fach kategorisieren**
  - Icon pro Fach (🇬🇧 Englisch, 📐 Mathe, 📖 Deutsch)
  - Filter nach Fach
  - Farb-Tags hinzufügen

- [ ] **Wichtige Notizen oben pinnen**
  - "Oben halten" Button
  - Wichtige Themen immer sichtbar

- [ ] **Notizen durchsuchen**
  - Schnelle Text-Suche
  - Nach Datum suchen

**Datei bearbeiten:** `index.html` + `app.js`

---

### Tag 5: Dashboard verbessern 🏠
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 2-3 Stunden

- [ ] **Übersicht der nächsten 7 Tage**
  - Welche Termine stehen an?
  - Welche Noten sind wichtig?
  - Wie viel Zeit zum Lernen?

- [ ] **Schnelle Aktionen**
  - "Heute Noten eintragen?" Button
  - "Schnelle Notiz?" Button
  - "Was muss ich heute tun?" Bereich

- [ ] **Statistiken im Überblick**
  - Aktuelle Durchschnittsnote
  - Fehlzeiten gesamt
  - Lernzeit diese Woche

**Datei bearbeiten:** `index.html` + `app.js`

---

### Tag 6-7: Testen & Cleanup 🧹
> **Schwierigkeit:** ⭐ Leicht | **Zeitaufwand:** 2-3 Stunden

- [ ] **Alle Planer-Funktionen testen**
  - Termine hinzufügen/löschen
  - Noten eintragen
  - Notizen erstellen
  - Statistiken aktualisieren

- [ ] **Mobile-Ansicht überprüfen**
  - Buttons lesbar?
  - Datum-Eingabe funktioniert?
  - Kalender-Ansicht mobil?

- [ ] **Git Commit**
  ```bash
  git add -A
  git commit -m "Feature: Planer-Optimierungen - bessere Termine, Noten, Notizen"
  ```

- [ ] **README aktualisieren**
  - Neue Features dokumentieren
  - Screenshots/Beschreibungen

---

## 📅 WOCHE 2: Lernziele & Tracking (Bonus)

### Lernplan pro Woche
- [ ] **Wöchentlicher Lernplan**
  - "Ich möchte diese Woche 5h Englisch lernen"
  - Fortschritt tracken
  - Erfolg belohnen

### Lernzeit-Tracking
- [ ] **Lernzeiten speichern**
  - Wann habe ich gelernt?
  - Wie lange?
  - In welchem Fach?
  - Statistik: Lernstunden pro Woche

---

## ⚙️ Technische Verbesserungen

### Code-Struktur
- [ ] JavaScript in Funktionen aufteilen
- [ ] Kommentare hinzufügen
- [ ] Konsistenz überprüfen

### Performance
- [ ] LocalStorage optimieren
- [ ] Weniger Daten laden
- [ ] Schnellere Statistik-Berechnung

### Fehlerbehandlung
- [ ] Ungültige Eingaben abfangen
- [ ] Meldungen für Fehler
- [ ] Daten-Backup

---

## 📂 Was NICHT in den Planer gehört (Optional)

Diese Features sind nett, aber **nicht Kern des Planers**:
- ~~🎮 Quiz-Spiele~~ → Extra App/Browser
- ~~🎯 Learning Games~~ → Optional
- ~~📤 PDF-Export~~ → Später
- ⏱️ **Lern Zeit Timer** → Behalten (sehr nützlich!)
- 🔢 **Taschenrechner** → Behalten (für Mathe)

**Fokus bleibt:** Ein guter Planer für:
- 📅 Termine tracken
- 📝 Notizen machen
- 📊 Noten verwalten
- ⏰ Fehlzeiten dokumentieren
- 📈 Erfolg visualisieren

---

## ✅ Bereits erledigt

- [x] Grundgerüst der App
- [x] Noten-Verwaltung
- [x] Kalender & Termine
- [x] Notizen-System
- [x] Fehlzeiten-Tracker
- [x] Statistiken & Charts
- [x] Achievement System
- [x] Lern Zeit Timer
- [x] Wissenschaftlicher Rechner
- [x] Blau-Lila Design
- [x] Dark Mode
- [x] SQLite Datenbank

---

## 🎯 Quali-Termin-Vorlage

| Prüfung | Datum | Status | Tage |
|---------|-------|--------|------|
| Englisch | __________ | ⬜ | |
| Deutsch | __________ | ⬜ | |
| Mathe | __________ | ⬜ | |
| Projektprüfung | __________ | ⬜ | |

---

## 💡 Next Priority

**NICHT** neue Features hinzufügen, sondern:

1. ✅ **Bestehende Features perfektionieren**
   - Planer wirklich gut machen
   - Alle Bugs fixen
   - User-Experience verbessern

2. ✅ **Auf echte Planer-Anforderungen fokussieren**
   - Was brauchst du WIRKLICH zum Planen?
   - Was lenkt ab?
   - Was macht den Unterschied?

3. ✅ **Einfach & schnell zugänglich**
   - Zügig was eintragen können
   - Nicht zu viele Klicks
   - Übersichtlich bleiben

---

**Mantra:** _Ein guter Planer ist besser als hundert bunte Features!_ 📋✨📅 WOCHE 1: Quali-Inhalte Erweitern

### Tag 1-2: Englisch verbessern 🇬🇧
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 2-3 Stunden

- [ ] **Vokabel-Trainer hinzufügen**
  - Karteikarten-System mit Wiederholungen
  - Wichtige Quali-Vokabeln nach Themen sortiert
  - Aussprache-Tipps (Lautschrift)
  
- [ ] **Reading Comprehension Übungen**
  - Beispieltexte mit Fragen
  - Tipps zum Textverständnis
  - Typische Quali-Textarten

- [ ] **Writing Section erweitern**
  - E-Mail schreiben (formell/informell)
  - Bildbeschreibung
  - Tagebucheintrag/Blog
  - Textbausteine und Formulierungen

**Datei bearbeiten:** `index.html` → Englisch Tab

---

### Tag 3-4: Mathe Formeln & Übungen 📐
> **Schwierigkeit:** ⭐⭐⭐ SchEingabefelder)
  - Prozentrechner mit Erklärung
  - Dreisatz-Rechner mit Schritten

- [ ] **Übungsaufgaben mit Lösungen**
  - 10 typische Quali-Aufgaben pro Thema
  - Schritt-für-Schritt Lösungen
  - Schwierigkeitsgrade (leicht/mittel/schwer)

- [ ] **Geometrie visualisieren**
  - Bilder von Formen hinzufügen
  - Beschriftungen der Formeln
  - Beispielrechnungen

**Datei bearbeiten:** `index.html` → Mathe Tab + `app.js` für Rechner

---

### Tag 5-6: Deutsch Aufsätze & Textsorten 📖
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 2-3 Stunden

- [ ] **Erörterung Anleitung**
  - Aufbau: Einleitung, Hauptteil, Schluss
  - Pro/Contra Argumente strukturieren
  - Beispiel-Erörterung zum Üben

- [ ] **Textgebundener Aufsatz**
  - Wie analysiert man einen Text?
  - Wichtige Fachbegriffe
  - Muster-Analyse

- [ ] **Bewerbung schreiben**
  - Lebenslauf-Vorlage
  - Anschreiben-Muster
  - Häufige Fehler vermeiden

**Datei bearbeiten:** `index.html` → Deutsch Tab

---

### Tag 7: Code aufräumen & Testen 🧹
> **Schwierigkeit:** ⭐ Leicht | **Zeitaufwand:** 1-2 Stunden

- [ ] Alle neuen Features testen
- [ ] Rechtschreibung überprüfen
- [ ] Git Commit erstellen
- [ ] README aktualisieren

---

## 📅 WOCHE 2: Neue Features

### Lern-Fortschritt System 📈
> **Schwierigkeit:** ⭐⭐⭐ Schwer | **Zeitaufwand:** 4-5 Stunden

- [ ] **Fortschritts-Tracking pro Fach**
  - Wie viel habe ich heute gelernt?
  - Wöchentliche Lernzeit-Statistik
  - Stärken/Schwächen erkennen

- [ ] **Lernziele setzen**
  - Tägliche Ziele (z.B. 30 Min Englisch)
  - Wochenziele
  - Belohnungssystem

- [ ] **Quali-Countdown**
  - Tage bis zur Prüfung
  - Was sollte ich bis wann können?
  - Lernplan-Generator

**Neue Dateien:** Eventuell `progress.js` oder in `app.js` integrieren

---

### Quiz-System 🎯
> **Schwierigkeit:** ⭐⭐⭐ Schwer | **Zeitaufwand:** 5-6 Stunden

- [ ] **Multiple-Choice Fragen**
  - Englisch Grammatik Quiz
  - Mathe Formel Quiz
  - Deutsch Rechtschreibung Quiz

- [ ] **Punkte & Highscore**
  - Punkte pro richtiger Antwort
  - Persönlicher Highscore
  - Schwierigkeitsgrade

- [ ] **Wiederholung falscher Antworten**
  - Falsche Antworten speichern
  - Gezielt wiederholen
  - Fortschritt zeigen

**Neue Dateien:** `quiz.js` + Quiz-Daten in JSON

---

### Notizen verbessern 📝
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 2-3 Stunden

- [ ] **Kategorien für Notizen**
  - Nach Fach sortieren
  - Farbcodierung
  - Wichtigkeit markieren

- [ ] **Suche in Notizen**
  - Volltextsuche
  - Nach Datum filtern
  - Nach Fach filtern

- [ ] **Notizen formatieren**
  - Fett, Kursiv
  - Listen
  - Überschriften

---

## 📅 WOCHE 3: Design & Mobile

### Responsive Design 📱
> **Schwierigkeit:** ⭐⭐ Mittel | **Zeitaufwand:** 3-4 Stunden

- [ ] **Handy-Ansicht optimieren**
  - Navigation für kleine Bildschirme
  - Buttons größer machen
  - Lesbare Schriftgrößen

- [ ] **Tablet-Ansicht**
  - Zwei-Spalten Layout
  - Touch-freundliche Elemente

**Datei bearbeiten:** `styles.css` → Media Queries

---

### Weitere Design-Verbesserungen 🎨
> **Schwierigkeit:** ⭐ Leicht | **Zeitaufwand:** 1-2 Stunden

- [ ] **Animationen hinzufügen**
  - Sanfte Übergänge zwischen Tabs
  - Button-Hover Effekte
  - Loading-Animationen

- [ ] **Icons verbessern**
  - Einheitliche Icon-Größen
  - Mehr visuelle Hinweise
  - Tooltips für Buttons

---

## 🚀 BONUS-FEATURES (Optional)

### Wenn du extra Zeit hast:

| Feature | Beschreibung | Schwierigkeit |
|---------|--------------|---------------|
| 🔊 **Audio-Aussprache** | Englische Wörter vorlesen lassen | ⭐⭐⭐ |
| 📤 **Daten exportieren** | Noten als PDF/Excel speichern | ⭐⭐⭐ |
| 🌙 **Dark Mode Button** | Einfacher Umschalter | ⭐ |
| 🔔 **Erinnerungen** | Browser-Benachrichtigungen | ⭐⭐ |
| 📊 **Notentrend-Graph** | Wie entwickeln sich meine Noten? | ⭐⭐ |
| 🎮 **Lern-Spiele** | Memory, Wort-Rätsel | ⭐⭐⭐⭐ |

---

## 🔧 Technische Verbesserungen

### Code-Qualität
- [ ] JavaScript in mehrere Dateien aufteilen
- [ ] CSS mit Variablen besser organisieren
- [ ] Kommentare hinzufügen
- [ ] Fehlerbehandlung verbessern

### Performance
- [ ] Bilder komprimieren
- [ ] CSS/JS minimieren (für Produktion)
- [ ] Lazy Loading für Tabs

### Sicherheit
- [ ] Eingaben validieren
- [ ] XSS-Schutz prüfen
- [ ] SQL-Injection vermeiden (bereits gut!)

---

## 📂 Empfohlene Projektstruktur

```
schulplaner-app/
├── 📄 index.html          # Haupt-HTML
├── 📄 server.js           # Express Server
├── 📄 db.js               # Datenbank
├── 📄 package.json        # Dependencies
├── 📄 README.md           # Projekt-Dokumentation
├── 📄 ARBEITSPLAN.md      # Diese Datei
│
├── 📁 css/
│   ├── styles.css         # Haupt-Styles
│   ├── responsive.css     # Mobile Styles (NEU)
│   └── animations.css     # Animationen (NEU)
│
├── 📁 js/
│   ├── app.js             # Haupt-Logik
│   ├── calculator.js      # Taschenrechner (NEU)
│   ├── timer.js           # Lern Zeit (NEU)
│   └── quiz.js            # Quiz-System (NEU)
│
├── 📁 data/
│   ├── englisch.json      # Vokabeln & Grammatik (NEU)
│   ├── mathe.json         # Formeln & Übungen (NEU)
│   └── deutsch.json       # Regeln & Texte (NEU)
│
└── 📁 images/
    ├── geometrie/         # Mathe-Bilder (NEU)
    └── icons/             # App-Icons (NEU)
```

---

## 📝 Notizen & Ideen

### Hier kannst du eigene Ideen notieren:

1. _____________________________________
2. _____________________________________
3. _____________________________________
4. _____________________________________
5. _____________________________________

---

## ✅ Abgeschlossene Features

> Hier kannst du erledigte Aufgaben eintragen:

- [x] Grundgerüst der App
- [x] SQLite Datenbank
- [x] Noten-Verwaltung
- [x] Kalender
- [x] Notizen
- [x] Fehlzeiten
- [x] Lern Zeit Timer (anpassbar)
- [x] Wissenschaftlicher Taschenrechner
- [x] Englisch Grundlagen (Grammatik, Vokabeln)
- [x] Mathe Formeln (Geometrie, Prozent)
- [x] Deutsch Grundlagen (Grammatik, Rechtschreibung)
- [x] Blau-Lila Glasmorphism Design
- [x] Statistiken & Charts
- [x] Achievement System
- [x] Streak Counter

---

## 🎯 Quali-Prüfungstermine (zum Eintragen)

| Prüfung | Datum | Status |
|---------|-------|--------|
| Projektprüfung | ________ | ⬜ |
| Englisch | ________ | ⬜ |
| Deutsch | ________ | ⬜ |
| Mathe | ________ | ⬜ |
| Muttersprache | ________ | ⬜ |

---

## 💡 Quick-Start für jeden Tag

1. **Server starten:** `node server.js` im Terminal
2. **Browser öffnen:** http://localhost:3000
3. **Aufgabe aussuchen:** Eine Checkbox von oben wählen
4. **Coden!** Kleine Schritte machen
5. **Testen:** Funktioniert alles?
6. **Commit:** `git add -A && git commit -m "Beschreibung"`

---

**Viel Erfolg bei der Quali-Vorbereitung! 🚀📚**

*Letzte Aktualisierung: _______________*
