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
  `CO<sub>2</sub>, or Carbon Dioxide, is a great example of a simple molecule with perpendicular &pi;-bonds between different sets of atoms.`,
  `reset; spacefill 25%; select @1, @2; wireframe 0.10; spin on; frank on; background=white; antialiasDisplay=true;`
);

lesson.addInstruction(
  `Like N<sub>2</sub> or C<sub>2</sub>H<sub>2</sub>, CO<sub>2</sub> has a linear geometry with all of its atoms aligned on the same line.`,
  `spin on; cgo line [BEGIN LINES DIAMETER 0.1 VERTEX -2.0658 0 0 VERTEX 3.26611 0 0 END]; color TRANSLUCENT;`
)

lesson.addInstruction(
  `The single, central carbon contains two hybridized sp<sup>2</sup> orbitals (in blue), with one reaching towards each of the oxygens. In addition, the carbon contains two lone pairs (in yellow) perpendicular to each other.`,
  `select @1; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE spa; lcaoCartoon CREATE spb;` +
  `lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px; lcaoCartoon CREATE py;` +
  `moveto /* time, axisAngle */ 0.7 { -820 234 523 93.31} /* zoom, translation */  100.0 0.0 0.0  /* center, rotationRadius */ {1.1969999 0.0 0.0} 2.8969998 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;` +
  `set spinX 0; set spinY 30; set spinZ 0; spin on;` 
  );
  
  lesson.addInstruction(
  `The oxygens each have one hybridized sp<sup>2</sup> orbital (in blue) reaching toward the carbon. Each oxygen also has a lone pair that contributes to the double bonds.`,
  `select @2, @3; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a;` +
  `lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; select @2; lcaoCartoon CREATE px; select @3; lcaoCartoon CREATE py;` +
  `moveto /* time, axisAngle */ 0.7 { -820 234 523 93.31} /* zoom, translation */  100.0 0.0 0.0  /* center, rotationRadius */ {1.1969999 0.0 0.0} 2.8969998 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;` +
  `set spinX 0; set spinY 30; set spinZ 0; spin on;`
);

lesson.addInstruction(
  `The sp2 orbitals of the carbon and the oxygens share electron density to create CO<sub>2</sub>'s &sigma;-bond network.`,
  `select @1; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.75; lcaoCartoon CREATE spa; lcaoCartoon CREATE spb;` +
  `select @2, @3; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.75; lcaoCartoon CREATE sp2a;` +
  `moveto 0.7 {0 0 1 0} 100.0 0.0 0.0 {1.2 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0` +
  `set spinX 0; set spinY 30; set spinZ 0; spin on;` 
);

lesson.addInstruction(
  `Meanwhile, each lone pair from the carbon shares electron density with one of the lone pairs from the oxygen. In this figure, only the lone pairs used in bonding are displayed in yellow.`,
  `select @1; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px; lcaoCartoon CREATE py;` +
  `select @2; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px;` +
  `select @3; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE py;` +
  `moveto 0.7 { 55 995 82 41.4} 100.0 0.0 0.0 {1.2 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `set spinX 0; set spinY 30; set spinZ 0; spin on;`
);

lesson.addInstruction(
  `This rendering shows the &pi;-bond network inside of perpendicular planes. The perpendicularity and repulsion of the bonds and electrons are what give CO<sub>2</sub> its stability and its geometry.`,
  `draw p1 translucent green polygon [{-0.6, -1, 1}, {-0.6, 1, -1}, {3, 1, -1},{3, -1, 1}];` +
  `draw p2 translucent green polygon [{-0.6, 1, 1}, {-0.6, -1, -1}, {3, -1, -1},{3, 1, 1}];` +
  `isosurface piBond1 on;` +
  `isosurface piBond2 on;` +
  `moveto 0.7 { 55 995 82 41.4} 100.0 0.0 0.0 {1.2 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

// fit
// draw p1 translucent green polygon [{-1, -1, 1}, {-1, 1, -1}, {2.2, 1, -1},{2.2, -1, 1}]
// draw p2 translucent green polygon [{-1, 1, 1}, {-1, -1, -1}, {2.2, -1, -1},{2.2, 1, 1}]

// split
// draw p1 translucent green polygon [{-1, 0, 2}, {-1, 0, -2}, {2.2, 0, -2},{2.2, 0, 2}]
// draw p2 translucent green polygon [{-1, 2, 0}, {-1, -2, 0}, {2.2, -2, 0},{2.2, 2, 0}]

lesson.execute(0);