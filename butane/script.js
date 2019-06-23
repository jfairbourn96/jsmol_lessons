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
  `This tutorial consists of a sequence of interactive molecular models, with explanations below them. This set of molecules illustrates the _____________. Use your mouse or touch screen ` +
  `to rotate, zoom, and move the model on any of the states in this tutorial. Use the large arrow key to the right of the window to advance to the next model. Use the large arrow key to the ` +
  `left of the model to go to the previous model. Use the "reset page" button in the upper right to return to the default model view, if desired. Use the “reset tutorial” button (upper left) ` +
  `to return to the start of the tutorial at this instruction. Click the “advance” arrow to get started!`,
  ``
);

//Show butane as frame 19 (anti)  in following orientation with spin on. Disregard the colors in this figure. 
// Label carbon atoms 1,2,3,4.
lesson.addInstruction(
  `n-Butane is the linear alkane containing four carbon atoms. All of the carbon atoms are connected by single 
  bonds, are sp<sup>3</sup>-hybridized, and have tetrahedral molecular geometries.`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

// Show butane in this orientation with C2 colored red and C3 colored green, spin off (still frame 19 and keep 
// C atom labels on), draw a curved arrow around the C2-C3 bond to highlight that this is the bond we will be 
// focusing on. You may have already figured this out, but to specify a carbon atom in a particular state, use
//  this command: 
// select C1/19 #1; color green; select C2/19 #2; color red. 
// To change the color for ALL the C atoms over all states, use this command:
// select @2; color green; select @1; color red; Here we want to change the colors for all states.
// It is important we have the right C atoms colored red and green to get the dihedral angles correct. So the 
// atom labelled C2 is going the be the front C in the newman projection, and the C labelled C1 is going to be 
// the rear one. This is correct:
// select @2; color green; select @1; color red
// so the atoms are assigned as follows:
// @2 is C2, @3 is C1, @1 is C3, @6 is C4
lesson.addInstruction(
  `There is free rotation about C-C single (sigma) bonds, so different conformations of butane can be formed 
  with different orientations for the hydrogen atoms and methyl groups. In this lesson we will illustrate this 
  by focusing on rotation about the C2-C3 bond. For reference, we will color C2 in red and C3 in green to keep 
  track of them.`,
  `spin on;`
);

// Starting with orientation of state 1, turn animation on and loop it continuously while displaying this 
// state. [anim mode loop 0;anim on]- this turns it on and loops. The command to stop the looping is anim 
// mode loop;anim off. 
lesson.addInstruction(
  `Rotation about the C2-C3 bond (as well as about C1-C2 and C3-C4) can occur very rapidly, with the rate of 
  rotation increasing at higher temperatures. `,
  `set spinX 20; set spinY 20; set spinZ 0; spin on;`
);

// Continue the loop animation in state 3, and then use a time delay (3 seconds?/move to reorient the 
// molecule so we are looking down the C2-C3 bond. Have it remain I that orientation for the remainder of this 
// state.
lesson.addInstruction(
  `Here we are looking at the rotation about the C2-C3 bond while looking down the C2-C3 bond .`,
  `set spinX 20; set spinY -10; set spinZ -10; spin on; isosurface vdw; isosurface translucent;`
);

// Reset to frame 19, looking down the axis of C2-C3 in newman. By convention the methyl group should be UP 
// for the front C in all newmans. Leave C2 and C3 as green and red but don’t change their sizes yet.
// moveto 1.0 { 1 -1000 9 89.75}  115.0 0.2 3.55  {0.753 -0.011099935 0.0038000345} 4.022871  {0 0 0} 0 0 0  3.0 0.0 0.0;
lesson.addInstruction(
  `The molecule shown in this orientation is in the form of a Newman projection. A newman projection shows 
  the orientation of two atoms, in this case C1 and C4, relative to each other while looking down the axis of 
  the bond those atoms are connected to (in this case the C2-C3 bond). `,
  ``
);

// Change sizes of the atoms C2 and C3, and reduce the wireframe to 10%. 
// select *; wireframe 10%; select C2 #2; spacefill 10%; select C1 #1; spacefill 35%
lesson.addInstruction(
  `When drawing Newman projections on paper, the back C is represented by a solid circle (red here), while the 
  front C is represented by a dot (green here). In this figure the sizes of C2 and C3 have been changed to 
  mimic the Newman projection. The wireframe connections have also been reduced in size to mimic the Newman 
  projection.`,
  ``
);

// Start with previous state (newman looking down C2-C3, then rotate to side on over 2 seconds, pause 2 seconds, 
// then move to reverse newman (looking down C3-C2) over 2 seconds, pause again, then back to standard newman.
// moveto  2.0 { 18 -999 -47 11.65}  115.0 0.2 3.55  {0.753 -0.011099935 0.0038000345} 4.022871 {0 0 0} 0 0 0  3.0 0.0 0.0; delay 2; 
// moveto 2.0 { 22 1000 17 87.89} 115.0 0.2 3.55   {0.753 -0.011099935 0.0038000345} 4.022871 {0 0 0} 0 0 0 3.0 0.0 0.0; delay 2; 
// moveto 2.0 { 1 -1000 9 89.75} 115.0 0.2 3.55  {0.753 -0.011099935 0.0038000345} 4.022871 {0 0 0} 0 0 0   3.0 0.0 0.0;
lesson.addInstruction(
  `Note how the Newman projection is set up to view the orientation of the C1 carbon (in front) relative to 
  the C4 carbon (in back) while sighting down the axis of the C2-C3 bond.`,
  ``
);

// Add dihedral angle and its value (180 degrees) to the newman projection for frame 17, retaining the 
// wireframe and spacefill changes we made to view the newman projection. Keep the rearmost methyl group at 
// upward vertical position for all the states where we show angles.  I don’t know the command to display the
// dihedral angle, but it can be displayed in jmol.jar by right clicking and selecting measurement and dihedral 
// angle. The dihedral angle display by default as a dashed line with the degree angle shown. It would be 
// nice if we could draw a curved arrow between the dashed lines to highlight the angle?
lesson.addInstruction(
  `A <strong>dihedral angle</strong>, or <strong>torsion angle</strong>, is the angle formed between the front 
  and rear atoms connected to two bonded atoms that are being viewed down the bond axis. For the C2-C3 bond of 
  butane, the torsion angle is the angle observed between C1 in the front and C4 in the back when looking down 
  the axis of the C2-C3 bond. The torsion angle for this particular conformational state of butane is shown 
  here. In this conformation, C3 and C4 are as far away from each other as possible, reflected in the torsion 
  angle being 180 degrees. This particular conformation is referred to as a <strong>staggered</strong> 
  conformation, and more specifically, as the <strong>anti</strong> conformation, where the two methyl groups 
  (C1 and C4) are spatially as far away from each as possible.`,
  ``
);

//Add an animation to rotate from anti to eclipsed in the newman projection.
lesson.addInstruction(
  `In this animation, butane is being rotated about the C2-C3 bond to the point where the torsion angle for 
  C1 and C4 has a value of 0 degrees. In this conformation, the C1 and C4 atoms are said to be <strong>eclipsed
  </strong>, as they are as spatially close to one another as possible. `,
  ``
);

// Go back to default view of butane (normal wireframe and ball and stick). Then add the “dots” for the methyl 
// group C and H atoms at 100% to see the actual sizes of the electron densities. Color the C1 dots green and 
// the C4 dots red. Something like this:
// select *; color cpk; spacefill 20%; wireframe 0.15; select @6, @9, @10, @11; color red; dots; select @3, @12, @13, @14; color green; dots; spin y
lesson.addInstruction(
  `The eclipsed conformation of butane is a high energy state, and thermodynamically unfavorable, due to the 
  steric hindrance imposed by having the methyl groups so close together. In this state the electron densities 
  of the methyl groups are shown superimposed on the ball and stick model to highlight the steric hindrance 
  imposed by having the groups so close together.`,
  ``
);

// Set state 10 to frame 19
lesson.addInstruction(
  `The anti conformation of butane is the lowest energy and most thermodynamically favorable state. Rotate 
  the molecule using your mouse or fingers to view the electron surfaces on the C1 and C4 methyl groups using 
  different views.`,
  ``
);

// Animate to frame 7 and add dihedral angle. Leave the dots on so the surface can be seen.  If set up properly,
// the front methyl in green should stay fixed at the vertical position, and the back methyl should rotate 
// clockwise. Frame 7 should give the 60 degree angle and gauche.
lesson.addInstruction(
  `Conformations of butane with dihedral angles between 0 and 180 degrees, and between 180 and 360 degrees, 
  will have energies intermediate between the lowest and highest energy anti and eclipsed states. Shown here 
  is the Gauche conformation where the dihedral angle is 60 degrees. Note how in this conformation C4 is 
  staggered with respect to the C1 C and one of the H atoms on C2.`,
  ``
);

// Animate to frame 13 and add dihedral angle. turn on the dots for the H that clashes with the red methyl.  
// Color the dots something like purple
lesson.addInstruction(
  `Rotation about the C2-C34 bond to a torsion angle of 120 degrees gives an eclipsed conformation where C4 
  sterically clashes with one of the H atoms on C2. Use your mouse or fingers to rotate the model to different 
  orientations to view the steric hindrance.`,
  ``
);

// Animate to frame 25 and add dihedral angle. turn on the dots for the H that clashes with the red methyl at 
// that position.  Color the dots purple. 
lesson.addInstruction(
  `Further rotating about C2-C3 in the clockwise direction, we will pass through the thermodynamically favored 
  anti conformation, then encounter another eclipsed state (with respect to an H atom) when the dihedral angle 
  is 240 degrees.`,
  ``
);

// Animate to frame 31 and add dihedral angle. turn on the dots for the H that clashes with the red methyl at 
// that position.  Color the dots purple. 
lesson.addInstruction(
  `Further rotating about C2-C3 in the clockwise direction, we will encounter another Gauche when the dihedral 
  angle is 300 degrees.`,
  ``
);

// Turn on continuous looping animation with translucent isosurface present. Set spin to two axes directions 
// so the streric clashes can be seen in different orientations as the angle changes. We will leave this as 
// the final state. 
// select *;  isosurface VDW translucent 250 red; anim mode loop 0;anim on
// fopr some reason, the isosurface only stays omn for the initial state. We need to figure out how to keep 
// the isosurface on for all states. I just pasted the command I used above for reference.
lesson.addInstruction(
  `In this view, the isosurface is superimposed on the ball and stick model. Watch how the regions of electron 
  density overlap change as the torsion angle about C2-C3 cycles from 0 to 360 degrees.`,
  ``
);

lesson.execute(0);