// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

lesson.addInstruction(
  `4s`,
  `isosurface dots4s ON;`
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

lesson.addInstruction(
  `4dxy`,
  `isosurface dots4dxy ON;`
);

lesson.addInstruction(
  `4dyz`,
  `isosurface dots4dyz ON;`
);

lesson.addInstruction(
  `4dxz`,
  `isosurface dots4dxz ON;`
);

lesson.addInstruction(
  `4dz2`,
  `isosurface dots4dz2 ON;`
);

lesson.addInstruction(
  `4dx2y2`,
  `isosurface dots4dx2y2 ON;`
);

lesson.addInstruction(
  `4fy3x2y2`,
  `isosurface dots4fy3x2y2 ON;`
);

lesson.addInstruction(
  `4fxyz`,
  `isosurface dots4fxyz ON;`
);

lesson.addInstruction(
  `4fyz2`,
  `isosurface dots4fyz2 ON;`
);

lesson.addInstruction(
  `4fz3`,
  `isosurface dots4fz3 ON;`
);

lesson.addInstruction(
  `4fxz2`,
  `isosurface dots4fxz2 ON;`
);

lesson.addInstruction(
  `4fzx2y2`,
  `isosurface dots4fzx2y2 ON;`
);

lesson.addInstruction(
  `4fxx23y2`,
  `isosurface dots4fxx23y2 ON;`
);

lesson.execute(0);