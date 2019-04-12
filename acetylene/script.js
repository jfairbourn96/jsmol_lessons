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
  `Acetylene, or C<sub>2</sub>H<sub>2</sub>, is a good example of a molecule with two &pi;-bonds between the same two atoms.`,
  `reset; spacefill 25%; select @1, @2; wireframe 0.10; spin on; frank on; background=white; antialiasDisplay=true;`
);

lesson.addInstruction(
  `Like N<sub>2</sub> or CO<sub>2</sub>, acetylene has a linear geometry with all of its atoms aligned on the same line.`,
  `spin on; cgo line [BEGIN LINES DIAMETER 0.1 VERTEX -2.0658 0 0 VERTEX 3.26611 0 0 END]; color TRANSLUCENT;`
)

lesson.addInstruction(
  `Like any other molecule, the hydrogens contain only s orbitals that contribute to the &sigma;-bond network.`,
  `select @3, @4; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE s;` +
  `moveto 1.0 {0 0 1 0} 100.0 0.0 0.0 {0.600155 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `The two carbons contain two sp<sup>2</sup> and two lone pairs each.`,
  `select @1, @2; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a; lcaoCartoon CREATE sp2b;` +
  `lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px; lcaoCartoon CREATE py;` +
  `set spinX 0; set spinY 10; set spinZ 0; spin on;` +
  `moveto 1.0 { 55 995 82 41.4} 100.0 0.0 0.0 {0.600155 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
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