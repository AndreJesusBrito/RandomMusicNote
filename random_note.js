const ROULETTE_DIFFERENCE_WEIGHT = 1.2;

const allNotes = [
  {
    noteName: "F",
    bgColor: "#54004e",
  },
  {
    noteName: "F#",
    bgColor: "#740000",
  },
  {
    noteName: "Gb",
    bgColor: "#740000",
  },
  {
    noteName: "G",
    bgColor: "#b30101",
  },
  {
    noteName: "G#",
    bgColor: "#ee0000",
  },
  {
    noteName: "Ab",
    bgColor: "#ee0000",
  },
  {
    noteName: "A",
    bgColor: "#ff6300",
  },
  {
    noteName: "A#",
    bgColor: "#ffec01",
  },
  {
    noteName: "Bb",
    bgColor: "#ffec01",
  },
  {
    noteName: "B",
    bgColor: "#99fe00",
  },
  {
    noteName: "C",
    bgColor: "#28ff00",
  },
  {
    noteName: "C#",
    bgColor: "#00ffe9",
  },
  {
    noteName: "Db",
    bgColor: "#00ffe9",
  },
  {
    noteName: "D",
    bgColor: "#007cff",
  },
  {
    noteName: "D#",
    bgColor: "#0500ff",
  },
  {
    noteName: "Eb",
    bgColor: "#0500ff",
  },
  {
    noteName: "E",
    bgColor: "#4500ea",
  },
  {
    noteName: "E#",
    bgColor: "#57009e",
  },
];

let activeNotes = allNotes;
activeNotes.forEach(function(note) {
  note.count = 0;
});
let countTotal = 0;


const noteLabel = document.getElementById('noteLabel');

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
  const selectedNote = activeNotes[index];

  if (selectedNote) {
    selectedNote.count++;
    countTotal++;

    if (selectedNote.noteName[1]) {
      noteLabel.innerHTML = selectedNote.noteName;
    } else {
      noteLabel.innerText = selectedNote.noteName;
    }
    document.body.style.backgroundColor = selectedNote.bgColor;
  }
}

function randomNote() {
  activeNotes.sort();

  const roulette = createRoulette();
  const randomSelectedIndex = getSelectedSector(Math.random(), roulette);

  setNote(randomSelectedIndex);
}


document.addEventListener('click', randomNote);

document.addEventListener('keydown', event => {
  if (event.code === "Space" || event.keyCode === 32) {
    randomNote();
  }
});

// sets note on load
setNote(randomIndex(activeNotes.length));
