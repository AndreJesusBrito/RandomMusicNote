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

const noteLabel = document.getElementById('noteLabel');

function randomIndex(length) {
  return Math.floor((Math.random() * length));
}

function setNote(index) {
  const selectedNote = activeNotes[index];
  if (selectedNote) {
    if (selectedNote.noteName[1]) {
      noteLabel.innerHTML = selectedNote.noteName;
    } else {
      noteLabel.innerText = selectedNote.noteName;
    }
    document.body.style.backgroundColor = selectedNote.bgColor;
  }
}

function randomNote() {
  // choose one random
  let randomSelected = randomIndex(activeNotes.length);

  // make it more random
  randomSelected = Math.random() > 0.5 ? activeNotes.length - 1 - randomSelected : randomSelected;

  // test distribution
  // if (!activeNotes[randomSelected].count) {
  //   activeNotes[randomSelected].count = 0;
  // }
  // activeNotes[randomSelected].count++;

  setNote(randomSelected);
}


document.addEventListener('click', randomNote);

document.addEventListener('keydown', event => {
  if (event.code === "Space" || event.keyCode === 32) {
    randomNote();
  }
});

// sets note on load
setNote(randomIndex(activeNotes.length));
