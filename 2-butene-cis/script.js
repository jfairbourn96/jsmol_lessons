// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// TODO: Alter the instructions and add as many as necessary.
//Ball and stick models of cis and trans 2-butene shown together here. JUSTIN- ON THE SCANNED STATE DRAWINGS, I PUT THE METHYL GROUPS BEHIND. BUT MAYBE IT WOULD LOOK BETTER TO HAVE THEM IN FRONT FOR THE MODELS. IN WHICH CASE JUST SWITCH THE POSITIONS OF THE METHYLS AND HYDROGENS ON THE MODELS I DREW OUT.
lesson.addInstruction(
  `2-butene is a linear alkene containing 4 carbon atoms and where the double bond lies between 
    carbon atoms 2 and 3. 2-butene exists in the form of two geometric isomers named cis-2-butene 
    and trans-2-butene. For organic molecules, geometric isomers are isomers where functional 
    groups are either on the same side (cis-) or opposite sides (trans-) of the molecule. For 
    alkenes, the “sides” of the molecule are relative to the double bond. 2-butene is the 
    simplest alkene for which cis- and trans- isomers exist. In this tutorial we will examine 
    the structural features of the cis isomer.`,
  `reset; select *; display {*}; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

// Ball and stick model of cis butene with the methyl groups highlighted in green
lesson.addInstruction(
  `Shown here is cis-2-butene. The two atoms containing the double bond (C<sub>2</sub> and 
    C<sub>3</sub>) are each bonded to a H atom and a methyl group (CH3). The methyl groups on 
    C<sub>2</sub> and C<sub>3</sub> are on the same side of the molecule, with respect to the 
    double bond, for cis-2-butene. The prefix cis comes from the Latin term meaning “this side 
    of”; in other words, the same side of the molecule.`,
  ``
);

// Show tetrahedral unit surrounding C<sub>1</sub>
lesson.addInstruction(
  `Carbon atoms 1 and 4 have tetrahedral molecular geometries (AX4) and are sp3-hybridized. 
    Note that the numbering of the molecule could be started at either methyl group since they 
    will  have the same priority in numbering. The geometry about C<sub>1</sub> is highlighted 
    here.`,
  ``
);

// Show tetrahedral unit surrounding C<sub>4</sub>
lesson.addInstruction(
  `Carbon atoms 1 and 2 have tetrahedral molecular geometries (AX4) and are sp3-hybridized. 
    The geometry about C<sub>4</sub> is highlighted here.`,
  ``
);

// Ball and stick model of cis butene with the trigonal planar unit formed at C<sub>2</sub> highlighted
lesson.addInstruction(
  `Both carbon atoms 2 and 3 are sp2-hybridized and have trigonal planar electron domain and 
    molecular geometries (AX3E0). The trigonal plane formed around C<sub>2</sub> is shown here.`,
  ``
);

// Ball and stick model of cis butene with the trigonal planar unit formed at C<sub>3</sub> highlighted
lesson.addInstruction(
  `Both carbon atoms 2 and 3 are sp2-hybridized and have trigonal planar electron domain and 
    molecular geometries (AX3E0). The trigonal plane formed around C<sub>3</sub> is shown here.`,
  ``
);

// Show trigonal planes on both C<sub>2</sub> and C<sub>3</sub> at the same time
lesson.addInstruction(
  `Since both C<sub>2</sub> and C<sub>3</sub> have trigonal planar molecular geometries, 
    C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub>, C<sub>4</sub>, and the H atoms bonded to 
    C<sub>2</sub> and C<sub>3</sub> all lie in a common plane`,
  ``
)

// Show the plane defined by the rectangle formed by connecting C<sub>1</sub>, C<sub>4</sub>, H on C<sub>3</sub>, and H on C<sub>4</sub>
lesson.addInstruction(
  `Since both C<sub>2</sub> and C<sub>3</sub> have trigonal planar molecular geometries, 
    C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub>, C<sub>4</sub>, and the H atoms bonded to 
    C<sub>2</sub> and C<sub>3</sub> all lie in a common plane. Here the plane is shown bounded 
    by C<sub>1</sub>, C<sub>4</sub>, and the H atoms on C<sub>2</sub> and C<sub>3</sub>. `,
  ``
)

// Show sigma bonds on C<sub>2</sub>
lesson.addInstruction(
  `Carbon atoms 2 and 3 are sp2-hybridized. Carbon atom 2 forms sigma bonds to C<sub>1</sub>, 
    C<sub>3</sub>, and H.`,
  ``
)

// Show sigma bonds on C<sub>3</sub>
lesson.addInstruction(
  `Carbon atoms 2 and 3 are sp2-hybridized. Carbon atom 3 forms sigma bonds to C<sub>4</sub>, 
    C<sub>2</sub>, and H.`,
  ``
)

// Show p orbitals on C<sub>2</sub> and C<sub>3</sub>, with rectangular planar unit shown. 
lesson.addInstruction(
  `Carbon atoms 2 and 3 each contain an unhybridized p orbital that is perpendicular to the 
    atoms lying in the plane formed by C<sub>1</sub>, C<sub>3</sub>, and the H atoms bonded 
    to C<sub>2</sub> and C<sub>3</sub>. Each of these p orbitals contains a single electron.`,
  ``
)

// Show overlapping pi bond between C<sub>1</sub> and C<sub>2</sub>
lesson.addInstruction(
  `The pi bond between C<sub>1</sub> and C<sub>2</sub> is formed from the overlap of electron 
    density in the unhybridized p orbitals as shown here.`,
  ``
)

// Show overlapping pi bond between C<sub>1</sub> and C<sub>2</sub>, along with the rectangular plane, and outline the methyl groups again. Maybe draw a two headed arrow between them if this is easily done??
lesson.addInstruction(
  `The methyl groups are constrained to the same side of the double bond due to the presence 
    of the pi bond which prevents rotation about C<sub>2</sub> and C<sub>3</sub>.`,
  ``
)

lesson.execute(0);