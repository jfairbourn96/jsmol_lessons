// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// Ball and stick model of benzene with no double bonds or delocalization shown.
lesson.addInstruction(
  `Aromatic hydrocarbons are cyclic hydrocarbons where the carbon atoms are joined by sigma bonds and electrons in pi bonds 
  that are delocalized over the entire molecule. Benzene, with the chemical formula C<sub>6</sub>H<sub>6</sub>, is the 
  simplest aromatic hydrocarbon.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

// Ball and stick model of benzene from above with no double bonds or delocalization shown, rotate so looking down the 
// plane of the molecule to visualize all atoms in the same plane
lesson.addInstruction(
  `The six carbon atoms form a six-membered ring structure, with the H atoms oriented outward. All of the atoms of benzene 
  are coplanar.`,
  ``
);

// Ball and stick model of benzene where actual double bonds are shown. Place numbers 1-6 on C atoms, db are between C1 
// and C2, C3 and C4, and C5 and C6.
lesson.addInstruction(
  `Each carbon atom in benzene has four valence electrons to contribute to chemical bond formation. In order to draw a 
  proper Lewis structure for benzene, an alternating sequence of double bonds must be drawn within the ring system so that 
  all valence electrons are accounted for and each C atom satisfies the octet rule. Shown here is the ball and stick 
  rendering of the Lewis structure where the double bonds are between the indicated C atoms. To keep track of where the 
  double bonds are shown, the C atoms have been numbered from 1 to 6 starting at upper left and moving clockwise. 
  In this structure, the double bonds are shown between C<sub>1</sub> and C<sub>2</sub>, C<sub>3</sub> and C<sub>4</sub>, 
  and C<sub>5</sub> and C<sub>6</sub>.`,
  ``
);

// Ball and stick model of benzene where actual double bonds are shown. keep numbers 1-6 on C atoms, and switch db to being 
// between C2 and C3, C4 and C5, and C6and C1.
lesson.addInstruction(
  `The double bonds could also have been drawn between C<sub>2</sub> and C<sub>3</sub>, C<sub>4</sub> and C<sub>5</sub>, and 
  C<sub>6</sub> and C<sub>1</sub> when drawing the Lewis structure of benzene, as shown here.`,
  ``
);

// Ball and stick model of benzene where dashed lines are shown for partial double bonds.
lesson.addInstruction(
  `Neither of the structures shown in states 3 and 4 are correct for describing the bonding used by the electrons in the pi 
  orbitals on the carbon atoms of benzene. Instead, benzene exhibits <strong>resonance</strong>, where the electrons in the 
  p orbitals giving rise to the pi bonds are delocalized over the entire molecule. In this view, the electrons in the p 
  orbitals are shown as being delocalized by using dashed lines between each C-C bond position. This rendition highlights 
  the fact that there are not true single and double bonds in benzene, but instead, each C-C bond is a composite of a 
  single bond and partial double bond, such that the bond order is 1.5.`,
  ``
);

// Rotate so looking at plane perpendicular to screen
lesson.addInstruction(
  `We will now examine the molecular geometry of benzene and the hybrid orbitals used for bonding.`,
  ``
);

// Show lewis structure from state 3. Highlight trigonal planar unit around C1
lesson.addInstruction(
  `Using either Lewis structure shown in states 3 and 4, it is apparent that there are three electron domains surrounding 
  each C atom of benzene. There are no lone pairs on the C atoms, so the electron domain and molecular geometries are the 
  same (each C atom is AX<sub>3</sub>E<sub>0</sub>). The molecular geometry of each carbon atom is therefore trigonal 
  planar. This is highlighted here for one of the carbon atoms in benzene.`,
  ``
);

// Structure with double bond shown as delocalized, rotate it to looking down plane of all atoms
lesson.addInstruction(
  `Since each C atom has a trigonal planar molecular geometry, all of the atoms in benzene are coplanar.`,
  ``
);

// Add bond angles to C1 and zoom in on it to see them. 120 is correct for all the angles in benzene
lesson.addInstruction(
  `All of the bond angles in benzene are exactly 120 degrees.`,
  ``
);

// Zoom into C1 and show sigma bonds to C2, C6, and H
lesson.addInstruction(
  `Each carbon atom is sp<sup>2</sup>-hybridized and forms sigma bonds with the two C atoms and single H atom to which it 
  is bonded. The single electron in the atomic orbital of each H atom is used for chemical bond formation.`,
  ``
);

// All sigma bonds shown. 
lesson.addInstruction(
  `All of the sigma bonds in benzene are shown here.`,
  ``
);

// Show p orbitals on each C atom
lesson.addInstruction(
  `Each C atom has an unhybridized p orbital containing a single electron. The p orbitals have lobes of electron density 
  above and below the plane of the benzene ring.`,
  ``
);

// Show delocalized ring systems formed from p orbitals
lesson.addInstruction(
  `As discussed above, there are no true double bonds in benzene. Instead, the electron density from the six electrons in 
  the p orbitals is delocalized over the entire molecule. Note how there are continuous (unbroken) circles or rings of 
  electron density in the benzene ring lying above and below the plane of the molecule. Such continuous circles, or rings, 
  of delocalized electron density are hallmarks of aromatic compounds.`,
  ``
);

lesson.execute(0);