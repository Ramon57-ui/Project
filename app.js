// ===== APP DATA & STATE =====
const appData = {
    noten: [],
    termine: [],
    notizen: [],
    fehlzeiten: [],
    achievements: [],
    pruefungen: [],
    learningDayActive: false,
    streak: 0,
    lastStreakDate: null,
    goalGrade: 2.0,
    // XP & LEVEL SYSTEM
    xp: 0,
    level: 1,
    totalXpEarned: 0,
    learningDaysCount: 0,
    notificationsEnabled: false,
    // SUBJECT GOALS
    subjectGoals: []
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
        unlocked: false,
        xpReward: 50
    },
    {
        id: 2,
        icon: '🎯',
        title: 'Perfektionist',
        description: 'Eine Note 1.0 erreicht',
        unlocked: false,
        xpReward: 100
    },
    {
        id: 3,
        icon: '📚',
        title: 'Gelehrter',
        description: '10 Noten eingetragen',
        unlocked: false,
        xpReward: 100
    },
    {
        id: 4,
        icon: '🏆',
        title: 'Durchschnittler',
        description: 'Durchschnittsnote unter 2.5',
        unlocked: false,
        xpReward: 150
    },
    {
        id: 5,
        icon: '📝',
        title: 'Notiz-Experte',
        description: '5 Notizen erstellt',
        unlocked: false,
        xpReward: 50
    },
    {
        id: 6,
        icon: '🚀',
        title: 'Lerntag-Aktivierer',
        description: 'Lerntag 3x aktiviert',
        unlocked: false,
        xpReward: 75
    },
    {
        id: 7,
        icon: '🔥',
        title: 'Strähnen-König',
        description: '7 Tage Lernsträhne',
        unlocked: false,
        xpReward: 200
    },
    {
        id: 8,
        icon: '📅',
        title: 'Terminator',
        description: '10 Termine erstellt',
        unlocked: false,
        xpReward: 75
    },
    {
        id: 9,
        icon: '🎓',
        title: 'Prüfungs-Profi',
        description: '5 Prüfungen eingetragen',
        unlocked: false,
        xpReward: 100
    },
    {
        id: 10,
        icon: '💪',
        title: 'Level 5 Erreicht',
        description: 'Erreiche Level 5',
        unlocked: false,
        xpReward: 250
    },
    {
        id: 11,
        icon: '🌟',
        title: 'Level 10 Erreicht',
        description: 'Erreiche Level 10',
        unlocked: false,
        xpReward: 500
    },
    {
        id: 12,
        icon: '👑',
        title: 'Level-Meister',
        description: 'Erreiche Level 15',
        unlocked: false,
        xpReward: 1000
    }
];

// ===== LEVEL SYSTEM DEFINITIONS =====
const levelTitles = {
    1: 'Schulanfänger',
    2: 'Lernender',
    3: 'Fleißiger Schüler',
    4: 'Aufsteiger',
    5: 'Wissenssammler',
    6: 'Bücherwurm',
    7: 'Strebsamer',
    8: 'Gelehrter',
    9: 'Akademiker',
    10: 'Experte',
    11: 'Meister',
    12: 'Professor',
    13: 'Großmeister',
    14: 'Legende',
    15: 'Champion',
    16: 'Ultra-Champion',
    17: 'Mythisch',
    18: 'Göttlich',
    19: 'Unsterblich',
    20: 'Omniszient'
};

// XP needed for each level (cumulative)
function getXPForLevel(level) {
    if (level <= 1) return 0;
    // Exponential growth: Level 2 = 100, Level 3 = 250, Level 4 = 450, etc.
    return Math.floor(50 * Math.pow(level, 2));
}

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
    
    // Level System setup
    updateLevelDisplay();
    
    // Notifications setup
    setupNotifications();
    
    // Initial render
    renderCalendar();
    renderNotes();
    renderTermine();
    renderNotizen();
    renderFehlzeiten();
    renderAchievements();
    renderDashboard();
    renderSubjectGoals();
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
    
    // Subject Goals
    const addSubjectGoalBtn = document.getElementById('addSubjectGoalBtn');
    const subjectGoalFach = document.getElementById('subjectGoalFach');
    if (addSubjectGoalBtn) addSubjectGoalBtn.addEventListener('click', addSubjectGoal);
    if (subjectGoalFach) subjectGoalFach.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addSubjectGoal();
    });
}

// ===== CALENDAR SETUP - PREMIUM EDITION =====
function setupCalendar() {
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    
    if (prevMonth) {
        prevMonth.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderCalendarPremium();
        });
    }
    
    if (nextMonth) {
        nextMonth.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderCalendarPremium();
        });
    }
}

// ===== PREMIUM CALENDAR FUNCTIONS =====
function renderCalendarPremium() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();
    
    // Update month/year display
    const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
                        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
    const monthYearEl = document.getElementById('monthYear');
    const yearDisplay = document.getElementById('yearDisplay');
    
    if (monthYearEl) {
        monthYearEl.textContent = monthNames[month];
    }
    if (yearDisplay) {
        yearDisplay.textContent = year;
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
    
    // Previous month days
    for (let i = startDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = day;
        calendarBody.appendChild(dayDiv);
    }
    
    // Current month days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        
        // Check if today
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayDiv.classList.add('selected');
        }
        
        // Check for Feiertag/Ferien
        const feiertag = augsburgerFeiertage.find(f => f.datum === dateStr);
        if (feiertag) {
            dayDiv.classList.add(feiertag.typ === 'ferien' ? 'vacation' : 'holiday');
            dayDiv.title = feiertag.titel;
        }
        
        // Check for events
        const dayEvents = appData.termine.filter(t => t.datum.startsWith(dateStr));
        if (dayEvents.length > 0) {
            dayDiv.classList.add('has-event');
        }
        
        dayDiv.textContent = day;
        
        // Click handler
        dayDiv.addEventListener('click', () => {
            selectedCalendarDate = dateStr;
            document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
            dayDiv.classList.add('selected');
            showCalendarEvents(dateStr);
        });
        
        calendarBody.appendChild(dayDiv);
        dayCounter++;
    }
    
    // Next month days
    for (let i = 1; dayCounter % 7 !== 1 && i <= 7; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = i;
        calendarBody.appendChild(dayDiv);
        dayCounter++;
    }
    
    renderTermineList();
}

function showCalendarEvents(dateStr) {
    const selectedDateDisplay = document.getElementById('selectedDateDisplay');
    
    // Update the selected date display field
    const date = new Date(dateStr + 'T00:00:00');
    const dateStr2 = date.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    if (selectedDateDisplay) {
        selectedDateDisplay.value = dateStr2;
    }
    
    renderTermineList();
}

function renderTermineList() {
    const termine = appData.termine.slice().sort((a, b) => new Date(a.datum) - new Date(b.datum));
    const upcomingTermine = termine.filter(t => new Date(t.datum) >= new Date());
    
    // Upcoming events
    const eventsDiv = document.getElementById('calendar-events');
    if (eventsDiv) {
        if (upcomingTermine.length === 0) {
            eventsDiv.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">📭 Keine anstehenden Termine</p>';
        } else {
            eventsDiv.innerHTML = upcomingTermine.slice(0, 5).map(t => `
                <div class="event-item-premium ${t.typ}">
                    <div>
                        <strong>${t.titel}</strong>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">
                            ${new Date(t.datum).toLocaleDateString('de-DE')}
                            ${t.datum.includes('T') ? ' um ' + t.datum.split('T')[1].substring(0, 5) : ''}
                        </p>
                    </div>
                    <button class="event-delete-btn" onclick="deleteTermin(${t.id})">🗑️</button>
                </div>
            `).join('');
        }
    }
    
    // All events table
    const termineList = document.getElementById('termine-list');
    if (termineList) {
        if (termine.length === 0) {
            termineList.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">📭 Keine Termine eingetragen</p>';
        } else {
            termineList.innerHTML = termine.map(t => `
                <div class="event-table-item">
                    <div class="event-date">${new Date(t.datum).toLocaleDateString('de-DE', {month: 'short', day: 'numeric'})}</div>
                    <div><strong>${t.titel}</strong></div>
                    <div style="font-size: 0.85rem; color: var(--text-muted);">${t.typ}</div>
                    <button class="event-delete-btn" onclick="deleteTermin(${t.id})">🗑️</button>
                </div>
            `).join('');
        }
    }
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
        console.warn('Bitte alle Felder korrekt ausfüllen! Note muss zwischen 1 und 6 liegen.');
        return;
    }
    
    appData.noten.push({
        id: Date.now(),
        fach: fach,
        note: note,
        datum: datum
    });
    
    // Award XP for adding a note
    const xpReward = note <= 2 ? 50 : note <= 3 ? 40 : note <= 4 ? 30 : 20;
    addXP(xpReward, `Neue Note: ${note} in ${fach}`);
    
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
    const terminPriorityInput = document.getElementById('terminPriorityInput');
    
    if (!terminInput || !selectedDateDisplay || !terminTypInput) return;
    
    const titel = terminInput.value.trim();
    const selectedDate = selectedDateDisplay.value;
    const time = terminTimeInput.value || '12:00';
    const typ = terminTypInput.value;
    const priority = terminPriorityInput ? terminPriorityInput.value : 'medium';
    
    if (!titel || !selectedDate) {
        console.warn('Bitte einen Termintitel eingeben und ein Datum im Kalender auswählen!');
        return;
    }
    
    // Combine date and time
    const datum = selectedDate + 'T' + time;
    
    appData.termine.push({
        id: Date.now(),
        titel: titel,
        datum: datum,
        typ: typ,
        fertig: false,
        priority: priority
    });
    
    // Award XP for adding a term
    addXP(30, `Neuer Termin: ${titel}`);
    
    // Clear inputs
    terminInput.value = '';
    terminTimeInput.value = '';
    selectedDateDisplay.value = '';
    if (terminPriorityInput) terminPriorityInput.value = 'medium';
    selectedCalendarDate = null;
    
    saveData();
    renderTermine();
    renderCalendar();
    renderDashboard();
    checkAchievements();
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
    
    // Sort by priority first, then by date
    const sorted = [...appData.termine].sort((a, b) => {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        const pDiff = (priorityOrder[a.priority] || 1) - (priorityOrder[b.priority] || 1);
        if (pDiff !== 0) return pDiff;
        return new Date(a.datum) - new Date(b.datum);
    });
    
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
        
        // Priority badge
        const priorityBadges = {
            high: '<span class="priority-badge priority-high">🔴 Hoch</span>',
            medium: '<span class="priority-badge priority-medium">🟡 Mittel</span>',
            low: '<span class="priority-badge priority-low">🟢 Niedrig</span>'
        };
        const priorityBadge = priorityBadges[termin.priority] || priorityBadges.medium;
        
        terminDiv.innerHTML = `
            <div class="item-content">
                <strong>${typEmoji} ${termin.titel}</strong>
                <p class="meta">📅 ${date}</p>
                ${priorityBadge}
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
        console.warn('Bitte Titel und Text ausfüllen!');
        return;
    }
    
    appData.notizen.push({
        id: Date.now(),
        titel: titel,
        text: text,
        datum: new Date().toLocaleDateString('de-DE')
    });
    
    // Award XP for adding a note
    addXP(25, `Neue Notiz: ${titel}`);
    
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
    // Try both old and new container IDs
    const grid = document.getElementById('achievementsGrid') || document.getElementById('achievements-list');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    achievementsData.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.className = 'achievement-badge';
        
        if (achievement.unlocked) {
            achievementDiv.classList.add('unlocked');
        } else {
            achievementDiv.classList.add('locked');
        }
        
        achievementDiv.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.title}</div>
            <div class="achievement-description">${achievement.description}</div>
            ${achievement.xpReward ? `<div class="achievement-xp">+${achievement.xpReward} XP</div>` : ''}
        `;
        
        achievementDiv.title = achievement.unlocked ? `✅ ${achievement.title} - Freigeschaltet!` : `🔒 ${achievement.description}`;
        
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
        appData.learningDaysCount = count;
        
        // Award XP for activating learning day
        addXP(50, `Lerntag aktiviert! Tag ${count}`);
        
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

// ===== SUBJECT GOALS FUNCTIONS =====
function addSubjectGoal() {
    const fachInput = document.getElementById('subjectGoalFach');
    const gradeInput = document.getElementById('subjectGoalGrade');
    
    if (!fachInput || !gradeInput) return;
    
    const fach = fachInput.value.trim();
    const goalGrade = parseFloat(gradeInput.value);
    
    if (!fach || isNaN(goalGrade) || goalGrade < 1 || goalGrade > 6) {
        console.warn('Bitte Fach und eine gültige Note (1-6) eingeben!');
        return;
    }
    
    // Check if goal already exists
    const exists = appData.subjectGoals.some(g => g.fach.toLowerCase() === fach.toLowerCase());
    if (exists) {
        console.warn('Du hast bereits ein Ziel für ' + fach + ' gesetzt!');
        return;
    }
    
    appData.subjectGoals.push({
        id: Date.now(),
        fach: fach,
        targetGrade: goalGrade,
        createdDate: new Date().toISOString()
    });
    
    // Award XP for setting a goal
    addXP(25, `Lernziel gesetzt: ${fach}`);
    
    // Clear inputs
    fachInput.value = '';
    gradeInput.value = '';
    
    saveData();
    renderSubjectGoals();
    updateStatistics();
}

function deleteSubjectGoal(id) {
    appData.subjectGoals = appData.subjectGoals.filter(g => g.id !== id);
    saveData();
    renderSubjectGoals();
    updateStatistics();
}

function renderSubjectGoals() {
    const list = document.getElementById('subject-goals-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (appData.subjectGoals.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 1rem;">Noch keine Fach-Ziele gesetzt 📚</p>';
        return;
    }
    
    appData.subjectGoals.forEach(goal => {
        // Calculate current grade for this subject
        const subjectNotes = appData.noten.filter(n => n.fach.toLowerCase() === goal.fach.toLowerCase());
        const currentGrade = subjectNotes.length > 0 
            ? (subjectNotes.reduce((a, b) => a + b.note, 0) / subjectNotes.length).toFixed(2)
            : '-';
        
        const isAchieved = currentGrade !== '-' && parseFloat(currentGrade) <= goal.targetGrade;
        const progress = currentGrade !== '-' ? Math.min(((goal.targetGrade / parseFloat(currentGrade)) * 100), 100) : 0;
        
        const goalDiv = document.createElement('div');
        goalDiv.className = 'subject-goal-item' + (isAchieved ? ' achieved' : '');
        
        const achievementBadge = isAchieved ? '<div class="goal-achievement-badge">✨</div>' : '';
        
        goalDiv.innerHTML = `
            ${achievementBadge}
            <div class="subject-goal-header">
                <span class="subject-goal-name">${goal.fach}</span>
                <span class="subject-goal-target">Ziel: ${goal.targetGrade.toFixed(1)}</span>
            </div>
            <div class="subject-goal-current">
                Aktuell: <strong>${currentGrade !== '-' ? currentGrade : 'Noch keine Noten'}</strong>
                ${currentGrade !== '-' ? `(${subjectNotes.length} Noten)` : ''}
            </div>
            <div class="subject-goal-progress">
                <div class="subject-goal-progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="subject-goal-actions">
                <button class="goal-delete" onclick="deleteSubjectGoal(${goal.id})">🗑️ Löschen</button>
            </div>
        `;
        
        list.appendChild(goalDiv);
    });
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
    // Auto-clear without confirmation
    appData.noten = [];
    appData.termine = [];
    appData.notizen = [];
    appData.fehlzeiten = [];
    appData.learningDayActive = false;
    appData.streak = 0;
    appData.lastStreakDate = null;
    appData.xp = 0;
    appData.level = 1;
    appData.totalXpEarned = 0;
    appData.learningDaysCount = 0;
    appData.subjectGoals = [];
    localStorage.setItem('learningDayCount', '0');
    
    // Reset achievements
    achievementsData.forEach(a => a.unlocked = false);
    
    saveData();
    
    renderNotes();
    renderTermine();
    renderNotizen();
    renderFehlzeiten();
    renderAchievements();
    updateStatistics();
    checkAchievements();
    renderDashboard();
    updateLevelDisplay();
    renderSubjectGoals();
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
        
        // Award XP for streak
        const streakXP = appData.streak * 10;
        addXP(streakXP, `Lernsträhne: ${appData.streak} Tage`);
        
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
    } else {
        // Already tracked today
        const streakBtn = document.getElementById('streakBtn');
        if (streakBtn) {
            streakBtn.textContent = '✅ Bereits heute eingetragen!';
        }
    }
    
    updateStreakDisplay();
    renderDashboard();
    updateLevelDisplay();
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

// ===== SEARCH FUNCTION =====
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
let selectedResultIndex = -1;

function performSearch(query) {
    if (!query.trim()) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        selectedResultIndex = -1;
        return;
    }

    const query_lower = query.toLowerCase();
    const results = [];

    // Suche in Tab-Namen
    const tabs = [
        { name: 'dashboard', label: 'Dashboard', icon: '📌' },
        { name: 'kalender', label: 'Kalender', icon: '📆' },
        { name: 'noten', label: 'Noten', icon: '📊' },
        { name: 'notizen', label: 'Notizen', icon: '📝' },
        { name: 'lernzeit', label: 'Lern Zeit', icon: '⏱️' },
        { name: 'rechner', label: 'Rechner', icon: '🧮' },
        { name: 'statistiken', label: 'Statistiken', icon: '📈' }
    ];

    tabs.forEach(tab => {
        if (tab.name.toLowerCase().includes(query_lower) || 
            tab.label.toLowerCase().includes(query_lower)) {
            results.push({
                title: tab.label,
                icon: tab.icon,
                tab: tab.name,
                meta: 'Direkter Zugriff',
                isTab: true
            });
        }
    });

    // Suche in Noten
    if (appData.noten && appData.noten.length > 0) {
        appData.noten.forEach(note => {
            if (note.fach.toLowerCase().includes(query_lower) || 
                note.note.toString().includes(query_lower)) {
                results.push({
                    title: `${note.fach} - ${note.note}`,
                    icon: '📊',
                    tab: 'noten',
                    meta: note.datum
                });
            }
        });
    }

    // Suche in Terminen
    if (appData.termine && appData.termine.length > 0) {
        appData.termine.forEach(termin => {
            if (termin.title.toLowerCase().includes(query_lower) || 
                termin.description.toLowerCase().includes(query_lower)) {
                results.push({
                    title: termin.title,
                    icon: '📅',
                    tab: 'kalender',
                    meta: termin.datum
                });
            }
        });
    }

    // Suche in Notizen
    if (appData.notizen && appData.notizen.length > 0) {
        appData.notizen.forEach(notiz => {
            if (notiz.title.toLowerCase().includes(query_lower) || 
                notiz.content.toLowerCase().includes(query_lower)) {
                results.push({
                    title: notiz.title,
                    icon: '📝',
                    tab: 'notizen',
                    meta: notiz.content.substring(0, 30) + '...'
                });
            }
        });
    }

    selectedResultIndex = -1;
    displaySearchResults(results);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-muted);">Keine Ergebnisse gefunden</div>';
        searchResults.classList.add('active');
        return;
    }

    results.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.dataset.index = index;
        item.innerHTML = `
            <div class="search-result-icon">${result.icon}</div>
            <div class="search-result-content">
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-meta">${result.meta}</div>
            </div>
            ${result.isTab ? '<div class="search-result-tab" style="background: #10b981;">Seite</div>' : '<div class="search-result-tab">' + getTabLabel(result.tab) + '</div>'}
        `;
        item.onclick = () => {
            switchToTab(result.tab);
            searchInput.value = '';
        };
        item.onmouseenter = () => {
            selectedResultIndex = index;
            updateSelectedResult();
        };
        searchResults.appendChild(item);
    });

    // Automatisch erstes Ergebnis auswählen
    selectedResultIndex = 0;
    updateSelectedResult();
    searchResults.classList.add('active');
}

function getTabLabel(tab) {
    const labels = {
        'noten': '📊 Noten',
        'kalender': '📆 Kalender',
        'notizen': '📝 Notizen',
        'lernzeit': '⏱️ Lern Zeit',
        'statistiken': '📈 Statistiken'
    };
    return labels[tab] || tab;
}

function switchToTab(tabName) {
    // Alle Tabs ausblenden
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Alle Tab-Buttons deaktivieren
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Gewünschten Tab anzeigen
    const tabContent = document.getElementById(tabName);
    if (tabContent) {
        tabContent.classList.add('active');
    }

    // Gewünschten Tab-Button aktivieren
    const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (tabBtn) {
        tabBtn.classList.add('active');
    }

    // Suchergebnisse schließen
    searchResults.classList.remove('active');
    searchInput.value = '';
}

function updateSelectedResult() {
    document.querySelectorAll('.search-result-item').forEach((item, index) => {
        if (index === selectedResultIndex) {
            item.style.background = 'var(--accent-color)';
            item.style.color = 'white';
            item.querySelector('.search-result-title').style.color = 'white';
            item.querySelector('.search-result-meta').style.color = 'rgba(255, 255, 255, 0.7)';
        } else {
            item.style.background = '';
            item.style.color = '';
            item.querySelector('.search-result-title').style.color = '';
            item.querySelector('.search-result-meta').style.color = '';
        }
    });
}

function selectCurrentResult() {
    const items = searchResults.querySelectorAll('.search-result-item');
    if (selectedResultIndex >= 0 && selectedResultIndex < items.length) {
        items[selectedResultIndex].click();
    }
}

// Event Listener für Suche
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    // Keyboard Navigation (Arrow Up/Down und Enter)
    searchInput.addEventListener('keydown', (e) => {
        const items = searchResults.querySelectorAll('.search-result-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (selectedResultIndex < items.length - 1) {
                selectedResultIndex++;
            } else {
                selectedResultIndex = 0;
            }
            updateSelectedResult();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (selectedResultIndex > 0) {
                selectedResultIndex--;
            } else {
                selectedResultIndex = items.length - 1;
            }
            updateSelectedResult();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            selectCurrentResult();
        } else if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            selectedResultIndex = -1;
        }
    });

    // Suche schließen wenn man woanders klickt
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
            selectedResultIndex = -1;
        }
    });
}

function updateLernzeitDisplay() {
    // Placeholder für Timer Display Update
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');
    if (minutesEl && secondsEl) {
        minutesEl.textContent = '25';
        secondsEl.textContent = '00';
    }
}

// ===== PRÜFUNGS-COUNTDOWN FUNCTIONS =====
function addPruefung() {
    const subject = document.getElementById('pruefungSubject').value.trim();
    const name = document.getElementById('pruefungName').value.trim();
    const date = document.getElementById('pruefungDate').value;
    const importance = document.getElementById('pruefungImportance').value;

    if (!subject || !name || !date) {
        console.warn('Bitte alle Felder ausfüllen!');
        return;
    }

    const pruefung = {
        id: Date.now(),
        subject,
        name,
        date,
        importance,
        createdAt: new Date().toISOString()
    };

    appData.pruefungen.push(pruefung);
    saveData();
    
    document.getElementById('pruefungSubject').value = '';
    document.getElementById('pruefungName').value = '';
    document.getElementById('pruefungDate').value = '';
    document.getElementById('pruefungImportance').value = 'medium';
    
    renderPruefungen();
}

function deletePruefung(id) {
    appData.pruefungen = appData.pruefungen.filter(p => p.id !== id);
    saveData();
    renderPruefungen();
}

function calculateDaysUntil(dateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const examDate = new Date(dateStr);
    examDate.setHours(0, 0, 0, 0);
    
    const timeDiff = examDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    return daysDiff;
}

function renderPruefungen() {
    const container = document.getElementById('pruefungen-list');
    if (!container) return;
    
    // Sortieren nach Datum
    const sorted = [...appData.pruefungen].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    if (sorted.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">📭 Keine Prüfungen eingetragen. Mach dich bereit! 💪</div>';
        return;
    }
    
    container.innerHTML = sorted.map(pruefung => {
        const daysLeft = calculateDaysUntil(pruefung.date);
        const dateObj = new Date(pruefung.date);
        const dateStr = dateObj.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'short' });
        
        let daysText = '';
        let daysColor = '';
        if (daysLeft < 0) {
            daysText = `${Math.abs(daysLeft)} Tag${Math.abs(daysLeft) !== 1 ? 'e' : ''} vorbei 😅`;
            daysColor = '#ef4444';
        } else if (daysLeft === 0) {
            daysText = 'HEUTE! 🎯';
            daysColor = '#ef4444';
        } else if (daysLeft === 1) {
            daysText = 'MORGEN! ⚠️';
            daysColor = '#f59e0b';
        } else if (daysLeft <= 7) {
            daysText = `${daysLeft} Tage ⏰`;
            daysColor = '#f59e0b';
        } else if (daysLeft <= 30) {
            daysText = `${daysLeft} Tage 📅`;
            daysColor = '#3b82f6';
        } else {
            daysText = `${daysLeft} Tage 📌`;
            daysColor = '#10b981';
        }
        
        return `
            <div class="pruefung-card ${pruefung.importance}">
                <div class="pruefung-subject">${pruefung.subject}</div>
                <div class="pruefung-name">${pruefung.name}</div>
                <div class="pruefung-countdown" style="border-left: 4px solid ${daysColor};">
                    <div class="pruefung-days">${Math.max(0, daysLeft)}</div>
                    <div class="pruefung-label">${daysText}</div>
                </div>
                <div class="pruefung-date">
                    📅 ${dateStr}
                </div>
                <div class="pruefung-actions">
                    <button class="pruefung-delete" onclick="deletePruefung(${pruefung.id})">🗑️ Löschen</button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== WINDOW LOAD EVENT =====
window.addEventListener('load', function() {
    updateStatistics();
    checkAchievements();
    renderDashboard();
    updateLernzeitDisplay();
    renderPruefungen();
    setupCalendar();
    renderCalendarPremium();
    renderTermine();
    renderNotes();
    updateLevelDisplay();
    
    // Event Listener für Prüfungen
    const addPruefungBtn = document.getElementById('addPruefungBtn');
    if (addPruefungBtn) {
        addPruefungBtn.addEventListener('click', addPruefung);
    }
    
    // Event Listener für Termine
    const addTerminBtn = document.getElementById('addTerminBtn');
    if (addTerminBtn) {
        addTerminBtn.addEventListener('click', addTermin);
    }
});

// ===== LEVEL & XP SYSTEM FUNCTIONS =====

function addXP(amount, reason = 'action') {
    const oldLevel = appData.level;
    
    // Add XP
    appData.xp += amount;
    appData.totalXpEarned += amount;
    
    // Check for level up
    const nextLevelXP = getXPForLevel(appData.level + 1);
    if (appData.xp >= nextLevelXP) {
        appData.level++;
        appData.xp -= nextLevelXP;
        
        // Show level up popup and confetti
        showLevelUpPopup(appData.level);
        triggerConfetti();
        
        // Unlock level achievement
        if (appData.level === 5) {
            unlockAchievement(10); // Level 5 Achievement
        } else if (appData.level === 10) {
            unlockAchievement(11); // Level 10 Achievement
        } else if (appData.level === 15) {
            unlockAchievement(12); // Level 15 Achievement
        }
    }
    
    updateLevelDisplay();
    saveData();
}

function unlockAchievement(achievementId) {
    const achievement = achievementsData.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
        achievement.unlocked = true;
        addXP(achievement.xpReward, `Achievement: ${achievement.title}`);
        showAchievementUnlocked(achievement);
        renderAchievements();
    }
}

function showAchievementUnlocked(achievement) {
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #ffd700, #ffa500);
        color: #5b4200;
        padding: 1.5rem;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
        z-index: 10000;
        min-width: 300px;
        animation: slideIn 0.5s ease;
        font-weight: 700;
    `;
    
    notification.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">${achievement.icon}</div>
        <div style="font-size: 1.2rem;">🏆 Erfolg freigeschaltet!</div>
        <div style="font-size: 1.1rem; margin-top: 0.5rem;">${achievement.title}</div>
        <div style="font-size: 0.9rem; opacity: 0.9;">+${achievement.xpReward} XP</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function showLevelUpPopup(newLevel) {
    const popup = document.createElement('div');
    popup.className = 'level-up-popup';
    popup.innerHTML = `
        <h2>🎉 LEVEL UP! 🎉</h2>
        <div class="new-level">${newLevel}</div>
        <div class="level-title-new">${levelTitles[newLevel] || 'Champion'}</div>
        <button class="level-up-close" onclick="this.parentElement.remove()">Weiter</button>
    `;
    
    document.body.appendChild(popup);
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (popup.parentElement) {
            popup.remove();
        }
    }, 5000);
}

function triggerConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da', '#fcbad3', '#a8e6cf'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti confetti-' + (Math.random() > 0.5 ? 'circle' : 'square');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (2 + Math.random() * 1) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            container.appendChild(confetti);
        }, i * 30);
    }
    
    setTimeout(() => container.remove(), 4000);
}

function updateLevelDisplay() {
    // Update level card
    const userLevelEl = document.getElementById('userLevel');
    const currentLevelEl = document.getElementById('currentLevel');
    const currentXPEl = document.getElementById('currentXP');
    const totalXPEl = document.getElementById('totalXP');
    const levelTitleEl = document.getElementById('levelTitle');
    const levelProgressEl = document.getElementById('levelProgress');
    const nextLevelXPEl = document.getElementById('nextLevelXP');
    const prevLevelEl = document.getElementById('prevLevel');
    const nextLevelEl = document.getElementById('nextLevel');
    
    const nextLevelXP = getXPForLevel(appData.level + 1);
    const progressPercent = (appData.xp / nextLevelXP) * 100;
    
    if (userLevelEl) userLevelEl.textContent = appData.level;
    if (currentLevelEl) currentLevelEl.textContent = appData.level;
    if (currentXPEl) currentXPEl.textContent = appData.xp;
    if (totalXPEl) totalXPEl.textContent = appData.totalXpEarned + ' XP';
    if (levelTitleEl) levelTitleEl.textContent = levelTitles[appData.level] || 'Champion';
    if (levelProgressEl) levelProgressEl.style.width = Math.min(progressPercent, 100) + '%';
    if (nextLevelXPEl) nextLevelXPEl.textContent = nextLevelXP;
    if (prevLevelEl) prevLevelEl.textContent = appData.level;
    if (nextLevelEl) nextLevelEl.textContent = appData.level + 1;
}

function checkAchievements() {
    // Achievement: 5 grades
    if (appData.noten.length >= 5) {
        unlockAchievement(1);
    }
    
    // Achievement: Grade 1.0
    if (appData.noten.some(n => n.note <= 1.0)) {
        unlockAchievement(2);
    }
    
    // Achievement: 10 grades
    if (appData.noten.length >= 10) {
        unlockAchievement(3);
    }
    
    // Achievement: Average under 2.5
    if (appData.noten.length > 0) {
        const avg = appData.noten.reduce((a, b) => a + b.note, 0) / appData.noten.length;
        if (avg < 2.5) {
            unlockAchievement(4);
        }
    }
    
    // Achievement: 5 notes
    if (appData.notizen.length >= 5) {
        unlockAchievement(5);
    }
    
    // Achievement: Learning days 3x
    const learningDayCount = parseInt(localStorage.getItem('learningDayCount') || '0');
    if (learningDayCount >= 3) {
        unlockAchievement(6);
    }
    
    // Achievement: Streak 7 days
    if (appData.streak >= 7) {
        unlockAchievement(7);
    }
    
    // Achievement: 10 terms
    if (appData.termine.length >= 10) {
        unlockAchievement(8);
    }
    
    // Achievement: 5 exams
    if (appData.pruefungen.length >= 5) {
        unlockAchievement(9);
    }
}

// ===== NOTIFICATION SYSTEM =====
function setupNotifications() {
    // Request permission for notifications
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                appData.notificationsEnabled = true;
                saveData();
                showNotification('✅ Benachrichtigungen aktiviert!', 'Du wirst jetzt über kommende Prüfungen benachrichtigt.');
            }
        });
    }
    
    // Check for upcoming exams every hour
    setInterval(checkUpcomingExams, 3600000); // Every hour
    checkUpcomingExams(); // Check on load
}

function checkUpcomingExams() {
    if (!appData.notificationsEnabled || !('Notification' in window)) return;
    
    const now = new Date();
    const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000);
    
    appData.pruefungen.forEach(pruefung => {
        const pruefungDate = new Date(pruefung.datum);
        const notificationKey = `notified-${pruefung.id}`;
        
        // 1 day before
        if (pruefungDate <= oneDayFromNow && pruefungDate > now && !localStorage.getItem(notificationKey)) {
            const daysLeft = Math.floor((pruefungDate - now) / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor(((pruefungDate - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            showNotification(
                '🎓 Prüfung in Kürze!',
                `${pruefung.fach} - ${pruefung.name} steht in ${daysLeft} Tagen und ${hoursLeft} Stunden an!`,
                { tag: `exam-${pruefung.id}` }
            );
            
            localStorage.setItem(notificationKey, 'true');
        }
        
        // 1 hour before
        if (pruefungDate <= oneHourFromNow && pruefungDate > now && !localStorage.getItem(`notified-1h-${pruefung.id}`)) {
            showNotification(
                '⚠️ Prüfung in 1 Stunde!',
                `${pruefung.fach} - ${pruefung.name} beginnt gleich!`,
                { tag: `exam-1h-${pruefung.id}` }
            );
            
            localStorage.setItem(`notified-1h-${pruefung.id}`, 'true');
        }
    });
}

function showNotification(title, body, options = {}) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification(title, {
            body: body,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" fill="yellow">📚</text></svg>',
            badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%236d28d9"/></svg>',
            ...options
        });
        
        // Close notification after 10 seconds
        setTimeout(() => notification.close(), 10000);
    }
}

