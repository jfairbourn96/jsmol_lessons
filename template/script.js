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
  `This tutorial consists of a sequence of interactive molecular models, with explanations below them. This set of molecules illustrates the _____________. Use your mouse or touch screen ` +
  `to rotate, zoom, and move the model on any of the states in this tutorial. Use the large arrow key to the right of the window to advance to the next model. Use the large arrow key to the ` +
  `left of the model to go to the previous model. Use the "reset page" button in the upper right to return to the default model view, if desired. Use the “reset tutorial” button (upper left) ` +
  `to return to the start of the tutorial at this instruction. Click the “advance” arrow to get started!`,
  ``
);

lesson.addInstruction(
  `This is a single water molecule.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

lesson.addInstruction(
  `This is a spinning water molecule.`,
  `spin on;`
);

lesson.addInstruction(
  `Now it's spinning in multiple directions.`,
  `set spinX 20; set spinY 20; set spinZ 0; spin on;`
);

lesson.addInstruction(
  `Now it's spinning in multiple directions AND showing a surface`,
  `set spinX 20; set spinY -10; set spinZ -10; spin on; isosurface vdw; isosurface translucent;`
);

lesson.addInstruction(
  `See how executing the next instruction stops the spinning and removes the surface?`,
  ``
);

lesson.addInstruction(
  `Now you try, but with more interesting molecules!`,
  `spin on;`
);

lesson.execute(0);