// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

lesson.addInstruction(
  `2px`,
  `isosurface contour2px ON;`
);

lesson.addInstruction(
  `2py`,
  `isosurface contour2py ON;`
);

lesson.addInstruction(
  `2pz`,
  `isosurface contour2pz ON;`
);

lesson.addInstruction(
  `3px`,
  `isosurface contour3px ON;`
);

lesson.addInstruction(
  `3py`,
  `isosurface contour3py ON;`
);

lesson.addInstruction(
  `3pz`,
  `isosurface contour3pz ON;`
);

lesson.addInstruction(
  `2px`,
  `isosurface dots2px ON;`
);

lesson.addInstruction(
  `2py`,
  `isosurface dots2py ON;`
);

lesson.addInstruction(
  `2pz`,
  `isosurface dots2pz ON;`
);

lesson.addInstruction(
  `3px`,
  `isosurface dots3px ON;`
);

lesson.addInstruction(
  `3py`,
  `isosurface dots3py ON;`
);

lesson.addInstruction(
  `3pz`,
  `isosurface dots3pz ON;`
);

lesson.addInstruction(
  `4px`,
  `isosurface dots4px ON;`
);

lesson.addInstruction(
  `4py`,
  `isosurface dots4py ON;`
);

lesson.addInstruction(
  `4pz`,
  `isosurface dots4pz ON;`
);

lesson.execute(0);