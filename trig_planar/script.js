// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);
// Instructions for trigonal planar (BF3)
lesson.switchInstructions(1);

lesson.addInstruction(
  `This should display BF<sub>3</sub>.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;`
);

lesson.addInstruction(
  `Watch boron trifluoride spin!`,
  `spin on;`
);

lesson.switchInstructions(2);

lesson.addInstruction(
  `This should display SO<sub>2</sub>.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;`
);

lesson.addInstruction(
  `Watch sulfur dioxide spin!`,
  `spin on;`
);

lesson.switchInstructions(3);

lesson.addInstruction(
  `This should display Formaldehyde (CH<sub>2</sub>O).`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;`
);

lesson.addInstruction(
  `Watch formaldehyde spin!`,
  `spin on;`
);

lesson.switchInstructions(1);