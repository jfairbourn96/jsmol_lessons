// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// TODO: Alter the instructions and add as many as necessary.
//Ball and stick models of cis and trans 2-butene shown together here. 
lesson.addInstruction(
  `2-butene is a linear alkene containing 4 carbon atoms and where the double bond lies between 
    carbon atoms 2 and 3. 2-butene exists in the form of two geometric isomers named cis-2-butene 
    and <em>trans</em>-2-butene. For organic molecules, geometric isomers are isomers where functional 
    groups are either on the same side (<em>cis</em>-) or opposite sides (<em>trans</em>-) of the molecule. For 
    alkenes, the “sides” of the molecule are relative to the double bond. 2-butene is the 
    simplest alkene for which <em>cis</em>- and <em>trans</em>- isomers exist. In this tutorial we will examine 
    the structural features of the <em>cis</em> isomer.`,
  `reset; select *; display {*}; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

// Ball and stick model of <em>trans</em> butene with the methyl groups highlighted in green
lesson.addInstruction(
  `Shown here is <em>trans</em>-2-butene. The two atoms containing the double bond (C<sub>2</sub> and 
    C<sub>3</sub>) are each bonded to a H atom and a methyl group (CH3). The methyl groups (in green) 
    on C<sub>2</sub> and C<sub>3</sub> are on opposite sides of the molecule, with respect to the 
    double bond, for <em>trans</em>-2-butene. The prefix <em>trans</em> comes from the Latin term meaning
    "other side of."`,
  `select @13, @15, @16, @17, @20, @22, @23, @24; lcaoCartoon color translucent green; lcaoCartoon create s;` +
  `select @13, @14, @18, @20; label display;` +
  `moveto /* time, axisAngle */ 1.0 {0 0 1 0} /* zoom, translation */  201.14 -30.8 17.4  /* center, rotationRadius */ {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;`
);

// Show tetrahedral unit surrounding C<sub>1</sub>
lesson.addInstruction(
  `Carbon atoms 1 and 4 have tetrahedral molecular geometries (AX<sub>4</sub>) and are sp<sup>3</sup>-hybridized. 
    Note that the numbering of the molecule could be started at either methyl group since they 
    will  have the same priority in numbering. The geometry about C<sub>1</sub> is highlighted 
    here.`,
  `select *; color translucent 0.5; draw geo1 on;` +
  `moveto /* time, axisAngle */ 1.0 { -16 999 -28 41.63} /* zoom, translation */  351.79 -22.2 51.6  /* center, rotationRadius */ {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;`
);

// Show tetrahedral unit surrounding C<sub>4</sub>
lesson.addInstruction(
  `Carbon atoms 1 and 2 have tetrahedral molecular geometries (AX<sub>4</sub>) and are sp<sup>3</sup>-hybridized. 
    The geometry about C<sub>4</sub> is highlighted here.`,
  `select *; color translucent 0.5; draw geo2 on;` +
  `moveto /* time, axisAngle */ 1.0 { -354 -730 -584 51.14} /* zoom, translation */  266.0 -58.8 -6.0  /* center, rotationRadius */ {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 /* navigation center, translation, depth */ {0 0 0} 0 0 0 /* cameraDepth, cameraX, cameraY */  3.0 0.0 0.0;`
);


// Ball and stick model of cis butene with the trigonal planar unit formed at C<sub>2</sub> highlighted
lesson.addInstruction(
  `Both carbon atoms 2 and 3 are sp<sup>2</sup>-hybridized and have trigonal planar electron domain and 
    molecular geometries (AXsub>3</sub>E<sub>0</sub>). The trigonal plane formed around C<sub>2</sub> is shown here.`,
  `select *; color translucent 0.5; draw geo3 on;` +
  `moveto 1.0 { 0 0 -1000 8.0} 201.14 -34.8 15.1 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

// Ball and stick model of cis butene with the trigonal planar unit formed at C<sub>3</sub> highlighted
lesson.addInstruction(
  `Both carbon atoms 2 and 3 are sp<sup>2</sup>-hybridized and have trigonal planar electron domain and 
    molecular geometries (AX<sub>3</sub>E<sub>0</sub>). The trigonal plane formed around C<sub>3</sub> is shown here.`,
  `select *; color translucent 0.5; draw geo4 on;` +
  `moveto 1.0 { 0 0 -1000 8.0} 201.14 -34.8 15.1 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

// Show trigonal planes on both C<sub>2</sub> and C<sub>3</sub> at the same time
lesson.addInstruction(
  `Since both C<sub>2</sub> and C<sub>3</sub> have trigonal planar molecular geometries, 
    C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub>, C<sub>4</sub>, and the H atoms bonded to 
    C<sub>2</sub> and C<sub>3</sub> all lie in a common plane`,
  `select *; color translucent 0.5; draw geo3 on; draw geo4 on;` +
  `moveto 1.0 { 0 0 -1000 8.0} 201.14 -34.8 15.1 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// Show the plane defined by the rectangle formed by connecting C<sub>1</sub>, C<sub>4</sub>, H on C<sub>3</sub>, and H on C<sub>4</sub>
lesson.addInstruction(
  `Since both C<sub>2</sub> and C<sub>3</sub> have trigonal planar molecular geometries, 
    C<sub>1</sub>, C<sub>2</sub>, C<sub>3</sub>, C<sub>4</sub>, and the H atoms bonded to 
    C<sub>2</sub> and C<sub>3</sub> all lie in a common plane. Here the plane is shown bounded 
    by C<sub>1</sub>, C<sub>4</sub>, and the H atoms on C<sub>2</sub> and C<sub>3</sub>. `,
  `draw p1 on; draw p2 on;`  +
  `moveto 1.0 { -530 299 793 13.21} 231.31 -31.0 31.6 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// Show sigma bonds on C<sub>2</sub>
lesson.addInstruction(
  `Carbon atoms 2 and 3 are sp<sup>2</sup>-hybridized. Carbon atom 2 forms sigma bonds to C<sub>1</sub>, 
    C<sub>3</sub>, and H.`,
  `select @19; lcaoCartoon color translucent blue; lcaoCartoon scale 1.0; lcaoCartoon create s;` +
  `select @14, @18; lcaoCartoon create sp2a; select @14; lcaoCartoon create sp2b; lcaoCartoon create sp2c;` +
  `select @13; lcaoCartoon create sp3a;` +
  `moveto 1.0 { -467 391 -793 13.22} 266.0 -36.8 23.8 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// Show sigma bonds on C<sub>3</sub>
lesson.addInstruction(
  `Carbon atoms 2 and 3 are sp2-hybridized. Carbon atom 3 forms sigma bonds to C<sub>4</sub>, 
    C<sub>2</sub>, and H.`,
  `select @21; lcaoCartoon color translucent blue; lcaoCartoon scale 1.0; lcaoCartoon create s;` +
  `select @14, @18; lcaoCartoon create sp2b; select @18; lcaoCartoon create sp2a; lcaoCartoon create sp2c;` +
  `select @20; lcaoCartoon create sp3a;` +
  `moveto 1.0 { -467 391 -793 13.22} 266.0 -57.3 21.4 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// Show p orbitals on C<sub>2</sub> and C<sub>3</sub>, with rectangular planar unit shown. 
lesson.addInstruction(
  `Carbon atoms 2 and 3 each contain an unhybridized p orbital that is perpendicular to the 
    atoms lying in the plane formed by C<sub>1</sub>, C<sub>3</sub>, and the H atoms bonded 
    to C<sub>2</sub> and C<sub>3</sub>. Each of these p orbitals contains a single electron.`,
  `select @14, @18; lcaoCartoon color translucent yellow; lcaoCartoon create pz;` +
  `draw p1 on; draw p2 on;` +
  `moveto 1.0 { -987 29 -158 78.61} 266.0 -43.7 -1.9 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)
  
// Show overlapping pi bond between C<sub>1</sub> and C<sub>2</sub>
lesson.addInstruction(
  `The pi bond between C<sub>1</sub> and C<sub>2</sub> is formed from the overlap of electron 
  density in the unhybridized p orbitals as shown here.`,
  `isosurface piBond on;` +
  `moveto 1.0 { -987 29 -158 78.61} 266.0 -43.7 -1.9 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// Show overlapping pi bond between C<sub>1</sub> and C<sub>2</sub>, along with the rectangular plane, and outline the methyl groups again. Maybe draw a two headed arrow between them if this is easily done??
lesson.addInstruction(
  `The methyl groups are constrained to opposite sides of the double bond in <em>trans</em>-2-butene
  due to the presence of the pi bond which prevents rotation about C<sub>2</sub> and C<sub>3</sub>.`,
  `isosurface piBond on; draw p1 on; draw p2 on;` +
  `select @13, @15, @16, @17, @20, @22, @23, @24; lcaoCartoon color translucent green; lcaoCartoon create s;`  +
  `moveto 1.0 { -921 390 14 49.58} 231.31 -29.8 7.4 {-4.787199554327145 0.2704449749676541 -0.03143999704594197} 6.6931617841719175 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

lesson.execute(0);