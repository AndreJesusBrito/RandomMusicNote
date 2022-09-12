const ROULETTE_DIFFERENCE_WEIGHT = 1.2;

const baseNotes = {
  "C" : { bgColor: "#28ff00" },
  "C#": { bgColor: "#00ffe9" },
  "D" : { bgColor: "#007cff" },
  "D#": { bgColor: "#0500ff" },
  "E" : { bgColor: "#4500ea" },
  "F" : { bgColor: "#54004e" },
  "F#": { bgColor: "#740000" },
  "G" : { bgColor: "#b30101" },
  "G#": { bgColor: "#ee0000" },
  "A" : { bgColor: "#ff6300" },
  "A#": { bgColor: "#ffec01" },
  "B" : { bgColor: "#99fe00" },
}


const presetNameLabel = document.getElementById('presetNameLabel');
const noteLabel = document.getElementById('noteLabel');
const directionIconLabel = document.getElementById('direction-icon-label');
const solutionLabel = document.getElementById('solution-label');
const menu = document.getElementById('menu');
const menuBody = document.getElementById('menu_body');
const menuToggler = document.getElementById('menu_toggler');
const menuOverlay = document.getElementById('menu_overlay');
const presetList = document.getElementById('preset_list');


/**
 * @type {boolean} if the interval direction is up
 */
let directionUp = true;

let selectedNote = null;

let activeNotes = null;

let countTotal = 0;

let currentPreset = null;

// load last used preset
const lastPreset = localStorage.getItem('rms_preset');
if (lastPreset && presets[lastPreset]) {
  applyPreset(lastPreset, presets)
} else {
  // sets note on load
  applyPreset('P5', presets);
}


function xor(a,b) {
  return a && !b || !a && b;
}

function randomIndex(length) {
  return Math.floor((Math.random() * length));
}

function createRoulette() {
  const sectors = [];
  const equalSectorsSize = 1 / activeNotes.length;


  const average = Math.round(activeNotes
    .map(a => a.count)
    .reduce((a, b) => (a + b))
  / activeNotes.length);


  let accumulatedDiference = 0;
  for (let i = 0; i < activeNotes.length; i++) {
    const note = activeNotes[i];

    const difference = (ROULETTE_DIFFERENCE_WEIGHT / activeNotes.length) * (average - note.count);
    const distributedDiference = difference / (activeNotes.length - 1);

    sectors[i] = equalSectorsSize + difference + distributedDiference;

    accumulatedDiference += distributedDiference;
  }

  let total = 0;
  for (let i = 0; i < sectors.length; i++) {
    const sectionSize = Math.max(0, sectors[i] - accumulatedDiference)
    sectors[i] = sectionSize;
    total += sectionSize;
  }

  // normalize values
  for (let i = 0; i < sectors.length; i++) {
    sectors[i] /= total;
  }

  return sectors;
}


function getSelectedSector(random, sectors) {
  let accumulation = 0;
  for (let i = 0; i < sectors.length; i++) {
    if (random <= sectors[i] + accumulation) {
      return i;
    }
    accumulation += sectors[i];
  }
  return -1;
}

function setNote(index) {
  selectedNote = activeNotes[index];

  if (selectedNote) {
    selectedNote.count++;
    countTotal++;

    if (selectedNote.noteName[1]) {
      noteLabel.innerHTML = selectedNote.noteName;
    } else {
      noteLabel.innerText = selectedNote.noteName;
    }
    document.body.style.backgroundColor = baseNotes[selectedNote.enharmonic].bgColor;
  }
}

function randomNote() {
  activeNotes.sort();

  // choose a random direction for next note
  directionUp = Math.random() > 0.5;

  // show new direction in the screen
  directionIconLabel.innerText = directionUp ? '☝' : '👇';

  // hide solution
  solutionLabel.classList.add('hidden');
  solutionLabel.innerText = '';

  const roulette = createRoulette();
  const randomSelectedIndex = getSelectedSector(Math.random(), roulette);

  setNote(randomSelectedIndex);
}

function applyPreset(presetID, presets) {
  localStorage.setItem('rms_preset', presetID);

  const preset = presets[presetID];

  currentPreset = preset;

  presetNameLabel.innerText = preset.name;

  if (preset.alias) {
    activeNotes = presets[preset.alias].notes;
  } else {
    activeNotes = preset.notes;
  }
  activeNotes.forEach(function(note) {
    note.count = 0;
  });
  countTotal = 0;
  randomNote();
  menu.classList.remove('open');
  menuOverlay.classList.remove('open');
}

function revealSolution() {
  solutionLabel.innerText = xor(directionUp, currentPreset.reversed) ? selectedNote.next : selectedNote.prev;
  solutionLabel.classList.remove('hidden');
}



menuToggler.addEventListener('click', function(event) {
  menu.classList.toggle('open');
  menuOverlay.classList.toggle('open');
  event.stopPropagation();
});

menuOverlay.addEventListener('click', function (event) {
  if (menu.classList.contains('open')) {
    menuToggler.click();
    event.stopPropagation();
  }
});

menuBody.addEventListener('click', event => event.stopPropagation());

document.addEventListener('click', randomNote);

document.addEventListener('keydown', event => {
  switch (event.code) {
    case "Space":
      if (menu.classList.contains('open')) {
        menuToggler.click();
      } else {
        randomNote();
      }
      break;
    case "Escape":
      if (menu.classList.contains('open')) {
        menuToggler.click();
      }
      break;

    case "KeyM":
      menuToggler.click();
      break;

    case "KeyS":
      revealSolution();
      break;
  }
});

// reveal solution logic
solutionLabel.addEventListener('click', ev => {
  revealSolution();
  ev.stopPropagation();
});

// add presets to menu
for (const presetID in presets) {
  const preset = presets[presetID];
  const li = document.createElement('li');

  li.innerText = preset.name;
  li.addEventListener('click', applyPreset.bind(null, presetID, presets));

  presetList.appendChild(li);
}

