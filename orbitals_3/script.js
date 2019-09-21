// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

lesson.addInstruction(
  `3s`,
  `isosurface contour3s ON;`
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
  `3dxy`,
  `isosurface contour3dxy ON;`
);

lesson.addInstruction(
  `3dyz`,
  `isosurface contour3dyz ON;`
);

lesson.addInstruction(
  `3dxz`,
  `isosurface contour3dxz ON;`
);

lesson.addInstruction(
  `3dx-2y-2`,
  `isosurface contour3dx2y2 ON;`
);

lesson.addInstruction(
  `3dxz`,
  `isosurface contour3dz2 ON;`
);

lesson.addInstruction(
  `3s`,
  `isosurface dots3s ON;`
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
  `3dxy`,
  `isosurface dots3dxy ON;`
);

lesson.addInstruction(
  `3dyz`,
  `isosurface dots3dyz ON;`
);

lesson.addInstruction(
  `3dxz`,
  `isosurface dots3dxz ON;`
);

lesson.addInstruction(
  `3dx-2y-2`,
  `isosurface dots3dx2y2 ON;`
);

lesson.addInstruction(
  `3dxz`,
  `isosurface dots3dz2 ON;`
);

lesson.execute(0);