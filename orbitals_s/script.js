// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// TODO: Alter the instructions and add as many as necessary.
lesson.addInstruction(
  `1s`,
  `isosurface contour1s ON;`
);

lesson.addInstruction(
  `2s`,
  `isosurface contour2s ON;`
);

lesson.addInstruction(
  `3s`,
  `isosurface contour3s ON;`
);

lesson.addInstruction(
  `4s`,
  `isosurface contour4s ON;`
);

lesson.addInstruction(
  `1s`,
  `isosurface dots1s ON;`
);

lesson.addInstruction(
  `2s`,
  `isosurface dots2s ON;`
);

lesson.addInstruction(
  `3s`,
  `isosurface dots3s ON;`
);

lesson.addInstruction(
  `4s`,
  `isosurface dots4s ON;`
);

lesson.execute(0);