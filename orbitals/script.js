// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
//
// Where the individual instruction descriptions and scripts are added.

let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// 1: Loads the molecule and draws the shapes then hides them. 
lesson.addInstruction(
  `Above is a 3-D version of the Lewis structure of the ethylene molecule.  You may rotate the molecule yourself by holding the mouse button down while dragging it around within the image frame.  Dark grey spheres represent C atoms and light grey (white) spheres represent hydrogen atoms.  Single bonds are represented as single sticks and double bonds as a pair of sticks.`,
  `reset;`
);

lesson.addInstruction(
  `Each carbon atom is surrounded by three "groups" as specified in the VSEPR model for molecular shapes. An atom surrounded by three groups will be sp<sup>2</sup> hybridized to get orbitals pointing in the correct directions to make bonds at 120 degrees from each other.`,
  `
  select @1; spin OFF; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon CREATE sp2a; lcaoCartoon CREATE sp2b; lcaoCartoon CREATE sp2c;
  moveto 0.5 { 0 0 -1000 46.0} 152.09 11.59 12.91 {4.0494995 0.7819999 -9.080999} 2.7203567 {0 0 0} 0 0 0  3.0 0.0 0.0;
  `
)

lesson.addInstruction(
  `Single bonds (&sigma;-bonds) are made by overlapping hybrid orbitals pointed along the bonds. The &sigma;-bond that is part of the double bond in ethylene is made by the overlapping sp<sup>2</sup> hybrids on the neighboring C atoms.`,
  `
  select @1; spin OFF; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon CREATE sp2a; select @2; lcaoCartoon COLOR TRANSLUCENT lightblue; lcaoCartoon CREATE sp2a;
  moveto 0.5 { 879 -8 -477 2.1} 152.09 0.0 0.0 {4.0494995 0.7819999 -9.080999} 2.7203567 {0 0 0} 0 0 0 3.0 0.0 0.0;
  `
)

lesson.addInstruction(
  `The bonds to the H atoms are made by overlapping the remaining hybrid orbitals with the H 1s orbitals. Now the whole &sigma;-bond network is displayed.`,
  `
  select @3, @4, @5, @6; lcaoCartoon COLOR TRANSLUCENT blue; lcaoCartoon CREATE s; select *; lcaoCartoon CREATE sp2a; lcaoCartoon CREATE sp2b; lcaoCartoon CREATE sp2c;
  moveto 0.5 { 879 -8 -477 2.1} 100 0.0 0.0 {4.0494995 0.7819999 -9.080999} 2.7203567 {0 0 0} 0 0 0 3.0 0.0 0.0;
  set spinX 20; set spinY 20; set spinZ 0;
  `
)

lesson.addInstruction(
  `&pi;-bonds are made by the side-on overlap of p orbitals on neighboring atoms. The p orbitals from the formation of sp<sup>2</sup> hybrid orbitals on the carbons are displayed in yellow.`,
  `
  spin OFF; select @1, @2; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon CREATE pz;
  moveto 0.5 { -983 130 -128 83.08}  93.05 0.0 0.0   {4.0494995 0.7819999 -9.080999} 2.7203567  {0 0 0} 0 0 0  3.0 0.0 0.0;
  `
)

lesson.addInstruction(
  `The red surface indicates how the two yellow p orbitals overlap to form the &pi;-bond.`,
  `
  spin OFF; isosurface piBonds ON;
  moveto 0.5 { -983 130 -128 83.08}  93.05 0.0 0.0   {4.0494995 0.7819999 -9.080999} 2.7203567  {0 0 0} 0 0 0  3.0 0.0 0.0;`
)

lesson.addInstruction(
  `This model shows the double bond as the &pi;-type overlap of the p orbitals (in red). The electron density above and below the bond in the &pi;-bond prevents the two ends of the molecule from rotating relative to each other bout the C-C double bond; thus maintaining the planar geometry of the molecule.`,
  `
  isosurface piBonds ON;
  select @1, @2; lcaoCartoon COLOR TRANSLUCENT yellow; lcaoCartoon CREATE pz;
  moveto 0.5 { -983 130 -128 83.08}  93.05 0.0 0.0   {4.0494995 0.7819999 -9.080999} 2.7203567  {0 0 0} 0 0 0  3.0 0.0 0.0;`
)

lesson.execute(0);

