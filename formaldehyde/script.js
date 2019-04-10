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
  `Formaldehyde, or CH<sub>2</sub>O, is an example of a simple molecule with hybridized orbitals. 
   The central carbon is attached to 3 other atoms. 
   Overall, formaldehyde contains 3sp<sup>2</sup> hybridized orbitals and a single unhybridized 1p<sub>z</sub> orbital.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;  set bondRadiusMilliAngstroms 100;
  moveto 0.0 { 998 49 -27 76.45} 100.0 0.0 0.0 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0 3.0 0.0 0.0;` + lesson.shapeString
);

lesson.addInstruction(
  'The hydrogen atoms each contribute one s orbital.',
  'select @3, @4; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.7; lcaoCartoon CREATE s;' +
  'moveto 1.0 { 999 -3 42 77.56} 139.19 20.53 3.07 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0 3.0 0.0 0.0;'  
);

lesson.addInstruction(
  `Bound to 3 other atoms, the single carbon atom contains 3 hybridized sp<sup>2</sup> orbitals (in blue) and a single unhybridized 1p<sub>z</sub> orbital (in yellow).`,
  // sp2 hybridized orbitals around the carbon
  'select @1; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a; lcaoCartoon CREATE sp2b; lcaoCartoon CREATE sp2c;' +
  // pz unhybridized orbital for the carbon
  'lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE pz;' +
  'moveto 0.8 { 849 509 -139 30.3} 100.0 0.0 0.0 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0  3.0 0.0 0.0;'
);
  
lesson.addInstruction(
  'Directly bound to only one other atom, the oxygen atom has one hybridized sp<sup>2</sup> orbital (in blue) an unhybridized p orbital (in yellow), and two lone pairs (in red).',
  // sp2 hybridized oxygen orbital
  'select @2; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a;' +
  // lone pairs
  'lcaoCartoon COLOR TRANSLUCENT red; lcaoCartoon SCALE 1.1; lcaoCartoon CREATE sp2b; lcaoCartoon CREATE sp2c;' +
  // unhybridized p orbital
  'lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE pz;' +
  'moveto 1.0 { 717 -696 -48 27.84} 100.0 0.0 0.0 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0 3.0 0.0 0.0;'
);

lesson.addInstruction(
  `The carbon's hybridized sp<sup>2</sup> orbitals overlap with an sp<sup>2</sup> hybridized orbital from the Oxygen and the s orbitals from the Hydrogens to form a &sigma;-bond network.`,
  // sp2 hybridized orbitals around the carbon
  'select @1; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a; lcaoCartoon CREATE sp2b; lcaoCartoon CREATE sp2c;' +
  // sp2 hybridized orbital around the oxygen
  'select @2; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.9; lcaoCartoon CREATE sp2a;' +
  // s orbitals of the hydrogen
  'select @3, @4; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon SCALE 0.7; lcaoCartoon CREATE s;' +
  'moveto 1.0 { 998 49 -27 76.45} 100.0 0.0 0.0 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0 3.0 0.0 0.0;'
);

lesson.addInstruction(
  'Meanwhile, the unhybridized p orbitals of the carbon and oxygen overlap.',
  'select @1, @2; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon SCALE 1.2; lcaoCartoon CREATE pz;' +
  'moveto 1.0 { 996 -94 10 15.56} 100.0 -6.3 0.2 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0 3.0 0.0 0.0;'
);

// TODO: Instruction displaying the pi-bond electron density between carbon and oxygen
lesson.addInstruction(
  'The overlap of these two unhybridized orbitals creates the electron density to create the above &pi;-bond. This &pi;-bond prevents the oxygen from rotating around its double-bond with the carbon.',
  'isosurface piBonds on;' +
  'moveto 0.6 { 1000 -22 -2 16.97} 132.25 0.0 0.0 {0.31848997 0.0 0.0} 2.60614 {0 0 0} 0 0 0 3.0 0.0 0.0;'
);

lesson.execute(0);