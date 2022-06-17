const presets = {};

presets.P5 = {
  name: "Perfect Fifths",
  notes: [
    { noteName: "Cb",  prev: "Fb",  next: "Gb",   enharmonic: "B"   },
    { noteName: "Gb",  prev: "Cb",  next: "Db",   enharmonic: "F#"  },
    { noteName: "C",   prev: "F",   next: "G",    enharmonic: "C"   },
    { noteName: "G",   prev: "C",   next: "D",    enharmonic: "G"   },
    { noteName: "C#",  prev: "F#",  next: "G#",   enharmonic: "C#"  },
    { noteName: "G#",  prev: "C#",  next: "D#",   enharmonic: "G#"  },
    { noteName: "Db",  prev: "Gb",  next: "Ab",   enharmonic: "C#"  },
    { noteName: "Ab",  prev: "Db",  next: "Eb",   enharmonic: "G#"  },
    { noteName: "D",   prev: "G",   next: "A",    enharmonic: "D"   },
    { noteName: "A",   prev: "D",   next: "E",    enharmonic: "A"   },
    { noteName: "D#",  prev: "G#",  next: "A#",   enharmonic: "D#"  },
    { noteName: "A#",  prev: "D#",  next: "E#",   enharmonic: "A#"  },
    { noteName: "Eb",  prev: "Ab",  next: "Bb",   enharmonic: "D#"  },
    { noteName: "Bb",  prev: "Eb",  next: "F",    enharmonic: "A#"  },
    { noteName: "E",   prev: "A",   next: "B",    enharmonic: "E"   },
    { noteName: "B",   prev: "E",   next: "F#",   enharmonic: "B"   },
    { noteName: "E#",  prev: "A#",  next: "B#",   enharmonic: "F"   },
    { noteName: "B#",  prev: "E#",  next: "F##",  enharmonic: "C"   },
    { noteName: "Fb",  prev: "Bbb", next: "Cb",   enharmonic: "E"   },
    { noteName: "F",   prev: "Bb",  next: "C",    enharmonic: "F"   },
    { noteName: "F#",  prev: "B",   next: "C#",   enharmonic: "F#"  },
    { noteName: "F##", prev: "B#",  next: "C##",  enharmonic: "G"   },
  ]
};

presets.P4 = {
  name: "Perfect Forths",
  alias: "P5",
  reversed: true,
};

presets.M3 = {
  name: "Major thirds",
  notes: [
    { noteName: "F",    prev: "Db",   next: "A",    enharmonic: "F"  },
    { noteName: "F#",   prev: "D",    next: "A#",   enharmonic: "F#" },
    { noteName: "Gb",   prev: "Ebb",  next: "Bb",   enharmonic: "F#" },
    { noteName: "G",    prev: "Eb",   next: "B",    enharmonic: "G"  },
    { noteName: "F##",  prev: "D#",   next: "A##",  enharmonic: "G"  },
    { noteName: "G#",   prev: "E",    next: "B#",   enharmonic: "G#" },
    { noteName: "Ab",   prev: "Fb",   next: "C",    enharmonic: "G#" },
    { noteName: "A",    prev: "F",    next: "C#",   enharmonic: "A"  },
    { noteName: "Bbb",  prev: "Gbb",  next: "Db",   enharmonic: "A"  },
    { noteName: "A#",   prev: "F#",   next: "C##",  enharmonic: "A#" },
    { noteName: "Bb",   prev: "Gb",   next: "D",    enharmonic: "A#" },
    { noteName: "B",    prev: "G",    next: "D#",   enharmonic: "B"  },
    { noteName: "Cb",   prev: "Abb",  next: "Eb",   enharmonic: "B"  },
    { noteName: "B#",   prev: "G#",   next: "D##",  enharmonic: "C"  },
    { noteName: "C",    prev: "Ab",   next: "E",    enharmonic: "C"  },
    { noteName: "C#",   prev: "A",    next: "E#",   enharmonic: "C#" },
    { noteName: "Db",   prev: "Bbb",  next: "F",    enharmonic: "C#" },
    { noteName: "D",    prev: "Bb",   next: "F#",   enharmonic: "D"  },
    { noteName: "C##",  prev: "A#",   next: "E##",  enharmonic: "D"  },
    { noteName: "Ebb",  prev: "Cbb",  next: "Gb",   enharmonic: "D"  },
    { noteName: "D#",   prev: "B",    next: "F##",  enharmonic: "D#" },
    { noteName: "Eb",   prev: "Cb",   next: "G",    enharmonic: "D#" },
    { noteName: "E",    prev: "C",    next: "G#",   enharmonic: "E"  },
    { noteName: "Fb",   prev: "Dbb",  next: "Ab",   enharmonic: "E"  },
    { noteName: "E#",   prev: "C#",   next: "G##",  enharmonic: "F"  },
  ]
};

presets.m3 = {
  name: "Minor thirds",
  notes: [
    { noteName: "Cb",   prev: "Ab",  next: "Ebb",  enharmonic: "B"   },
    { noteName: "Ebb",  prev: "Cb",  next: "Gbb",  enharmonic: "C"   },
    { noteName: "C",    prev: "A",   next: "Eb",   enharmonic: "C"   },
    { noteName: "Eb",   prev: "C",   next: "Gb",   enharmonic: "D#"  },
    { noteName: "C#",   prev: "A#",  next: "E",    enharmonic: "C#"  },
    { noteName: "E",    prev: "C#",  next: "G",    enharmonic: "E"   },
    { noteName: "Db",   prev: "Bb",  next: "Fb",   enharmonic: "C#"  },
    { noteName: "Fb",   prev: "Db",  next: "Abb",  enharmonic: "E"   },
    { noteName: "D",    prev: "B",   next: "F",    enharmonic: "D"   },
    { noteName: "F",    prev: "D",   next: "Ab",   enharmonic: "F"   },
    { noteName: "D#",   prev: "B#",  next: "F#",   enharmonic: "D#"  },
    { noteName: "F#",   prev: "D#",  next: "A",    enharmonic: "F#"  },
    { noteName: "Gb",   prev: "Eb",  next: "Bbb",  enharmonic: "F#"  },
    { noteName: "G",    prev: "E",   next: "Bb",   enharmonic: "G"   },
    { noteName: "E#",   prev: "C##", next: "G#",   enharmonic: "F"   },
    { noteName: "G#",   prev: "E#",  next: "B",    enharmonic: "G#"  },
    { noteName: "Abb",  prev: "Fb",  next: "Cbb",  enharmonic: "G"   },
    { noteName: "Ab",   prev: "F",   next: "Cb",   enharmonic: "G#"  },
    { noteName: "A",    prev: "F#",  next: "C",    enharmonic: "A"   },
    { noteName: "F##",  prev: "D##", next: "A#",   enharmonic: "G"   },
    { noteName: "A#",   prev: "F##", next: "C#",   enharmonic: "A#"  },
    { noteName: "Bbb",  prev: "Gb",  next: "Dbb",  enharmonic: "A"   },
    { noteName: "Bb",   prev: "G",   next: "Db",   enharmonic: "A#"  },
    { noteName: "B",    prev: "G#",  next: "D",    enharmonic: "B"   },
    { noteName: "B#",   prev: "G##", next: "D#",   enharmonic: "B#"  },
  ]
};


presets.M2 = {
  name: "Major seconds",
  notes: [
    { noteName: "C",     prev: "Bb",   next: "D",     enharmonic: "C"   },
    { noteName: "C#",    prev: "B",    next: "D#",    enharmonic: "C#"  },
    { noteName: "Db",    prev: "Cb",   next: "Eb",    enharmonic: "C#"  },
    { noteName: "D",     prev: "C",    next: "E",     enharmonic: "D"   },
    { noteName: "D#",    prev: "C#",   next: "E#",    enharmonic: "D#"  },
    { noteName: "Ebb",   prev: "Cbb",  next: "Fb",    enharmonic: "D#"  },
    { noteName: "Eb",    prev: "Db",   next: "F",     enharmonic: "D#"  },
    { noteName: "E",     prev: "D",    next: "F#",    enharmonic: "E"   },
    { noteName: "Fb",    prev: "Ebb",  next: "Gb",    enharmonic: "E"   },
    { noteName: "E#",    prev: "D#",   next: "F##",   enharmonic: "F"   },
    { noteName: "F",     prev: "Eb",   next: "G",     enharmonic: "F"   },
    { noteName: "F#",    prev: "E",    next: "G#",    enharmonic: "F#"  },
    { noteName: "Gb",    prev: "Fb",   next: "Ab",    enharmonic: "F#"  },
    { noteName: "G",     prev: "F",    next: "A",     enharmonic: "G"   },
    { noteName: "G#",    prev: "F#",   next: "A#",    enharmonic: "G#"  },
    { noteName: "Ab",    prev: "Gb",   next: "Bb",    enharmonic: "G#"  },
    { noteName: "A",     prev: "G",    next: "B",     enharmonic: "A"   },
    { noteName: "Bbb",   prev: "Abb",  next: "Cb",    enharmonic: "A"   },
    { noteName: "A#",    prev: "G#",   next: "B#",    enharmonic: "A#"  },
    { noteName: "B",     prev: "A",    next: "C#",    enharmonic: "B"   },
    { noteName: "B#",    prev: "A#",   next: "C##",   enharmonic: "C"   },
  ]
};

