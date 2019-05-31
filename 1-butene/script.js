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
  `1-butene, or but-1-ene, is a linear alkene and one of four isomers of butene with the chemical formula C<sub>4</sub>H<sub>8</sub>.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true; select @1, @2; bondorder 2;` 
);

lesson.addInstruction(
  `For 1-butene, the double bond lies between carbon atoms 1 and 2.`,
  // Ball and stick model of 1-butene w/ numbers next to atoms.
  `spin on;`
);

lesson.addInstruction(
  `The location of the double bond is what distinguishes this molecule from other isomers of butene.`,
  // Ball and stick model of 1-butene w/ closeup and highlight on double bond
  `set spinX 20; set spinY 20; set spinZ 0; spin on;`
);

lesson.addInstruction(
  `Carbon atom 1 (C<sub>1</sub>) has trigonal planar electron domain and molecular geometries, giving 120 degree bond angles for the H-C<sub>1</sub>-H angle 
  and the two H-C<sub>1</sub>-C<sub>2</sub> angles.`,
  // Ball and stick model of 1-butene with trigonal plane of C1 highlighted and 120 degree bond angles shown
  ``
);

lesson.addInstruction(
  `Like carbon 1, carbon atom 2 (C<sub>2</sub>) has trigonal planar electron domain and molecular geometries, giving 120 degree bond angles for the
  C<sub>1</sub>-C<sub>2</sub>-C<sub>3</sub>, C<sub>1</sub>-C<sub>2</sub>-H, and C<sub>3</sub>-C<sub>2</sub>-H angles.`,
  // Ball and stick model of 1-butene with trigonal plane of C2 highlighted and 120 degree gond angles shown
  ``
);

lesson.addInstruction(
  `Carbon atoms 1 and 2, their bonded hydrogen atoms, and carbon atom 3 all lie in a common plane.`,
  // Show plane formed by these atoms by drawing the rectangle bounded by H, H, H and C3 around C1 and C2
  `spin on;`
);

lesson.addInstruction(
  `This rendition shows the plane formed by these atoms rotated so it is lying perpendicular to the screen.`,
  // Rotate so looking at plane perpendicular to screen
  ``
)

lesson.addInstruction(
  `Both C<sub>3</sub> and C<sub>4</sub> have tetrahedral molecular geometries and are sp<sup>3</sup>-hybridized. The tetrahedral unit formed around 
  C<sub>3</sub> is shown here.`,
  // Tetrahedral unit around C3, show one 109.5 degree bond angle.
  ``
  )
  
lesson.addInstruction(
  `The tetrahedral unit formed around C<sub>4</sub> is shown here.`,
  // Tetrahedral unit around C4, show one 109.5 degree bond angle
  ``
)

lesson.addInstruction(
  `Carbon atoms 1 and 2 are sp<sup>2</sup>-hybiridized, leaving a single unhybridized p orbital with a single electron on each of C<sub>1</sub> and 
  C<sub>2</sub>.`,
  // Show p orbitals on C1 and C2
  ``
)

lesson.addInstruction(
  `The sigma bonds between C<sub>1</sub> and C<sub>2</sub> and their bonded atoms are represented as transparent blue lobes in this figure.`,
  // Show sigma bonds on C1 and C2
  ``
)

lesson.addInstruction(
  `The pi bond between C<sub>1</sub> and C<sub>2</sub> is formed from the overlap of the unhybridized p orbitals.`,
  // Show overlapping pi bond between C1 and C2
  ``
)

lesson.addInstruction(
  `As mentioned previously, C<sub>1</sub>, C<sub>2</sub>, their hydrogen atoms, and C<sub>3</sub> all lie in a common plane. The atoms are constrained
  to this plane since the overlapping p orbitals prevents rotation occurring about the bond between C<sub>1</sub> and C<sub>2</sub>.`,
  // As state 11, reshowing the rectangular plane present in states 5 and 6
  ``
)

lesson.execute(0);