// ===== APP DATA & STATE =====
const appData = {
    noten: [],
    termine: [],
    notizen: [],
    fehlzeiten: [],
    achievements: [],
    learningDayActive: false,
    streak: 0,
    lastStreakDate: null,
    goalGrade: 2.0
};

// ===== AUGSBURGER FEIERTAGE & FERIEN 2025 =====
const augsburgerFeiertage = [
    // Neujahr
    { datum: '2025-01-01', titel: '🎆 Neujahr', typ: 'feiertag' },
    
    // Winterferien Bayern 2024/2025
    { datum: '2025-02-03', titel: '❄️ Winterferien Anfang', typ: 'ferien' },
    { datum: '2025-02-07', titel: '❄️ Winterferien Ende', typ: 'ferien' },
    
    // Fasching/Rosenmontag
    { datum: '2025-03-03', titel: '🎭 Rosenmontag', typ: 'feiertag' },
    
    // Osterferien Bayern 2025
    { datum: '2025-03-31', titel: '🐰 Osterferien Anfang', typ: 'ferien' },
    { datum: '2025-04-11', titel: '🐰 Osterferien Ende', typ: 'ferien' },
    
    // Ostersonntag/Montag
    { datum: '2025-04-20', titel: '🐣 Ostersonntag', typ: 'feiertag' },
    { datum: '2025-04-21', titel: '🐣 Ostermontag', typ: 'feiertag' },
    
    // Tag der Arbeit
    { datum: '2025-05-01', titel: '✊ Tag der Arbeit', typ: 'feiertag' },
    
    // Himmelfahrt
    { datum: '2025-05-29', titel: '☁️ Christi Himmelfahrt', typ: 'feiertag' },
    
    // Pfingstferien Bayern 2025
    { datum: '2025-05-26', titel: '🌸 Pfingstferien Anfang', typ: 'ferien' },
    { datum: '2025-05-30', titel: '🌸 Pfingstferien Ende', typ: 'ferien' },
    
    // Pfingsten
    { datum: '2025-06-08', titel: '🕊️ Pfingsten', typ: 'feiertag' },
    { datum: '2025-06-09', titel: '🕊️ Pfingstmontag', typ: 'feiertag' },
    
    // Fronleichnam
    { datum: '2025-06-19', titel: '⛪ Fronleichnam', typ: 'feiertag' },
    
    // Sommerferien Bayern 2025
    { datum: '2025-07-30', titel: '☀️ Sommerferien Anfang', typ: 'ferien' },
    { datum: '2025-09-15', titel: '☀️ Sommerferien Ende', typ: 'ferien' },
    
    // Augsburger Friedensfest
    { datum: '2025-08-08', titel: '🕊️ Augsburger Friedensfest', typ: 'feiertag' },
    
    // Maria Himmelfahrt
    { datum: '2025-08-15', titel: '👼 Maria Himmelfahrt', typ: 'feiertag' },
    
    // Tag der Deutschen Einheit
    { datum: '2025-10-03', titel: '🇩🇪 Tag der Einheit', typ: 'feiertag' },
    
    // Herbstferien Bayern 2025
    { datum: '2025-10-27', titel: '🍂 Herbstferien Anfang', typ: 'ferien' },
    { datum: '2025-11-01', titel: '🍂 Herbstferien Ende', typ: 'ferien' },
    
    // Allerheiligen
    { datum: '2025-11-01', titel: '🪦 Allerheiligen', typ: 'feiertag' },
    
    // Weihnachtsferien Bayern 2024/2025
    { datum: '2025-12-22', titel: '🎄 Weihnachtsferien Anfang', typ: 'ferien' },
    { datum: '2026-01-10', titel: '🎄 Weihnachtsferien Ende', typ: 'ferien' },
    
    // Weihnachten
    { datum: '2025-12-25', titel: '🎄 Weihnachtstag', typ: 'feiertag' },
    { datum: '2025-12-26', titel: '🎄 Weihnachtstag II', typ: 'feiertag' },
    { datum: '2025-12-31', titel: '🎆 Silvester', typ: 'feiertag' },
];

let currentCalendarDate = new Date();
let selectedCalendarDate = null;
let notesChartInstance = null;

// ===== ACHIEVEMENTS DEFINITIONS =====
const achievementsData = [
    {
        id: 1,
        icon: '⭐',
        title: 'Fleißig',
        description: '5 Noten eingetragen',
        unlocked: false
    },
    {
        id: 2,
        icon: '🎯',
        title: 'Perfektionist',
        description: 'Eine Note 1.0 erreicht',
        unlocked: false
    },
    {
        id: 3,
        icon: '📚',
        title: 'Gelehrter',
        description: '10 Noten eingetragen',
        unlocked: false
    },
    {
        id: 4,
        icon: '🏆',
        title: 'Durchschnittler',
        description: 'Durchschnittsnote unter 2.5',
        unlocked: false
    },
    {
        id: 5,
        icon: '📝',
        title: 'Notiz-Experte',
        description: '5 Notizen erstellt',
        unlocked: false
    },
    {
        id: 6,
        icon: '🚀',
        title: 'Lerntag-Aktivierer',
        description: 'Lerntag 3x aktiviert',
        unlocked: false
    }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Schulplaner 2025/2026 geladen! 📚');
    
    // Load data from localStorage
    loadData();
    
    // Dark mode setup
    setupDarkMode();
    
    // Tab navigation
    setupTabs();
    
    // Event listeners
    setupEventListeners();
    
    // Calendar setup
    setupCalendar();
    
    // Initial render
    renderCalendar();
    renderNotes();
    renderTermine();
    renderNotizen();
    renderFehlzeiten();
    renderAchievements();
    renderDashboard();
    updateStatistics();
    checkAchievements();
});

// ===== DARK MODE =====
function setupDarkMode() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    if (!darkModeBtn) return;
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️';
    }
    
    darkModeBtn.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark-mode');
        const isDarkNow = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkNow);
        darkModeBtn.textContent = isDarkNow ? '☀️' : '🌙';
    });
}

// ===== TAB NAVIGATION =====
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active to clicked button and corresponding content
            this.classList.add('active');
            const contentElement = document.getElementById(tabName);
            if (contentElement) {
                contentElement.classList.add('active');
                // Trigger chart update when statistics tab is opened
                if (tabName === 'statistiken') {
                    setTimeout(() => updateChart(), 100);
                }
            }
        });
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Noten
    const addNoteBtn = document.getElementById('addNoteBtn');
    const fachInput = document.getElementById('fachInput');
    if (addNoteBtn) addNoteBtn.addEventListener('click', addNote);
    if (fachInput) fachInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addNote();
    });
    
    // Termine
    const addTerminBtn = document.getElementById('addTerminBtn');
    const terminInput = document.getElementById('terminInput');
    if (addTerminBtn) addTerminBtn.addEventListener('click', addTermin);
    if (terminInput) terminInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTermin();
    });
    
    // Notizen
    const addNotizBtn = document.getElementById('addNotizBtn');
    const notizTitelInput = document.getElementById('notizTitelInput');
    if (addNotizBtn) addNotizBtn.addEventListener('click', addNotiz);
    if (notizTitelInput) notizTitelInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addNotiz();
    });
    
    // Fehlzeiten
    const addFehlzeitBtn = document.getElementById('addFehlzeitBtn');
    if (addFehlzeitBtn) addFehlzeitBtn.addEventListener('click', addFehlzeit);
    
    // Achievements
    const learningDayBtn = document.getElementById('learningDayBtn');
    if (learningDayBtn) learningDayBtn.addEventListener('click', activateLearningDay);
    
    // Clear data
    const clearDataBtn = document.getElementById('clearDataBtn');
    if (clearDataBtn) clearDataBtn.addEventListener('click', clearAllData);
    
    // Dashboard
    const streakBtn = document.getElementById('streakBtn');
    const goalGradeInput = document.getElementById('goalGrade');
    if (streakBtn) streakBtn.addEventListener('click', updateStreak);
    if (goalGradeInput) goalGradeInput.addEventListener('change', (e) => {
        appData.goalGrade = parseFloat(e.target.value) || 2.0;
        saveData();
        renderDashboard();
    });
    
    // Export
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', filterContent);
}

// ===== CALENDAR SETUP =====
function setupCalendar() {
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    
    if (prevMonth) {
        prevMonth.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderCalendar();
        });
    }
    
    if (nextMonth) {
        nextMonth.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderCalendar();
        });
    }
}

// ===== CALENDAR FUNCTIONS =====
function renderCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    
    // Update month/year display
    const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const monthYearEl = document.getElementById('monthYear');
    if (monthYearEl) {
        monthYearEl.textContent = `${monthNames[month]} ${year}`;
    }
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    // Monday = 1, so adjust
    const startDay = (firstDay === 0) ? 6 : firstDay - 1;
    
    const calendarBody = document.getElementById('calendar-body');
    if (!calendarBody) return;
    
    calendarBody.innerHTML = '';
    
    let dayCounter = 1;
    let nextMonthCounter = 1;
    
    for (let week = 0; week < 6; week++) {
        const row = document.createElement('tr');
        
        for (let day = 0; day < 7; day++) {
            const cell = document.createElement('td');
            
            if (week === 0 && day < startDay) {
                // Previous month days
                cell.textContent = daysInPrevMonth - startDay + day + 1;
                cell.classList.add('other-month');
            } else if (dayCounter <= daysInMonth) {
                // Current month days
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
                const today = new Date();
                
                const div = document.createElement('div');
                div.className = 'calendar-day-number';
                div.textContent = dayCounter;
                cell.appendChild(div);
                
                // Check if today
                if (year === today.getFullYear() && month === today.getMonth() && dayCounter === today.getDate()) {
                    cell.classList.add('today');
                }
                
                // Add events for this day
                const dayEvents = appData.termine.filter(t => t.datum.startsWith(dateStr));
                const dayNotes = appData.noten.filter(n => n.datum === dateStr);
                const dayFeiertag = augsburgerFeiertage.find(f => f.datum === dateStr);
                
                if (dayFeiertag) {
                    const feiertag = document.createElement('div');
                    feiertag.className = dayFeiertag.typ === 'ferien' ? 'calendar-day-ferien' : 'calendar-day-feiertag';
                    feiertag.textContent = dayFeiertag.titel;
                    feiertag.title = dayFeiertag.typ === 'ferien' ? 'Ferien' : 'Feiertag';
                    cell.appendChild(feiertag);
                }
                
                if (dayEvents.length > 0 || dayNotes.length > 0) {
                    const eventDiv = document.createElement('div');
                    eventDiv.className = 'calendar-day-event';
                    if (dayEvents.length > 0) {
                        eventDiv.textContent = `📅 ${dayEvents.length}`;
                    } else if (dayNotes.length > 0) {
                        eventDiv.textContent = `📊 ${dayNotes.length}`;
                    }
                    cell.appendChild(eventDiv);
                }
                
                // Click handler
                cell.style.cursor = 'pointer';
                cell.addEventListener('click', () => {
                    selectedCalendarDate = dateStr;
                    document.querySelectorAll('.calendar-table td').forEach(c => c.classList.remove('selected'));
                    cell.classList.add('selected');
                    showCalendarEvents(dateStr);
                });
                
                dayCounter++;
            } else {
                // Next month days
                cell.textContent = nextMonthCounter;
                cell.classList.add('other-month');
                nextMonthCounter++;
            }
            
            row.appendChild(cell);
        }
        
        calendarBody.appendChild(row);
        
        if (dayCounter > daysInMonth) break;
    }
}

function showCalendarEvents(dateStr) {
    const eventsDiv = document.getElementById('calendar-events');
    const selectedDateDisplay = document.getElementById('selectedDateDisplay');
    
    if (!eventsDiv) return;
    
    // Update the selected date display field
    const date = new Date(dateStr);
    const dateStr2 = date.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    if (selectedDateDisplay) {
        selectedDateDisplay.value = dateStr2;
    }
    
    const termine = appData.termine.filter(t => t.datum.startsWith(dateStr));
    const noten = appData.noten.filter(n => n.datum === dateStr);
    
    let html = `<strong>${dateStr2}</strong>`;
    
    if (termine.length === 0 && noten.length === 0) {
        html += '<div class="calendar-events-empty">Keine Ereignisse an diesem Tag</div>';
    } else {
        // Show termine
        termine.forEach(t => {
            const time = t.datum.substring(11, 16);
            const typEmoji = {
                'prüfung': '📋',
                'hausaufgabe': '📝',
                'projekt': '🎯',
                'sonstiges': '📌'
            }[t.typ] || '📌';
            
            html += `
                <div class="calendar-event-item">
                    <div class="calendar-event-title">${typEmoji} ${t.titel}</div>
                    <div class="calendar-event-type">🕐 ${time} Uhr ${t.fertig ? '✅ Fertig' : '⏳ Offen'}</div>
                </div>
            `;
        });
        
        // Show noten
        noten.forEach(n => {
            const borderColor = n.note <= 2.0 ? '#27ae60' : n.note <= 3.5 ? '#f39c12' : '#e74c3c';
            html += `
                <div class="calendar-event-item" style="border-left-color: ${borderColor};">
                    <div class="calendar-event-title">📊 ${n.fach}</div>
                    <div class="calendar-event-type" style="color: ${borderColor}; font-weight: bold; font-size: 1rem;">Note: ${n.note.toFixed(1)}</div>
                </div>
            `;
        });
    }
    
    eventsDiv.innerHTML = html;
}

// ===== NOTEN FUNCTIONS =====
function addNote() {
    const fachInput = document.getElementById('fachInput');
    const noteInput = document.getElementById('noteInput');
    const datumInput = document.getElementById('datumInput');
    
    if (!fachInput || !noteInput || !datumInput) return;
    
    const fach = fachInput.value.trim();
    const note = parseFloat(noteInput.value);
    const datum = datumInput.value;
    
    if (!fach || isNaN(note) || !datum || note < 1 || note > 6) {
        alert('⚠️ Bitte alle Felder korrekt ausfüllen! Note muss zwischen 1 und 6 liegen.');
        return;
    }
    
    appData.noten.push({
        id: Date.now(),
        fach: fach,
        note: note,
        datum: datum
    });
    
    // Clear inputs
    fachInput.value = '';
    noteInput.value = '';
    datumInput.value = '';
    
    saveData();
    renderNotes();
    renderCalendar();
    updateStatistics();
    renderDashboard();
    checkAchievements();
}

function deleteNote(id) {
    appData.noten = appData.noten.filter(n => n.id !== id);
    saveData();
    renderNotes();
    renderCalendar();
    updateStatistics();
    renderDashboard();
}

function renderNotes() {
    const list = document.getElementById('noten-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (appData.noten.length === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Noch keine Noten eingetragen 📝</p>';
        return;
    }
    
    // Sort by date (newest first)
    const sorted = [...appData.noten].sort((a, b) => new Date(b.datum) - new Date(a.datum));
    
    sorted.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-item';
        
        // Color code based on grade
        let borderColor = '#3498db'; // default blue
        if (note.note <= 2.0) borderColor = '#27ae60'; // green
        else if (note.note <= 3.5) borderColor = '#f39c12'; // orange
        else borderColor = '#e74c3c'; // red
        
        noteDiv.style.borderLeftColor = borderColor;
        
        const date = new Date(note.datum).toLocaleDateString('de-DE');
        
        noteDiv.innerHTML = `
            <div class="item-content">
                <strong>${note.fach}</strong>
                <p style="font-size: 1.2rem; color: ${borderColor}; font-weight: bold;">${note.note.toFixed(1)}</p>
                <p class="meta">📅 ${date}</p>
            </div>
            <div class="item-actions">
                <button class="btn-delete" onclick="deleteNote(${note.id})">❌ Löschen</button>
            </div>
        `;
        
        list.appendChild(noteDiv);
    });
}

// ===== TERMINE FUNCTIONS =====
function addTermin() {
    const terminInput = document.getElementById('terminInput');
    const selectedDateDisplay = document.getElementById('selectedDateDisplay');
    const terminTimeInput = document.getElementById('terminTimeInput');
    const terminTypInput = document.getElementById('terminTypInput');
    
    if (!terminInput || !selectedDateDisplay || !terminTypInput) return;
    
    const titel = terminInput.value.trim();
    const selectedDate = selectedDateDisplay.value;
    const time = terminTimeInput.value || '12:00';
    const typ = terminTypInput.value;
    
    if (!titel || !selectedDate) {
        alert('⚠️ Bitte einen Termintitel eingeben und ein Datum im Kalender auswählen!');
        return;
    }
    
    // Combine date and time
    const datum = selectedDate + 'T' + time;
    
    appData.termine.push({
        id: Date.now(),
        titel: titel,
        datum: datum,
        typ: typ,
        fertig: false
    });
    
    // Clear inputs
    terminInput.value = '';
    terminTimeInput.value = '';
    selectedDateDisplay.value = '';
    selectedCalendarDate = null;
    
    saveData();
    renderTermine();
    renderCalendar();
    renderDashboard();
    
    alert('✅ Termin gespeichert!');
}

function deleteTermin(id) {
    appData.termine = appData.termine.filter(t => t.id !== id);
    saveData();
    renderTermine();
    renderCalendar();
    renderDashboard();
}

function toggleTermin(id) {
    const termin = appData.termine.find(t => t.id === id);
    if (termin) {
        termin.fertig = !termin.fertig;
        saveData();
        renderTermine();
        renderDashboard();
    }
}

function renderTermine() {
    const list = document.getElementById('termine-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (appData.termine.length === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine Termine eingetragen 📅</p>';
        return;
    }
    
    // Sort by date
    const sorted = [...appData.termine].sort((a, b) => new Date(a.datum) - new Date(b.datum));
    
    sorted.forEach(termin => {
        const terminDiv = document.createElement('div');
        terminDiv.className = 'termin-item';
        
        if (termin.fertig) {
            terminDiv.style.opacity = '0.6';
        }
        
        const date = new Date(termin.datum).toLocaleDateString('de-DE', {
            weekday: 'short',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const typEmoji = {
            'prüfung': '📋',
            'hausaufgabe': '📝',
            'projekt': '🎯',
            'sonstiges': '📌'
        }[termin.typ] || '📌';
        
        terminDiv.innerHTML = `
            <div class="item-content">
                <strong>${typEmoji} ${termin.titel}</strong>
                <p class="meta">📅 ${date}</p>
            </div>
            <div class="item-actions">
                <button class="btn-delete" onclick="toggleTermin(${termin.id})">
                    ${termin.fertig ? '↩️ Wiederherstellen' : '✅ Fertig'}
                </button>
                <button class="btn-delete" onclick="deleteTermin(${termin.id})">❌ Löschen</button>
            </div>
        `;
        
        list.appendChild(terminDiv);
    });
}

// ===== NOTIZEN FUNCTIONS =====
function addNotiz() {
    const notizTitelInput = document.getElementById('notizTitelInput');
    const notizTextInput = document.getElementById('notizTextInput');
    
    if (!notizTitelInput || !notizTextInput) return;
    
    const titel = notizTitelInput.value.trim();
    const text = notizTextInput.value.trim();
    
    if (!titel || !text) {
        alert('⚠️ Bitte Titel und Text ausfüllen!');
        return;
    }
    
    appData.notizen.push({
        id: Date.now(),
        titel: titel,
        text: text,
        datum: new Date().toLocaleDateString('de-DE')
    });
    
    // Clear inputs
    notizTitelInput.value = '';
    notizTextInput.value = '';
    
    saveData();
    renderNotizen();
    checkAchievements();
}

function deleteNotiz(id) {
    appData.notizen = appData.notizen.filter(n => n.id !== id);
    saveData();
    renderNotizen();
}

function renderNotizen() {
    const list = document.getElementById('notizen-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (appData.notizen.length === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine Notizen erstellt 📝</p>';
        return;
    }
    
    // Sort by date (newest first)
    const sorted = [...appData.notizen].sort((a, b) => new Date(b.datum) - new Date(a.datum));
    
    sorted.forEach(notiz => {
        const notizDiv = document.createElement('div');
        notizDiv.className = 'notiz-item';
        
        notizDiv.innerHTML = `
            <div class="item-content">
                <strong>${notiz.titel}</strong>
                <p>${notiz.text}</p>
                <p class="meta">📅 ${notiz.datum}</p>
            </div>
            <div class="item-actions">
                <button class="btn-delete" onclick="deleteNotiz(${notiz.id})">❌ Löschen</button>
            </div>
        `;
        
        list.appendChild(notizDiv);
    });
}

// ===== FEHLZEITEN FUNCTIONS =====
function addFehlzeit() {
    const fehlzeitDatumInput = document.getElementById('fehlzeitDatumInput');
    const fehlzeitStundenInput = document.getElementById('fehlzeitStundenInput');
    const fehlzeitArtInput = document.getElementById('fehlzeitArtInput');
    
    if (!fehlzeitDatumInput || !fehlzeitStundenInput || !fehlzeitArtInput) return;
    
    const datum = fehlzeitDatumInput.value;
    const stunden = parseFloat(fehlzeitStundenInput.value);
    const art = fehlzeitArtInput.value;
    
    if (!datum || isNaN(stunden) || stunden <= 0) {
        alert('⚠️ Bitte alle Felder korrekt ausfüllen!');
        return;
    }
    
    appData.fehlzeiten.push({
        id: Date.now(),
        datum: datum,
        stunden: stunden,
        art: art
    });
    
    // Clear inputs
    fehlzeitDatumInput.value = '';
    fehlzeitStundenInput.value = '';
    
    saveData();
    renderFehlzeiten();
    renderDashboard();
}

function deleteFehlzeit(id) {
    appData.fehlzeiten = appData.fehlzeiten.filter(f => f.id !== id);
    saveData();
    renderFehlzeiten();
    renderDashboard();
}

function renderFehlzeiten() {
    const list = document.getElementById('fehlzeiten-list');
    const summary = document.getElementById('fehlzeiten-summary');
    
    if (!list) return;
    
    list.innerHTML = '';
    
    // Update summary
    const totalStunden = appData.fehlzeiten.reduce((sum, f) => sum + f.stunden, 0);
    if (summary) {
        summary.innerHTML = `Gesamtfehlzeiten: <strong>${totalStunden.toFixed(1)} Stunden</strong>`;
    }
    
    if (appData.fehlzeiten.length === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine Fehlzeiten eingetragen ✅</p>';
        return;
    }
    
    // Sort by date (newest first)
    const sorted = [...appData.fehlzeiten].sort((a, b) => new Date(b.datum) - new Date(a.datum));
    
    const artEmoji = {
        'krank': '🤒',
        'zahn': '🦷',
        'arzt': '🏥',
        'urlaub': '🏖️',
        'sonstiges': '❓'
    };
    
    sorted.forEach(fehlzeit => {
        const fehlzeitDiv = document.createElement('div');
        fehlzeitDiv.className = 'fehlzeit-item';
        
        const date = new Date(fehlzeit.datum).toLocaleDateString('de-DE');
        const emoji = artEmoji[fehlzeit.art] || '❓';
        
        fehlzeitDiv.innerHTML = `
            <div class="item-content">
                <strong>${emoji} ${fehlzeit.art.charAt(0).toUpperCase() + fehlzeit.art.slice(1)}</strong>
                <p>${fehlzeit.stunden.toFixed(1)} Stunden</p>
                <p class="meta">📅 ${date}</p>
            </div>
            <div class="item-actions">
                <button class="btn-delete" onclick="deleteFehlzeit(${fehlzeit.id})">❌ Löschen</button>
            </div>
        `;
        
        list.appendChild(fehlzeitDiv);
    });
}

// ===== STATISTIKEN =====
function updateStatistics() {
    const avgGradeEl = document.getElementById('avgGrade');
    const bestGradeEl = document.getElementById('bestGrade');
    const worstGradeEl = document.getElementById('worstGrade');
    const totalGradesEl = document.getElementById('totalGrades');
    
    if (!avgGradeEl || !bestGradeEl || !worstGradeEl || !totalGradesEl) return;
    
    if (appData.noten.length === 0) {
        avgGradeEl.textContent = '-';
        bestGradeEl.textContent = '-';
        worstGradeEl.textContent = '-';
        totalGradesEl.textContent = '0';
        return;
    }
    
    const grades = appData.noten.map(n => n.note);
    const avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    const best = Math.min(...grades).toFixed(1);
    const worst = Math.max(...grades).toFixed(1);
    
    avgGradeEl.textContent = avg;
    bestGradeEl.textContent = best;
    worstGradeEl.textContent = worst;
    totalGradesEl.textContent = grades.length;
    
    // Update chart
    updateChart();
}

function updateChart() {
    const ctx = document.getElementById('notesChart');
    if (!ctx) return;
    
    // Group grades by subject
    const subjects = {};
    appData.noten.forEach(note => {
        if (!subjects[note.fach]) {
            subjects[note.fach] = [];
        }
        subjects[note.fach].push(note.note);
    });
    
    // Calculate averages
    const labels = Object.keys(subjects);
    const averages = labels.map(subject => {
        const grades = subjects[subject];
        return (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    });
    
    // Destroy existing chart if it exists
    if (window.notesChartInstance) {
        window.notesChartInstance.destroy();
    }
    
    // Don't create empty chart
    if (labels.length === 0) {
        ctx.parentElement.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">Keine Noten vorhanden</p>';
        return;
    }
    
    // Create new chart
    try {
        window.notesChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Durchschnittsnote',
                    data: averages,
                    backgroundColor: '#3498db',
                    borderColor: '#2980b9',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-primary')
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 6,
                        ticks: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary')
                        },
                        grid: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--border-color')
                        }
                    },
                    x: {
                        ticks: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary')
                        },
                        grid: {
                            color: getComputedStyle(document.documentElement).getPropertyValue('--border-color')
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Chart.js error:', error);
    }
}

// ===== ACHIEVEMENTS =====
function checkAchievements() {
    achievementsData[0].unlocked = appData.noten.length >= 5;
    achievementsData[1].unlocked = appData.noten.some(n => n.note === 1.0);
    achievementsData[2].unlocked = appData.noten.length >= 10;
    
    if (appData.noten.length > 0) {
        const avg = appData.noten.reduce((a, b) => a + b.note, 0) / appData.noten.length;
        achievementsData[3].unlocked = avg < 2.5;
    }
    
    achievementsData[4].unlocked = appData.notizen.length >= 5;
    
    const learningDayCount = parseInt(localStorage.getItem('learningDayCount') || '0');
    achievementsData[5].unlocked = learningDayCount >= 3;
    
    renderAchievements();
}

function renderAchievements() {
    const grid = document.getElementById('achievements-list');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    achievementsData.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.className = 'achievement';
        
        if (achievement.unlocked) {
            achievementDiv.classList.add('unlocked');
        }
        
        achievementDiv.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-desc">${achievement.description}</div>
        `;
        
        achievementDiv.title = achievement.unlocked ? 'Freigeschaltet! ✅' : 'Noch nicht freigeschaltet';
        
        grid.appendChild(achievementDiv);
    });
}

function activateLearningDay() {
    appData.learningDayActive = !appData.learningDayActive;
    
    if (appData.learningDayActive) {
        // Increment learning day counter
        let count = parseInt(localStorage.getItem('learningDayCount') || '0');
        count++;
        localStorage.setItem('learningDayCount', count);
        
        const status = document.getElementById('learning-day-status');
        if (status) {
            status.textContent = `🚀 Lerntag aktiviert! Du hast ${count} Lerntage absolviert!`;
            status.classList.add('show');
        }
        
        const btn = document.getElementById('learningDayBtn');
        if (btn) {
            btn.textContent = '⏹️ Lerntag beenden';
        }
        
        // Auto-deactivate after 1 hour
        setTimeout(() => {
            appData.learningDayActive = false;
            if (status) status.classList.remove('show');
            if (btn) btn.textContent = '🚀 Lerntag aktivieren';
        }, 3600000);
    } else {
        const status = document.getElementById('learning-day-status');
        if (status) status.classList.remove('show');
        
        const btn = document.getElementById('learningDayBtn');
        if (btn) btn.textContent = '🚀 Lerntag aktivieren';
    }
    
    saveData();
    checkAchievements();
}

// ===== DATA PERSISTENCE =====
function saveData() {
    try {
        localStorage.setItem('appData', JSON.stringify(appData));
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadData() {
    try {
        const saved = localStorage.getItem('appData');
        if (saved) {
            Object.assign(appData, JSON.parse(saved));
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function clearAllData() {
    if (confirm('⚠️ Wirklich ALLE Daten löschen? Dies kann nicht rückgängig gemacht werden!')) {
        appData.noten = [];
        appData.termine = [];
        appData.notizen = [];
        appData.fehlzeiten = [];
        appData.learningDayActive = false;
        appData.streak = 0;
        appData.lastStreakDate = null;
        localStorage.setItem('learningDayCount', '0');
        
        saveData();
        
        renderNotes();
        renderTermine();
        renderNotizen();
        renderFehlzeiten();
        renderAchievements();
        updateStatistics();
        checkAchievements();
        renderDashboard();
        
        alert('✅ Alle Daten wurden gelöscht.');
    }
}

// ===== DASHBOARD FUNCTIONS =====

function renderDashboard() {
    // Update Header Stats
    const headerAvg = document.getElementById('headerAvg');
    const dashAvg = document.getElementById('dashAvg');
    const headerTasks = document.getElementById('headerTasks');
    const dashNotes = document.getElementById('dashNotes');
    const dashTerms = document.getElementById('dashTerms');
    const dashAbsent = document.getElementById('dashAbsent');
    
    if (appData.noten.length > 0) {
        const avg = (appData.noten.reduce((a, b) => a + b.note, 0) / appData.noten.length).toFixed(1);
        if (headerAvg) headerAvg.textContent = avg;
        if (dashAvg) dashAvg.textContent = avg;
    } else {
        if (headerAvg) headerAvg.textContent = '-';
        if (dashAvg) dashAvg.textContent = '-';
    }
    
    const openTasks = appData.termine.filter(t => !t.fertig).length;
    if (headerTasks) headerTasks.textContent = openTasks;
    if (dashNotes) dashNotes.textContent = appData.noten.length;
    if (dashTerms) dashTerms.textContent = appData.termine.length;
    
    const totalAbsent = appData.fehlzeiten.reduce((sum, f) => sum + f.stunden, 0).toFixed(1);
    if (dashAbsent) dashAbsent.textContent = totalAbsent + 'h';
    
    // Upcoming Events
    const upcomingDiv = document.getElementById('dashboard-upcoming');
    if (upcomingDiv) {
        upcomingDiv.innerHTML = '';
        
        const allEvents = [
            ...appData.termine.map(t => ({ ...t, type: 'termin' })),
            ...appData.noten.map(n => ({ ...n, type: 'note' }))
        ].sort((a, b) => new Date(a.datum) - new Date(b.datum)).slice(0, 5);
        
        if (allEvents.length === 0) {
            upcomingDiv.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine anstehenden Ereignisse</p>';
        } else {
            allEvents.forEach(event => {
                const div = document.createElement('div');
                div.className = 'dashboard-event';
                
                if (event.type === 'termin') {
                    const date = new Date(event.datum).toLocaleDateString('de-DE');
                    div.innerHTML = `
                        <div class="dashboard-event-title">📅 ${event.titel}</div>
                        <div class="dashboard-event-time">${date}</div>
                    `;
                } else {
                    const date = new Date(event.datum).toLocaleDateString('de-DE');
                    div.innerHTML = `
                        <div class="dashboard-event-title">📊 ${event.fach}: ${event.note}</div>
                        <div class="dashboard-event-time">${date}</div>
                    `;
                }
                
                upcomingDiv.appendChild(div);
            });
        }
    }
    
    // Goal Progress
    const goalProgress = document.getElementById('goalProgress');
    if (goalProgress && appData.noten.length > 0) {
        const avg = appData.noten.reduce((a, b) => a + b.note, 0) / appData.noten.length;
        const progressPercentage = Math.max(0, Math.min(100, ((6 - avg) / (6 - appData.goalGrade) * 100)));
        goalProgress.style.width = progressPercentage + '%';
    }
    
    // Streak
    updateStreakDisplay();
}

function updateStreak() {
    const today = new Date().toLocaleDateString('de-DE');
    const lastDate = appData.lastStreakDate;
    
    if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toLocaleDateString('de-DE');
        
        if (lastDate === yesterdayStr || !lastDate) {
            appData.streak = (appData.streak || 0) + 1;
        } else {
            appData.streak = 1;
        }
        
        appData.lastStreakDate = today;
        saveData();
        
        const streakBtn = document.getElementById('streakBtn');
        if (streakBtn) {
            streakBtn.textContent = '✅ Heute schon gelernt!';
            streakBtn.disabled = true;
            
            setTimeout(() => {
                streakBtn.textContent = '✅ Heute gelernt!';
                streakBtn.disabled = false;
            }, 2000);
        }
    }
    
    updateStreakDisplay();
    checkAchievements();
}

function updateStreakDisplay() {
    const streakDisplay = document.getElementById('streak-counter');
    if (streakDisplay) {
        const streak = appData.streak || 0;
        streakDisplay.innerHTML = `
            <p class="streak-number">${streak} 🔥</p>
            <p class="streak-text">Tage in Folge</p>
        `;
    }
}

// ===== DATA EXPORT =====
function exportData() {
    const data = {
        noten: appData.noten,
        termine: appData.termine,
        notizen: appData.notizen,
        fehlzeiten: appData.fehlzeiten,
        exportDate: new Date().toLocaleString('de-DE'),
        statistics: {
            gesamt_noten: appData.noten.length,
            gesamt_termine: appData.termine.length,
            gesamt_notizen: appData.notizen.length,
            gesamt_fehlzeiten: appData.fehlzeiten.reduce((sum, f) => sum + f.stunden, 0),
            durchschnittsnote: appData.noten.length > 0 ? 
                (appData.noten.reduce((a, b) => a + b.note, 0) / appData.noten.length).toFixed(2) : 0,
            streak: appData.streak
        }
    };
    
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `schulplaner-export-${new Date().getTime()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    alert('✅ Daten exportiert!');
}

// ===== SEARCH FUNCTIONALITY =====
function filterContent() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchText = searchInput.value.toLowerCase();
    
    if (!searchText) {
        renderNotes();
        renderTermine();
        renderNotizen();
        return;
    }
    
    // Filter Noten
    const notesFiltered = appData.noten.filter(n => 
        n.fach.toLowerCase().includes(searchText)
    );
    
    const notesList = document.getElementById('noten-list');
    if (notesList) {
        notesList.innerHTML = '';
        if (notesFiltered.length === 0) {
            notesList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine Noten gefunden</p>';
        } else {
            notesFiltered.forEach(note => {
                const noteDiv = document.createElement('div');
                noteDiv.className = 'note-item';
                let borderColor = '#3498db';
                if (note.note <= 2.0) borderColor = '#27ae60';
                else if (note.note <= 3.5) borderColor = '#f39c12';
                else borderColor = '#e74c3c';
                noteDiv.style.borderLeftColor = borderColor;
                const date = new Date(note.datum).toLocaleDateString('de-DE');
                noteDiv.innerHTML = `
                    <div class="item-content">
                        <strong>${note.fach}</strong>
                        <p style="font-size: 1.2rem; color: ${borderColor}; font-weight: bold;">${note.note.toFixed(1)}</p>
                        <p class="meta">📅 ${date}</p>
                    </div>
                    <div class="item-actions">
                        <button class="btn-delete" onclick="deleteNote(${note.id})">❌ Löschen</button>
                    </div>
                `;
                notesList.appendChild(noteDiv);
            });
        }
    }
    
    // Filter Termine
    const termsFiltered = appData.termine.filter(t => 
        t.titel.toLowerCase().includes(searchText)
    );
    
    const termList = document.getElementById('termine-list');
    if (termList) {
        termList.innerHTML = '';
        if (termsFiltered.length === 0) {
            termList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine Termine gefunden</p>';
        } else {
            termsFiltered.forEach(termin => {
                const terminDiv = document.createElement('div');
                terminDiv.className = 'termin-item';
                if (termin.fertig) {
                    terminDiv.style.opacity = '0.6';
                }
                const date = new Date(termin.datum).toLocaleDateString('de-DE', {
                    weekday: 'short',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                const typEmoji = {
                    'prüfung': '📋',
                    'hausaufgabe': '📝',
                    'projekt': '🎯',
                    'sonstiges': '📌'
                }[termin.typ] || '📌';
                terminDiv.innerHTML = `
                    <div class="item-content">
                        <strong>${typEmoji} ${termin.titel}</strong>
                        <p class="meta">📅 ${date}</p>
                    </div>
                    <div class="item-actions">
                        <button class="btn-delete" onclick="toggleTermin(${termin.id})">
                            ${termin.fertig ? '↩️ Wiederherstellen' : '✅ Fertig'}
                        </button>
                        <button class="btn-delete" onclick="deleteTermin(${termin.id})">❌ Löschen</button>
                    </div>
                `;
                termList.appendChild(terminDiv);
            });
        }
    }
    
    // Filter Notizen
    const notizesFiltered = appData.notizen.filter(n => 
        n.titel.toLowerCase().includes(searchText) || n.text.toLowerCase().includes(searchText)
    );
    
    const notizList = document.getElementById('notizen-list');
    if (notizList) {
        notizList.innerHTML = '';
        if (notizesFiltered.length === 0) {
            notizList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Keine Notizen gefunden</p>';
        } else {
            notizesFiltered.forEach(notiz => {
                const notizDiv = document.createElement('div');
                notizDiv.className = 'notiz-item';
                notizDiv.innerHTML = `
                    <div class="item-content">
                        <strong>${notiz.titel}</strong>
                        <p>${notiz.text}</p>
                        <p class="meta">📅 ${notiz.datum}</p>
                    </div>
                    <div class="item-actions">
                        <button class="btn-delete" onclick="deleteNotiz(${notiz.id})">❌ Löschen</button>
                    </div>
                `;
                notizList.appendChild(notizDiv);
            });
        }
    }
}

// ============ CALCULATOR ============
let calcExpression = '';

function addToDisplay(value) {
    const display = document.getElementById('calcDisplay');
    if (value === '.') {
        if (calcExpression.split(/[\+\-\*\/]/).pop().includes('.')) return;
    }
    calcExpression += value;
    display.value = calcExpression;
}

function clearDisplay() {
    calcExpression = '';
    document.getElementById('calcDisplay').value = '';
}

function calculateResult() {
    const display = document.getElementById('calcDisplay');
    try {
        // Ersetze ^ mit **
        let expression = calcExpression.replace(/\^/g, '**');
        const result = eval(expression);
        display.value = result.toFixed(6);
        calcExpression = String(result.toFixed(6));
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function backspace() {
    const display = document.getElementById('calcDisplay');
    if (calcExpression.length > 0) {
        calcExpression = calcExpression.slice(0, -1);
        display.value = calcExpression || '0';
    }
}

function addPi() {
    const display = document.getElementById('calcDisplay');
    calcExpression += Math.PI.toFixed(4);
    display.value = calcExpression;
}

function calculateSquareRoot() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = Math.sqrt(eval(calcExpression));
        display.value = result.toFixed(6);
        calcExpression = String(result.toFixed(6));
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function calculateSquare() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = Math.pow(eval(calcExpression), 2);
        display.value = result.toFixed(6);
        calcExpression = String(result.toFixed(6));
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function calculatePower() {
    const display = document.getElementById('calcDisplay');
    calcExpression += '^';
    display.value = calcExpression;
}

function calculateSin() {
    const display = document.getElementById('calcDisplay');
    try {
        // Konvertiere zu Radiant wenn nötig (Standard in JavaScript)
        const result = Math.sin(eval(calcExpression) * Math.PI / 180);
        display.value = result.toFixed(6);
        calcExpression = String(result.toFixed(6));
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function calculateCos() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = Math.cos(eval(calcExpression) * Math.PI / 180);
        display.value = result.toFixed(6);
        calcExpression = String(result.toFixed(6));
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function calculateTan() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = Math.tan(eval(calcExpression) * Math.PI / 180);
        display.value = result.toFixed(6);
        calcExpression = String(result.toFixed(6));
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function calculatePercent() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = eval(calcExpression) / 100;
        display.value = result;
        calcExpression = String(result);
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

function toggleSign() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = eval(calcExpression) * -1;
        display.value = result;
        calcExpression = String(result);
    } catch (e) {
        display.value = 'Fehler';
        calcExpression = '';
    }
}

// ===== WINDOW LOAD EVENT =====
window.addEventListener('load', function() {
    updateStatistics();
    checkAchievements();
    renderDashboard();
    updateLernzeitDisplay();
});
