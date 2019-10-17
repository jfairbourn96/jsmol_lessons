// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }

// Initialize the molecule atom expression groups
let methane = "WITHIN(MOLECUE, {@1})";

// the font, color, and offset options that you can configure echos with.
let defaultEchoOptions = "font echo 18; color echo black; set echo OFFSET { 0 1.4 0 }; ";

// Add script commands to the 
let initializeScript = "";
initializeScript += Lesson.echoAtAtom(1, "CH<sub>4</sub>", "methane", defaultEchoOptions);
initializeScript += `draw ID "roh_m_geo" LINE [@4, @3, @2] DIAMETER 20 COLOR LIGHTBLUE;`;
initializeScript += Lesson.drawNetDipole('dipole1', -1.5, "(atomno=1)","(atomno=2)", 0.05, "orange", 0.0, 0.0);
initializeScript += Lesson.drawNetDipole('dipole2', -1.5, "(atomno=3)","(atomno=2)", 0.05, "orange", 0.0, 0.0);
initializeScript += Lesson.drawTetrahedron(["@1", "@3", "@4", "@5"], 20, "YELLOW", "tetrahedron");
initializeScript += `select ${methane}; if ({${methane}}.partialcharge == 0){calculate partialcharge};`;

// add our new script to the end of the existing initialize script. This will re-execute everytime the page loads or restarts.
lesson.appendToInitializeScript(initializeScript);

// Add necessary commands to the reset script.
lesson.appendToResetScript("select *; ");
lesson.appendToResetScript("dipole * off; ");

lesson.addInstruction(
  `This tutorial consists of a sequence of interactive molecular models, with explanations, illustrating 
  details of alcohols. Use your mouse or touch screen to rotate, zoom, and move the model on any of the 
  states in this tutorial. Use the right arrow key to advance to the next model and accompanying 
  explanation. Use the left arrow key to go to the previous model. Use the "reset page" button to return 
  to the default model view, if desired, for the current model. Use the “reset tutorial” button to return 
  to the start of the tutorial at this instruction. Click the “advance” arrow to get started!`,
  `display add ${methane}; center ${methane};` + 
  // display the echo defined in the initializeScript
  `display $methane ADD; spin on;`
);

lesson.addInstruction(
  `This is a line drawn in the traditional way, but still created in the initializeScript.`,
  `draw roh_m_geo ON;`
);

lesson.addInstruction(
  `This tetrahedron was drawn with the new Lesson.drawTetrahedron() method.`,
  `draw tetrahedron ON;`
);

lesson.addInstruction(
  `These dipoles were drawn with the method.`,
  `dipole dipole1 ON; dipole dipole2 ON;`
);

lesson.addInstruction(
  `These orbitals are drawn with the new Lesson.drawOrbital() method.`,
  Lesson.drawOrbital(1, "PINK TRANSLUCENT", "S") +
  Lesson.drawOrbital(3, "BLUE TRANSLUCENT", "S") +
  Lesson.drawOrbital(4, "PURPLE TRANSLUCENT", "S") +
  Lesson.drawOrbital(5, "YELLOW TRANSLUCENT", "S") + 
  `spin on;`
);

lesson.addInstruction(
  `These orbitals are drawn with a single call to Lesson.drawOrbitals().`,
  Lesson.drawOrbitals(2, "RED TRANSLUCENT", ["sp3a", "sp3b", "sp3c", "sp3d"])
);

lesson.addInstruction(
  `All label text was drawn using the label methods for each atom.`,
  Lesson.label(1, "H<sub>1</sub>", 10, "RED") +
  Lesson.label(2, "C<sub>1</sub>", 30, "ORANGE") +
  Lesson.label(3, "H<sub>2</sub>", 15, "GREEN") +
  Lesson.label(4, "H<sub>3</sub>", 20, "BLUE") +
  Lesson.label(5, "H<sub>4</sub>", 25, "PURPLE")
);

lesson.addInstruction(
  `Echo text was draw here using the Lesson.echoAtWindow() method.`,
  Lesson.echoAtWindow("Methane is awesome!")
);

lesson.start();