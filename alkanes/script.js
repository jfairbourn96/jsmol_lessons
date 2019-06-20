// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

lesson.addInstruction(
  `This tutorial consists of a sequence of interactive molecular models, with explanations below them. This set of molecules illustrates the . Use your mouse or touch screen ` +
  `to rotate, zoom, and move the model on any of the states in this tutorial. Use the large arrow key to the right of the window to advance to the next model. Use the large arrow key to the ` +
  `left of the model to go to the previous model. Use the "reset page" button in the upper right to return to the default model view, if desired. Use the “reset tutorial” button (upper left) ` +
  `to return to the start of the tutorial at this instruction. Click the “advance” arrow to get started!`,
  `load pdb/decane.pdb; spacefill 20%; wireframe 0.15; spin on; frank on; background=white; antialiasDisplay=true; display *;` + lesson.shapeString
);

// Ball and stick model of n-decane where it is rotating, such that it rotates through the view looking down the chain
lesson.addInstruction(
  `Hydrocarbons, containing carbon and hydrogen, are the simplest organic compounds. Alkanes are acyclic, 
  saturated hydrocarbon for which all carbon-carbon bonds are single. All alkanes have the general formula 
  C<sub>n</sub>H<sub>2n+2</sub>. Linear alkanes are those that have a continuous chain of carbon atoms 
  connected together with terminal hydrogen atoms present on the carbon atoms in the chain. In this tutorial, 
  we will look at the structures of the linear alkanes where n, the number of carbon atoms, varies from 1 to 
  10.`,
  `load pdb/decane.pdb; spin on;`
);

// Ball and stick model of methane
lesson.addInstruction(
  `The simplest alkane is methane, CH<sub>4</sub>.`,
  `load pdb/methane.pdb;`
);

// Ball and stick model of methane with tetrahedron superimposed, and showing a bond angle
lesson.addInstruction(
  `The molecular geometry of methane is tetrahedral. The tetrahedral unit surrounding the central C atom is 
  highlighted here. All of the bond angles in methane are exactly 109.5 degrees. `,
  `load pdb/methane.pdb;`
);

// Show sigma bonds formed by orbital overlap
lesson.addInstruction(
  `The central C atom of methane is sp<sup>3</sup>-hybridized. The four hybrid sp<sup>3</sup> orbitals on C 
  form sigma bonds by overlapping with the 1s atomic orbitals on the terminal H atoms.`,
  `load pdb/methane.pdb;`
);

// Show bond dipoles (arrows) on ball and stick model for methane.
lesson.addInstruction(
  `Carbon and hydrogen have fairly similar electronegativity values, so each C-H bond is only weakly polar. 
  The weak bond dipoles cancel each other out completely due to the symmetric tetrahedral arrangement of the 
  H atoms. Methane is thus a nonpolar molecule`,
  `load pdb/methane.pdb;`
);

// Add isosurface as transparent colored surface on top of ball and stick
lesson.addInstruction(
  `Shown here is the isosurface for methane superimposed on the ball and stick model. The isosurface shows 
  the volume of space where the electron density in the molecule may be found, and provides a more accurate 
  representation of the actual 3-dimensional shape and size of the molecule.`,
  `load pdb/methane.pdb;`
);

// Could we highlight a H atom on methane and show it changing into a methyl group? This would look cool if so. Show ball and stick of ethane.
lesson.addInstruction(
  `The next simplest alkane is ethane, C<sub>2</sub>H<sub>6</sub>. It can be formed from methane by replacing 
  one of the terminal H atoms with a methyl group (CH<sub>3</sub>). `,
  `load pdb/ethane.pdb;`
);

// Highlight tetrahedral unit on C1 and also show sigma bonds
lesson.addInstruction(
  `Each of the two carbon atoms in ethane has a tetrahedral molecular geometry and is sp<sup>3</sup>-hybridized. 
  Looking ahead, all carbon atoms in all alkanes share these features. Shown here is the tetrahedral unit and 
  the sigma bonds present on C<sub>1</sub>.`,
  `load pdb/ethane.pdb;`
);

// Highlight tetrahedral unit on C2 and also show sigma bonds
lesson.addInstruction(
  `Shown here is the tetrahedral unit and the sigma bonds present on C<sub>2</sub>.`,
  `load pdb/ethane.pdb;`
);

// Rotate so looking down C-C bond, so the H atoms on each CH3 can be seen to be staggered
lesson.addInstruction(
  `There is free rotation about carbon-carbon sigma bonds, so the two methyl groups are able to freely rotate 
  about their sigma bond. The most stable conformation for ethane will be the one in which the H atoms on the 
  methyl groups are staggered relative to the H atoms on the other methyl group. This view looks down the 
  axis of the C-C bond to see how the H atoms are oriented in this conformation.`,
  `load pdb/ethane.pdb;`
);

// Add isosurface as transparent colored surface on top of ball and stick
lesson.addInstruction(
  `Shown here is the isosurface for ethane superimposed on the ball and stick model. Ethane, as well as all 
  alkanes, are nonpolar molecules due to the similar electronegativities of the C and H atoms and symmetry 
  imposed by the tetrahedral geometries of the C atoms.`,
  `load pdb/ethane.pdb;`
);

// Show ball and stick model of propane
lesson.addInstruction(
  `The linear straight-chain alkane containing 3 C atoms is propane, C<sub>3</sub>H<sub>8</sub>. For propane, 
  there are two methyl groups (CH<sub>3</sub>) at the two ends of the linear chain of carbon atoms, and a carbon 
  atom bonded to two H atoms (CH<sub>3</sub>) between the two methyl groups. The condensed structural formula 
  of propane (CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub>) emphasizes these features. `,
  `load pdb/propane.pdb;`
);

// Show ball and stick model of propane with tetrahedral unit around C2 highlighted.
lesson.addInstruction(
  `As for all alkanes, the carbon atoms of propane all have tetrahedral molecular geometries and are sp<sup>3</sup>
  -hybridized. The tetrahedral unit formed around C<sub>2</sub> is shown here. Note how for the central C 
  there are two H atoms and two C atoms at the corners of the tetrahedron.`,
  `load pdb/propane.pdb;`
);

// Add isosurface as transparent colored surface on top of ball and stick
lesson.addInstruction(
  `Shown here is the isosurface for propane superimposed on the ball and stick model. `,
  `load pdb/propane.pdb;`
);

// Show ball and stick for butane side on
lesson.addInstruction(
  `The linear straight-chain alkane containing 4 C atoms is butane, C<sub>4</sub>H<sub>10</sub>. Butane has 
  the condensed structural formula CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>. `,
  `load pdb/butane.pdb;`
);

// Add isosurface as transparent colored surface on top of ball and stick
lesson.addInstruction(
  `There is free rotation about each C-C bond of butane, allowing a large number of conformations to exist 
  based on how adjacent CH<sub>2</sub> and CH<sub>3</sub> groups are rotated. The most stable conformation of 
  butane will be the one in which the carbon chain is as fully extended as possible. By having an extended 
  chain of carbon atoms, overlap of electron density on the different C and H atoms in the chain is minimized. 
  This can be seen by drawing the isosurface for butane in the preferred fully extended conformational state. 
  For more details of conformational states in hydrocarbons, see the tutoroal titled “Conformations of butane”.`,
  `load pdb/butane.pdb;`
);

// Show pentane ball and stick
lesson.addInstruction(
  `For each linear alkane where the value of n increases by 1, an additional “CH<sub>2</sub>” unit will be 
  added to the linear chain of C atoms. Shown here is pentane, C<sub>5</sub>H<sub>12</sub>. Pentane has the 
  condensed structural formula CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>.`,
  `load pdb/pentane.pdb;`
);

// Show hexane ball and stick
lesson.addInstruction(
  `Shown here is hexane, C<sub>6</sub>H<sub>14</sub>. Hexane, like all the alkanes in this tutorial, is shown 
  in its most stable extended conformational state. Rotate this molecule, and the subsequent ones, using your 
  mouse or fingers to look down the long axis of the molecule formed by the chain.`,
  `load pdb/hexane.pdb;`
);

// Show heptane ball and stick
lesson.addInstruction(
  `Shown here is heptane, C<sub>7</sub>H<sub>16</sub>.`,
  `load pdb/heptane.pdb;`
);

// Show octane ball and stick
lesson.addInstruction(
  `Shown here is octane, C<sub>8</sub>H<sub>18</sub>.`,
  `load pdb/octane.pdb;`
);

// Show nonane ball and stick
lesson.addInstruction(
  `Shown here is nonane, C<sub>9</sub>H<sub>20</sub>. `,
  `load pdb/nonane.pdb;`
);

// Show decane ball and stick
lesson.addInstruction(
  `Shown here is decane, C<sub>10</sub>H<sub>20</sub>.`,
  `load pdb/decane.pdb;`
);

// Show decane ball and stick with isosurface
lesson.addInstruction(
  `This final view shows the isosurface added to decane. This view is looking down the long axis formed by the 
  extended chain.`,
  `load pdb/decane.pdb;`
);

lesson.execute(0);