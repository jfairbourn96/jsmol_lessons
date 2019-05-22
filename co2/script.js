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
  `reset; spacefill 25%; select @1, @2; wireframe 0.10; spin on; frank on; background=white; antialiasDisplay=true; isosurface off; draw off;`
);

lesson.addInstruction(
  `Like N<sub>2</sub> or C<sub>2</sub>H<sub>2</sub>, all of the atoms in CO<sub>2</sub> have a linear <em>molecular</em> geometry with all of its atoms aligned on the same line. Because it's bound to two molecules and has no nonbonding lone pairs, the carbon atom's <em>electron</em> geometry is also linear.`,
  `spin on; cgo line [BEGIN LINES DIAMETER 0.1 VERTEX -2.0658 0 0 VERTEX 2.0658 0 0 END]; color TRANSLUCENT;`
)

lesson.addInstruction(
  `By contrast, the oxygen atoms have a trigonal planar geometry (shown in yellow) due to their carbon-bonding and their two nonbonding lone pairs (shown in green).`,
  `isosurface lp1 on; isosurface lp2 on; draw e_geo1 on;` +
  `moveto /* time, axisAngle */ 1.0 { 1000 0 0 0.37} /* zoom, translation */  132.25 -28.25 2.66  /* center, rotationRadius */ {0.0 0.0 0.0} 2.8969998 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;`
)

lesson.addInstruction(
  `Because of the arrangement of the oxygen atoms' bonding orbitals, the trigonal planes of both oxygens are perpendicular to reduce steric conflicts.`,
  `isosurface lp1 on; isosurface lp2 on; isosurface lp3 on; isosurface lp4 on; draw e_geo1 on; draw e_geo2 on; ` +
  `moveto 1.0 { 395 -789 470 160.59} 100.0 0.0 0.0 {0 0 0} 2.89699988845864 {0 0 0} 0 0 0 3.0 0.0 0.0;` 
)

lesson.addInstruction(
  `The single, central carbon contains two hybridized sp<sup>2</sup> orbitals (in blue), with one reaching towards each of the oxygens.`, //In addition, the carbon contains two lone pairs (in yellow) perpendicular to each other.`,
  `select @1; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE spa; lcaoCartoon CREATE spb;` +
  `lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px;` + 
  `lcaoCartoon COLOR TRANSLUCENT orange; lcaoCartoon CREATE py;` +
  `moveto /* time, axisAngle */ 0.7 { -820 234 523 93.31} /* zoom, translation */ 0.0 0.0 0.0  /* center, rotationRadius */ {0.0 0.0 0.0} 2.8969998 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;`
);
  
  lesson.addInstruction(
  `The oxygens each have one hybridized sp<sup>2</sup> orbital (in blue) reaching toward the carbon. Each oxygen also has a lone p orbital that contributes to the double bonds (in yellow), and two non-bonding electron lone pairs (in orange).`,
  `select @2, @3; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a;` +
  `lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; select @2; lcaoCartoon CREATE px; select @3;` + 
  `lcaoCartoon COLOR TRANSLUCENT orange; lcaoCartoon CREATE py;` +
  `moveto /* time, axisAngle */ 0.7 { -820 234 523 93.31} /* zoom, translation */  0.0 0.0 0.0  /* center, rotationRadius */ {0.0 0.0 0.0} 2.8969998 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;`
);

lesson.addInstruction(
  `The sp2 orbitals of the carbon and the oxygens share electron density to create CO<sub>2</sub>'s &sigma;-bond network.`,
  `select @1; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.75; lcaoCartoon CREATE spa; lcaoCartoon CREATE spb;` +
  `select @2, @3; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.75; lcaoCartoon CREATE sp2a;` +
  `moveto 0.7 {0 0 1 0} 0.0 0.0 0.0 {0.0 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0`
);

lesson.addInstruction(
  `Meanwhile, each lone pair from the carbon shares electron density with one of the lone pairs from the oxygen. In this figure, only the lone pairs used in bonding are displayed.`,
  `select @1; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px; lcaoCartoon COLOR TRANSLUCENT ORANGE CREATE py;` +
  `select @2; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE px;` +
  `select @3; lcaoCartoon COLOR TRANSLUCENT orange; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE py;` +
  `moveto 0.7 { 55 995 82 41.4} 0.0 0.0 0.0 {0.0 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `One lone pair from each of the oxygens binds with one of the lone pairs in the carbon to form two perpendicular &pi;-bonds. In this figure, one is highlighted in orange and one in yellow.`,
  `isosurface piBond1 on;` +
  `isosurface piBond2 on;` +
  `moveto 0.7 { 55 995 82 41.4} 0.0 0.0 0.0 {0.0 0.0 0.0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `This rendering shows the &pi;-bond network inside of perpendicular planes. The perpendicularity and repulsion of the bonds and electrons are what give CO<sub>2</sub> its stability and its geometry.`,
  `draw p1 translucent green polygon [{-2.2, -1, 1}, {-2.2, 1, -1}, {2.2, 1, -1}, {2.2, -1, 1}];` +
  `draw p2 translucent green polygon [{-2.2, 1, 1}, {-2.2, -1, -1}, {2.2, -1, -1}, {2.2, 1, 1}];` +
  `isosurface piBond1 on;` +
  `isosurface piBond2 on;` +
  `moveto 1.0 { 2 1000 13 87.35} 100.0 0.0 0.0 {0 0 0} 2.8659549 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.execute(0);