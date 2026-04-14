// FUNDAMENT-DIAGNOSE
// Foundation/Governance layer for the Fachwerkhaus diagnostic
// Institute for Collaboration Architecture · incolarc.com · 2026

// ============================================================
// QUESTION DATA — 20 questions, 4 per foundation segment
// ============================================================

const SECTIONS = [
  {
    id: 'found1',
    title: 'Fundament 1 — Entscheidungstransparenz',
    questions: [
      {
        text: 'Wenn eine Entscheidung getroffen wird, die andere Teams betrifft — erfahren diese Teams es vorher?',
        options: [
          ['Ja, es gibt einen verbindlichen Prozess dafür', 2],
          ['Manchmal, wenn jemand daran denkt', 1],
          ['Nein — betroffene Teams erfahren es durch die Auswirkungen', 0]
        ]
      },
      {
        text: 'Können Sie nachvollziehen, warum eine Entscheidung getroffen wurde, die Ihre Arbeit verändert hat?',
        options: [
          ['Ja — Entscheidungen werden mit Begründung dokumentiert', 2],
          ['Wenn Sie die richtige Person kennen und fragen', 1],
          ['Nein — Entscheidungen kommen von oben ohne Erklärung', 0]
        ]
      },
      {
        text: 'Werden Entscheidungen rückgängig gemacht oder verändert, ohne dass die Betroffenen informiert werden?',
        options: [
          ['Selten — Änderungen werden kommuniziert', 2],
          ['Gelegentlich — man merkt es an den Widersprüchen', 1],
          ['Regelmäßig — was gestern galt, gilt heute nicht mehr', 0]
        ]
      },
      {
        text: 'Wissen die Menschen, die eine Entscheidung umsetzen müssen, dass sie an der Entscheidung hätten mitwirken können?',
        options: [
          ['Ja — Beteiligung ist Standard', 2],
          ['In manchen Teams, abhängig von der Führungskraft', 1],
          ['Nein — Umsetzung wird erwartet, nicht Mitgestaltung', 0]
        ]
      }
    ]
  },
  {
    id: 'found2',
    title: 'Fundament 2 — Koordinationsanreize',
    questions: [
      {
        text: 'Wird in Ihrer Organisation gemessen, wie gut Teams miteinander koordinieren?',
        options: [
          ['Ja — Koordinationsqualität ist Teil der Bewertung', 2],
          ['Informell — gute Zusammenarbeit wird anerkannt, aber nicht gemessen', 1],
          ['Nein — nur individuelle oder Team-Ergebnisse zählen', 0]
        ]
      },
      {
        text: 'Was passiert, wenn jemand eine Entscheidung trifft, ohne betroffene Teams einzubeziehen?',
        options: [
          ['Es gibt Konsequenzen oder zumindest eine verbindliche Nachbesprechung', 2],
          ['Es wird vielleicht angesprochen, aber ohne Folgen', 1],
          ['Nichts — wer schnell entscheidet, wird belohnt', 0]
        ]
      },
      {
        text: 'Wird Wissen teilen als Teil der Arbeit anerkannt, oder gilt es als Extraaufwand?',
        options: [
          ['Als Teil der Arbeit — es ist in Zielen und Bewertung enthalten', 2],
          ['Wird geschätzt, aber nicht formell anerkannt', 1],
          ['Gilt als Zeitverschwendung — Ergebnisse zählen, nicht Wissenstransfer', 0]
        ]
      },
      {
        text: 'Werden Führungskräfte danach bewertet, ob ihre Entscheidungen für andere Teams Mehrarbeit erzeugen?',
        options: [
          ['Ja — Auswirkungen auf andere werden mitbewertet', 2],
          ['Theoretisch, aber in der Praxis zählt nur das eigene Ergebnis', 1],
          ['Nein — jede Führungskraft optimiert für den eigenen Bereich', 0]
        ]
      }
    ]
  },
  {
    id: 'found3',
    title: 'Fundament 3 — Feedbackinfrastruktur',
    questions: [
      {
        text: 'Gibt es einen Weg, wie Mitarbeitende strukturelle Probleme melden können, ohne persönliches Risiko?',
        options: [
          ['Ja — es gibt sichere, etablierte Kanäle', 2],
          ['Es gibt Kanäle, aber man weiß nie, was damit passiert', 1],
          ['Nein — Probleme melden gilt als Beschwerde', 0]
        ]
      },
      {
        text: 'Wenn Sie sagen "das funktioniert nicht" — passiert etwas?',
        options: [
          ['Ja — Feedback wird systematisch aufgenommen und bearbeitet', 2],
          ['Manchmal, wenn die richtige Person zuhört', 1],
          ['Nein — Sie gelten als schwierig', 0]
        ]
      },
      {
        text: 'Erhalten Sie jemals Rückmeldung darüber, was mit Ihrem Feedback passiert ist?',
        options: [
          ['Ja — der Kreislauf wird geschlossen', 2],
          ['Selten — man erfährt es zufällig', 1],
          ['Nie — Feedback verschwindet', 0]
        ]
      },
      {
        text: 'Wird zwischen Feedback zu Personen und Feedback zu Strukturen unterschieden?',
        options: [
          ['Ja — es gibt unterschiedliche Kanäle und Prozesse', 2],
          ['Nicht formell, aber manche Führungskräfte verstehen den Unterschied', 1],
          ['Nein — jede Kritik wird als persönlicher Angriff verstanden', 0]
        ]
      }
    ]
  },
  {
    id: 'found4',
    title: 'Fundament 4 — Verantwortung für Koordinationskosten',
    questions: [
      {
        text: 'Wenn ein Projekt Mehrarbeit in anderen Teams verursacht — wird das sichtbar gemacht?',
        options: [
          ['Ja — Auswirkungen auf andere Teams werden dokumentiert und berichtet', 2],
          ['Informell bekannt, aber nicht offiziell erfasst', 1],
          ['Nein — jedes Team trägt seine Last allein', 0]
        ]
      },
      {
        text: 'Gibt es jemanden, der für die Koordination zwischen Teams verantwortlich ist?',
        options: [
          ['Ja — eine definierte Rolle mit Mandat und Ressourcen', 2],
          ['Jemand tut es freiwillig, ohne offiziellen Auftrag', 1],
          ['Nein — Koordination passiert zufällig oder gar nicht', 0]
        ]
      },
      {
        text: 'Werden Tools und Prozesse mit den Menschen eingeführt, die sie nutzen sollen?',
        options: [
          ['Ja — Einführung geschieht gemeinsam mit den Nutzenden', 2],
          ['Teilweise — es gibt Schulungen, aber keine Mitgestaltung', 1],
          ['Nein — Tools werden beschafft und ausgerollt', 0]
        ]
      },
      {
        text: 'Wenn Koordination scheitert — wer trägt die Kosten?',
        options: [
          ['Die Organisation erkennt es als strukturelles Problem an', 2],
          ['Die beteiligten Teams versuchen, es untereinander zu lösen', 1],
          ['Die Menschen ganz unten — durch Mehrarbeit, Überstunden, Frustration', 0]
        ]
      }
    ]
  },
  {
    id: 'found5',
    title: 'Fundament 5 — Lernfähigkeit der Organisation',
    questions: [
      {
        text: 'Werden nach Projekten oder Veränderungen systematisch Erkenntnisse gesammelt?',
        options: [
          ['Ja — Retrospektiven oder Reviews sind Standard', 2],
          ['Manchmal, wenn jemand es einfordert', 1],
          ['Nein — es geht direkt weiter zum Nächsten', 0]
        ]
      },
      {
        text: 'Sind die Erkenntnisse aus vergangenen Projekten auffindbar?',
        options: [
          ['Ja — dokumentiert und zugänglich', 2],
          ['Irgendwo, wenn man weiß, wo man suchen muss', 1],
          ['Nein — jedes Projekt startet bei null', 0]
        ]
      },
      {
        text: 'Lernt Ihre Organisation aus Fehlern oder wiederholt sie sie?',
        options: [
          ['Lernt — es gibt sichtbare Veränderungen nach Problemen', 2],
          ['Diskutiert sie, ändert aber selten etwas', 1],
          ['Wiederholt sie — dieselben Fehler, andere Menschen', 0]
        ]
      },
      {
        text: 'Wird "wir haben das schon mal versucht" als Argument gegen Veränderung benutzt?',
        options: [
          ['Selten — vergangene Versuche werden analysiert, nicht als Blockade benutzt', 2],
          ['Gelegentlich — kommt auf die Führungskraft an', 1],
          ['Ständig — Scheitern in der Vergangenheit tötet jede Initiative', 0]
        ]
      }
    ]
  }
];

// ============================================================
// STATE
// ============================================================

const answers = {};
let totalAnswered = 0;
const TOTAL_QUESTIONS = 20;

// ============================================================
// RENDER QUESTIONS
// ============================================================

function renderAll() {
  const panel = document.getElementById('qPanelf');
  panel.innerHTML = '';

  SECTIONS.forEach((section, sIdx) => {
    const sDiv = document.createElement('div');
    sDiv.className = 'section-block';

    const heading = document.createElement('h3');
    heading.className = 'section-title';
    heading.textContent = section.title;
    sDiv.appendChild(heading);

    const hr = document.createElement('hr');
    sDiv.appendChild(hr);

    section.questions.forEach((q, qIdx) => {
      const qKey = section.id + '_q' + qIdx;
      const qDiv = document.createElement('div');
      qDiv.className = 'question';

      const qText = document.createElement('p');
      qText.className = 'q-text';
      qText.innerHTML = '<strong>' + q.text + '</strong>';
      qDiv.appendChild(qText);

      q.options.forEach((opt, oIdx) => {
        const label = document.createElement('label');
        label.className = 'radio-option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = qKey;
        radio.value = opt[1];
        radio.addEventListener('change', function () {
          onAnswer(section.id, qKey, parseInt(this.value));
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + opt[0]));
        qDiv.appendChild(label);
      });

      sDiv.appendChild(qDiv);
    });

    panel.appendChild(sDiv);
  });
}

// ============================================================
// SCORING
// ============================================================

function onAnswer(sectionId, qKey, score) {
  const isNew = !(qKey in answers);
  answers[qKey] = score;

  if (isNew) {
    totalAnswered++;
    document.getElementById('prog').textContent = totalAnswered + ' / ' + TOTAL_QUESTIONS;
  }

  updateFoundation(sectionId);

  if (totalAnswered === TOTAL_QUESTIONS) {
    document.getElementById('gravSec').style.display = 'block';
  }
}

function getSectionState(sectionId) {
  const section = SECTIONS.find(s => s.id === sectionId);
  const sectionAnswers = [];

  section.questions.forEach((q, qIdx) => {
    const qKey = sectionId + '_q' + qIdx;
    if (qKey in answers) {
      sectionAnswers.push(answers[qKey]);
    }
  });

  if (sectionAnswers.length === 0) return null;

  // Worst answer drags section down
  const min = Math.min(...sectionAnswers);
  if (min === 0) return 'air';
  if (min === 1) return 'sand';
  if (sectionAnswers.length === 4 && min === 2) return 'stone';
  return 'sand'; // partial answers default to sand
}

// ============================================================
// UPDATE FOUNDATION VISUALS
// ============================================================

function updateFoundation(sectionId) {
  const state = getSectionState(sectionId);
  const img = document.getElementById('img-' + sectionId);
  if (!img) return;

  if (state === 'stone') {
    img.src = 'img/stone.png';
    img.style.visibility = 'visible';
  } else if (state === 'sand') {
    img.src = 'img/sand1.png';
    img.style.visibility = 'visible';
  } else if (state === 'air') {
    img.src = '';
    img.style.visibility = 'hidden';
  }
}

// ============================================================
// RESULTS
// ============================================================

function doGravity() {
  const resultsDiv = document.getElementById('results');
  let html = '<h2>Ergebnis: Ihr Fundament</h2>';

  const stateLabels = {
    stone: '■ Stein — Infrastruktur existiert und wird gepflegt.',
    sand: '◧ Sand — Etwas existiert, aber es hängt an einzelnen Personen.',
    air: '□ Luft — Nichts da. Der Wert steht im Leitbild, aber es gibt keine Struktur dafür.'
  };

  const stateNames = {
    stone: 'Stein',
    sand: 'Sand',
    air: 'Luft'
  };

  let stoneCount = 0;
  let sandCount = 0;
  let airCount = 0;

  SECTIONS.forEach(section => {
    const state = getSectionState(section.id) || 'air';
    if (state === 'stone') stoneCount++;
    if (state === 'sand') sandCount++;
    if (state === 'air') airCount++;

    html += '<div class="result-section">';
    html += '<h3>' + section.title.replace('Fundament ' + (SECTIONS.indexOf(section) + 1) + ' — ', '') + '</h3>';
    html += '<p>' + stateLabels[state] + '</p>';
    html += '</div>';
  });

  html += '<hr>';

  // Overall assessment
  if (airCount >= 3) {
    html += '<p><strong>Ihr Fundament trägt nicht.</strong> In ' + airCount + ' von 5 Bereichen gibt es keine Governance-Infrastruktur. Die Koordinationskosten landen bei denen, die sich nicht wehren können. Das ist kein individuelles Versagen — das ist ein strukturelles Problem, das Führung lösen muss.</p>';
  } else if (airCount >= 1 || sandCount >= 3) {
    html += '<p><strong>Ihr Fundament ist lückenhaft.</strong> Einiges existiert, aber vieles hängt an einzelnen Personen oder fehlt ganz. Die Struktur darüber — egal wie gut sie gebaut ist — steht auf unsicherem Grund.</p>';
  } else if (sandCount >= 1) {
    html += '<p><strong>Ihr Fundament ist fragil.</strong> Governance-Strukturen existieren, aber sie hängen an Personen, nicht an Design. Wenn diese Menschen gehen, geht das Fundament mit.</p>';
  } else {
    html += '<p><strong>Ihr Fundament ist tragfähig.</strong> Governance-Strukturen sind gestaltet und werden gepflegt. Das ist selten.</p>';
  }

  // Cost externalisation statement — always shown
  html += '<p class="cost-statement">Jedes fehlende Fundament-Element bedeutet: die Kosten der fehlenden Governance landen bei den Menschen, die die Arbeit tun. Fehlende Infrastruktur ist kein persönliches Problem.</p>';

  // Links
  html += '<hr>';
  html += '<p><a href="diagnose.html">→ Zur Fachwerkhaus-Diagnose</a> — Sehen Sie, wie die Koordinationsinfrastruktur Ihrer Organisation aussieht, die auf diesem Fundament steht.</p>';
  html += '<p>Gedanken/Feedback? <a href="mailto:hallo@ankeholst.de">hallo@ankeholst.de</a></p>';

  resultsDiv.innerHTML = html;
  resultsDiv.style.display = 'block';
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  renderAll();
  document.getElementById('gravSec').style.display = 'none';
});
