// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

// TODO: If there are any shapes to draw for this lesson, draw them here.
lesson.shapeString = ``;

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// TODO: Alter the instructions and add as many as necessary.
lesson.addInstruction(
  `Acetic acid is an organic acid (carboxylic acid) with the chemical formula C<sub>2</sub>H<sub>6</sub>O<sub>2</sub>. The chemical formula is often written in the form 
  CH<sub>3</sub>COOH to highlight the different chemical environments of the carbon and oxygen atoms.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

lesson.addInstruction(
  `Acetic acid is referred to as a <strong>carboxylic acid</strong> based on structural features of the molecule called <strong>functional groups</strong>. Functional 
  groups in organic molecules are combinations of atoms with recognizable chemical structures and characteristic properties. An <strong>alkyl</strong> group consists of 
  one or more C atoms bonded to H atoms through single bonds. A <strong>methyl</strong> group is the simplest alkyl group, consisting of three H atoms bonded to a C atom 
  (CH3). A <strong>carbonyl</strong> group consists of a C atom bonded to an O atom by a double bond(C=O). A <strong>hydroxyl</strong> group contains an O atom bonded to a 
  H atom (OH). When a hydroxyl group is bonded to the C atom of a carbonyl group, a new combined functional group called a <strong>carboxyl</strong> group is created. A 
  carboxylic acid is an organic molecule consisting of an alkyl group bonded to the carbon atom of a carboxyl group. Acetic acid, thus, contains methyl- and carboxyl-
  functional groups. In this view, the methyl group is highlighted in green and the carboxyl group in red.`,
  `select @2, @6, @7, @8; color translucent 0.75;` +
  `select @1, @3, @4, @5; lcaocartoon color translucent 0.5 green create s; ` +
  `moveto 1.0 { -351 936 36 54.09} 201.14 25.3 -2.0  {1.1176748958271596 0.21383997998868598 0.011849998656842997} 3.586651862103386  {0 0 0} 0 0 0  3.0 0.0 0.0;`
)

lesson.addInstruction(
  `In this view, the atoms forming the carboxyl group group are highlighted in red.`,
  `select @1, @3, @4, @5; color translucent 0.75;` +
  `select @2, @6, @7, @8; lcaocartoon color translucent 0.5 red create s; ` +
  `moveto 1.0 { 365 -923 122 8.24}  174.9 -24.4 3.6  {1.1176748958271596 0.21383997998868598 0.011849998656842997} 3.586651862103386 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The next set of structures will explore the electron domain and molecular geometries for the atoms present in acetic acid. `,
  `moveto  1.0 {0 0 1 0} 100.0 0.0 0.0 {1.117675 0.21383995 0.01184997} 3.5866518 {0 0 0} 0 0 0  3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The C atom in the methyl group is bonded to four other atoms (3 H and 1 C) and has no lone pairs so it has a tetrahedral electron domain and molecular geometry (AX4). 
  The tetrahedral unit is highlighted here.`,
  `draw e_geo1 on; select *; color translucent 0.5; ` +
  `moveto 1.0 { -941 -200 273 157.38} 132.25 12.2 -1.64 {1.117675 0.21383995 0.01184997} 3.5866518  {0 0 0} 0 0 0  3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The bond angles in a molecule with geometry AX<sub>4</sub> are all 109.5 degrees.`,
  `measure (@3) (@1) (@4); measure (@3) (@1) (@5); measure (@4) (@1) (@5); measure (@3) (@1) (@2);` +
  `moveto  1.0 { 0 1000 0 45.0} 100.0 0.0 0.0  {1.117675 0.21383995 0.01184997} 3.5866518 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The O atom in the hydroxyl group is bonded to two atoms (C and H) and has two lone pairs, so it has a tetrahedral electron-domain geometry and a bent molecular geometry 
  (AX<sub>2</sub>E<sub>2</sub>). The lone pairs are represented by transparent lobes in this structure.`,
  `select @6; lcaocartoon color translucent green; lcaocartoon scale 1.2; lcaocartoon create sp3c; lcaocartoon create sp3d;` +
  `moveto 1.0 { 146 -978 146 91.25} 152.09 0.0 15.0 {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The tetrahedral electron-domain geometry surrounding the O atom of the hydroxyl group is highlighted here. `,
  `select @6; lcaocartoon color translucent green; lcaocartoon scale 1.2; lcaocartoon create sp3c; lcaocartoon create sp3d;` +
  `draw e_geo2 on; select *; color translucent 0.5;` +
  `moveto 1.0 { -483 -796 366 60.05} 235.93 -25.41 42.05  {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The H-O-C bond angle is compressed relative to that in a perfect tetrahedron due to the lone pairs spreading out more in space than bonded pairs.`,
  `measure (@7) (@6) (@2);` +
  `moveto 1.0 {0 0 1 0}   132.25 -17.28 8.81  {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The C atom in the carboxyl group is bonded to two other atoms via single bonds (the methyl C and the hydroxyl O) and one atom via a double bond (the carbonyl O) for a 
  total of three bonded and no non-bonded electron domains (AX<sub>3</sub>). Accordingly, this C has both trigonal planar electron-domain and molecular geometries. The 
  trigonal planar unit is highlighted here.`,
  `draw e_geo3 on; select *; color translucent 0.5;` +
  `moveto 1.0 { 1000 0 0 0.74}  132.25 -10.16 -6.35 {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The O atom in the carboxyl group that is double-bonded to carbon has two lone pairs, so it has a trigonal planar electron domain geometry (AXE<sub>2</sub>). The trigonal 
  planar unit surrounding the electron domains of O is highlighted here.`,
  `select @8; lcaoCartoon scale 1.2; lcaoCartoon COLOR TRANSLUCENT GREEN; lcaoCartoon CREATE sp2b; lcaoCartoon CREATE sp2c;` +
  `select *; color translucent 0.5; draw e_geo4 on;` +
  `moveto 1.0 {0 0 1 0} 174.9 -31.71 -34.22 {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `Now that we have covered the geometries about the atoms present in acetic acid, we will explore the types of chemical bonds and orbital hybridizations responsible for 
  these geometries.`,
  `moveto  1.0 {0 0 1 0} 100.0 0.0 0.0  {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.addInstruction(
  `The carbon atom in the methyl group of acetic acid is surrounded by four electron domains (AX<sub>4</sub>), so the orbital hybridization is sp<sup>3</sup>. This carbon 
  atom forms sigma bonds to the terminal H atoms by overlapping the sp<sup>3</sup> hybrid orbitals (in blue) with the 1s atomic orbitals of the H atoms (in red) as shown here.`,
  `select @1; lcaoCartoon SCALE 1.0; lcaoCartoon COLOR TRANSLUCENT BLUE; lcaoCartoon CREATE sp3b; lcaoCartoon CREATE sp3c; lcaoCartoon CREATE sp3d;` +
  `select @3, @4, @5; lcaoCartoon COLOR TRANSLUCENT RED; lcaoCartoon CREATE s;` +
  `moveto  1.0 { -50 999 -7 51.24} 132.25 0.0 0.0  {0.9036099 0.44890496 -0.23449996} 3.6789606 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// oxygen 1 lobe 1 point: {2.755, 1.575, 0.475}
// oxygen 1 lobe 2 point: {2.755, 1.05, -1.275}
// oxygen 2 lobe 1 point: {1.66, -2, 0.51}
// oxygen 2 lobe 2 point: {3.37, -0.86, 0.21}

lesson.execute(0);