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
  `The two carbons contain two sp orbitals (in blue) and two lone pairs (in yellow) each.`,
  `select @1, @2; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE spa; lcaoCartoon CREATE spb;` +
  `lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px; lcaoCartoon COLOR TRANSLUCENT orange; lcaoCartoon CREATE py;` +
  `set spinX 0; set spinY 10; set spinZ 10; spin on;` +
  `moveto 1.0 { 55 995 82 41.4} 100.0 0.0 0.0 {0.600155 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `The sp orbitals of the carbons and the s orbitals of the hydrogens share electron density to form the &sigma;-bond network.`,
  `select @1, @2; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE spa; lcaoCartoon CREATE spb;` +
  `select @3, @4; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE s;` +
  `moveto 1.0 {0 0 1 0} 100.0 0.0 0.0 {0.600155 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `This thick, compact electron density is what gives Acetylene (and other simple molecules with a triple bond) its low reactivity. This strict density also prevents molecules from rotating around a triple bond.`,
  `isosurface piBond1 on;` +
  `isosurface piBond2 on;` +
  `moveto 1.0 { 55 995 82 41.4} 100.0 0.0 0.0 {0.600155 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `Meanwhile, the lone pairs of the carbons form two &pi;-bonds in two perpendicular planes, forming a triple bond. Notice the orange plane perfectly bisects the orange orbital, as does the yellow plane to the yellow orbital.`,
  `isosurface piBond1 on;` +
  `isosurface piBond2 on;` +
  `draw p1 on;` +
  `draw p2 on;` +
  `moveto 1.0 { 55 995 82 41.4} 100.0 0.0 0.0 {0.600155 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

// fit
// draw p1 translucent green polygon [{-1, -1, 1}, {-1, 1, -1}, {2.2, 1, -1},{2.2, -1, 1}]
// draw p2 translucent green polygon [{-1, 1, 1}, {-1, -1, -1}, {2.2, -1, -1},{2.2, 1, 1}]

// split
// draw p1 translucent green polygon [{-1, 0, 2}, {-1, 0, -2}, {2.2, 0, -2},{2.2, 0, 2}]
// draw p2 translucent green polygon [{-1, 2, 0}, {-1, -2, 0}, {2.2, -2, 0},{2.2, 2, 0}]

lesson.execute(0);