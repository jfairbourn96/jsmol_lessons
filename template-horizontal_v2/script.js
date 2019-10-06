// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }

// Initialize the molecule atom expression groups
let water = "WITHIN(MOLECULE, {@1})";
let methane = "WITHIN(MOLECULE, {@4})";
let ethane = "WITHIN(MOLECULE, {@14})";
let propane = "WITHIN(MOLECULE, {@32})";
let methanol = "WITHIN(MOLECULE, {@12})";
let ethanol = "WITHIN(MOLECULE, {@23})";
let propanol_1 = "WITHIN(MOLECULE, {@44})";
let propanol_2 = "WITHIN(MOLECULE, {@55})";
let butanol_1 = "WITHIN(MOLECULE, {@68})";
let butanol_2 = "WITHIN(MOLECULE, {@82})";
let methyl_2_propanol_1 = "WITHIN(MOLECULE, {@116})";
let methyl_2_propanol_2 = "WITHIN(MOLECULE, {@131})";
let pentanol_1 = "WITHIN(MOLECULE, {@102})";
let methanol_e = "WITHIN(MOLECULE, {@146})";
let ethanol_e = "WITHIN(MOLECULE, {@154})";
let propanol_e = "WITHIN(MOLECULE, {@165})";

let defaultEchoOptions = "font echo 18; color echo black; set echo OFFSET { 0 1.4 0 }; ";
let initializeScript = "";

initializeScript += Lesson.echoAtAtom(13, "methanol", "methanol", defaultEchoOptions);
initializeScript += Lesson.echoAtAtom(25, "ethanol", "ethanol", defaultEchoOptions);
initializeScript += Lesson.echoAtAtom(53, "1-propanol", "propanol_1", defaultEchoOptions);
initializeScript += Lesson.echoAtAtom(83, "2-butanol", "butanol_2", defaultEchoOptions);
initializeScript += Lesson.echoAtAtom(10, "methanol\nCH<sub>3</sub>OH", "methanol_label", defaultEchoOptions);
initializeScript += Lesson.echoAtAtom(24, "ethanol\nCH<sub>3</sub>CH<sub>2</sub>OH", "ethanol_label", defaultEchoOptions);
initializeScript += Lesson.echoAtAtom(47, "1-propanol\nCH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH", "propanol_label", defaultEchoOptions);
initializeScript += Lesson.drawTetrahedron(["{-3.2390959488399425 1.6821255184672737 -2.2861656272575708}", "{-1.979412745578614 2.3273524428270953 -2.5771292056886708}", "@9", "@31"], 20, "YELLOW", "roh_geo");
initializeScript += `draw ID "roh_m_geo" LINE {-3.0022951944686245 4.112766334783039 -1.1072201776124508} {-2.5811797598273105 2.1917297960224307 -1.9090898218827421} {-1.814473200154283 1.2571666979700984 -0.5774068262009999} DIAMETER 20 COLOR LIGHTBLUE;`;
initializeScript += Lesson.drawNetDipole('mBond1', -1.5, "{-2.5811797598273105 2.1917297960224307 -1.9090898218827421}", "(atomno=31)", 0.05, "orange", 0.0, 0.0);
initializeScript += Lesson.drawNetDipole('mBond2', -1.5, "{-2.5811797598273105 2.1917297960224307 -1.9090898218827421}","(atomno=9)", 0.05, "orange", 0.0, 0.0);
initializeScript += Lesson.drawNetDipole('mBond3', 1.5, "{-2.380012762216265 2.3397851900885036 -1.0685102127732815}", "{-2.8350527071865903 2.0665382403379997 -2.85505489362865}", 0.05, "red", 0.0, 0.0);
initializeScript += `select ${methanol_e}; if ({${methanol_e}}.partialcharge == 0){calculate partialcharge};`;
initializeScript += `select ${ethanol_e}; if ({${ethanol_e}}.partialcharge == 0){calculate partialcharge};`;
initializeScript += `select ${propanol_e}; if ({${propanol_e}}.partialcharge == 0){calculate partialcharge};`;
initializeScript += `select ${pentanol_1}; if ({${pentanol_1}}.partialcharge == 0){calculate partialcharge};`;

lesson.appendToInitializeScript(initializeScript);

// Add necessary commands to the reset script.
lesson.appendToResetScript("select *; ");
lesson.appendToResetScript("color atom cpk; ");
lesson.appendToResetScript("spacefill reset; ");
lesson.appendToResetScript("dipole * off; ");
lesson.appendToResetScript("hbonds off;");

lesson.addInstruction(
  `This tutorial consists of a sequence of interactive molecular models, with explanations, illustrating details of alcohols. Use your mouse or touch screen to rotate, zoom, and move the model on any of the states in this tutorial. Use the right arrow key to advance to the next model and accompanying explanation. Use the left arrow key to go to the previous model. Use the "reset page" button to return to the default model view, if desired, for the current model. Use the “reset tutorial” button to return to the start of the tutorial at this instruction. Click the “advance” arrow to get started!`,
  `select ${methanol}, ${ethanol}, ${propanol_1}, ${butanol_2}; display selected; center selected;` +
  `display $methanol; display $ethanol; display $propanol_1; display $butanol_2; ` +
  `moveto 0.0 { -386 807 -447 33.57} 152.09 -9.1 1.4 {1.1255784666510318 0.022078093109455847 -0.1404902250390892} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `Alcohols are organic compounds containing one or more hydroxyl functional groups (-OH) bonded to carbon. The simplest alcohols are those formed by substituting a single H atom on an alkane with a hydroxyl group. With a single hydroxyl group present, an alcohol is a <strong>monoalcohol</strong>. <strong>Polyalcohols</strong>, with more than one hydroxyl group, can be formed by substituting more than one H atom on an alkane with hydroxyl groups. In this lesson we will be focusing on the structures of representative monoalcohols, which we will refer to as “alcohols” throughout.<br/>The simplest alcohol, methanol, will be formed by taking the simplest alkane, methane, and replacing one H atom with a hydroxyl group. This replacement is illustrated here.`,
  `select ${methane}; display selected; center selected; moveto 0.0 { 814 295 -500 27.88} 1636.69 -8.6 -4.5 {-0.6459019397286032 6.726701373941719 -0.4332319595222314} 30.771977867220333 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("methane") +
  `delay 2;` + Lesson.drawOrbital(5, "GREEN TRANSLUCENT", "S") +
  `delay 2; display ${methanol}; moveto 0.0 { 791 98 604 42.29} 1423.19 -4.2 -3.4 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("methanol") +
  `delay 2; loop 0;`
);

lesson.addInstruction(
  `Alcohols are named by taking the name of the alkane from which it was derived, dropping the last letter in the name (“e”) and replacing it with “ol”.`,
  `display ${methane}; moveto 0.0 { 413 -496 -764 16.17} 1423.21 0.0 0.0 {-0.6459019397286032 6.726701373941719 -0.4332319595222314} 30.771977867220333 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is methane") +
  `delay 2; select @5; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${methanol}; moveto 0.0 { 423 43 905 39.56} 1237.56 0.0 0.0 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is methanol") +
  `delay 3.5;` +
  `display ${ethane}; moveto 0.0 { -593 722 356 63.98} 1076.14 -11.6 -13.9 {3.206785951439305 6.838458113368992 0.22251372916254092} 30.98163116248421 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is ethane") +
  `delay 2; select @19; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${ethanol}; moveto 0.0 { -113 -747 656 97.38} 935.77 -8.8 -15.1 {-0.28069552933436426 1.5892798518880449 0.9710210206023215} 26.015156809862827 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is ethanol") +
  `delay 2; loop 0;`
);

lesson.addInstruction(
  `The position of the hydroxyl group must be indicated for alcohols formed from alkanes with chains longer than two C atoms in length. This is illustrated here with propane. If a H atom attached to a terminal C atom (at C<sub>1</sub>) is replaced by a hydroxyl group, the alcohol is named 1-propanol. The “1-“ indicates the position of the hydroxyl group in the longest continual chain, which has the root name “prop”.`,
  `display ${propane}; moveto 0.0 { 243 255 -936 128.61} 1076.15 -8.3 -10.5 {7.317454773416418 5.608465841532068 0.039535450828173176} 31.617278791937533 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  Lesson.echoAtWindow("propane") + Lesson.label(32, "C1") + Lesson.label(33, "C2") + Lesson.label(37, "C3") +
  `delay 2; select @36; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S; ` + Lesson.drawOrbital(36, "GREEN TRANSLUCENT", "S") +
  `delay 2; display ${propanol_1}; moveto 0.0 { 958 67 277 37.35} 935.77 -4.9 -7.2 {4.325167097322197 1.1814923898599492 -0.3909799636653978} 26.278749772367902 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("1-propanol") + Lesson.label(48, "C1") + Lesson.label(44, "C2") + Lesson.label(43, "C3") +  
  `delay 5; loop 0;`
);

lesson.addInstruction(
  `In this rendering, a H atom on carbon atom 2 of propane is being replaced with a hydroxyl group to form the alcohol named 2-propanol. The “2-“ indicates the position where the hydroxyl group is present on the chain of C atoms. This alcohol is often referred to by the trivial name “isopropyl alcohol”, or “rubbing alcohol”.`,
  `display ${propane}; moveto 0.0 { 504 188 -843 128.11} 1076.15 -8.3 -10.5 {7.317454773416418 5.608465841532068 0.039535450828173176} 31.617278791937533 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("propane") + Lesson.label(32, "C1") + Lesson.label(33, "C2") + Lesson.label(37, "C3") + `delay 2;` + Lesson.drawOrbital(38, "GREEN TRANSLUCENT", "S") + `delay 2; display ${propanol_2}; moveto 0.0 { 564 -758 327 40.4} 1076.16 -6.4 -9.9 {-6.583861053782314 1.7198290064156874 0.2791141405541262} 29.65991887870761 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("2-propanol") + Lesson.label(59, "C1") + Lesson.label(55, "C2") + Lesson.label(54, "C3") + `delay 5; loop 0;`
);

lesson.addInstruction(
  `Imagine we had added the hydroxyl group to carbon atom number 3 in the propane chain. The resulting alcohol would be 1-propanol, not 3-propanol. When numbering the chain of C atoms in an alcohol, always start at the end of the chain closest to where the hydroxyl group is present. Therefore, if a hydroxyl group were added to C<sub>3</sub> of propane, the resulting alcohol is renumbered starting with “1” on the atom originally assigned as “3”.`,
  `display ${propane}; moveto 0.0 { 399 357 -845 131.74} 1076.16 7.2 -4.1 {7.317454773416418 5.608465841532068 0.039535450828173176} 31.617278791937533 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("propane") + Lesson.label(32, "C1") + Lesson.label(33, "C2") + Lesson.label(37, "C3") + `delay 2; ` + Lesson.drawOrbital(41, "TRANSLUCENT GREEN", "S") + `delay 2; display ${propanol_1}; moveto 0.0 { -544 -667 -510 150.57} 813.71 3.2 -7.5 {4.325167097322197 1.1814923898599492 -0.3909799636653978} 26.278749772367902 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("") + Lesson.label(43, "C1", 25, "red") + Lesson.label(44, "C2", 25, "black") + Lesson.label(48, "C3", 25, "red") + `delay 2; moveto 0.0 { 743 -576 341 155.54} 813.71 3.2 -7.5 {4.325167097322197 1.1814923898599492 -0.3909799636653978} 26.278749772367902 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.label(48, "C1", 25, "green") + Lesson.label(44, "C2", 25, "black") + Lesson.label(43, "C3", 25, "green") + Lesson.echoAtWindow("1-propanol") + `delay 5; loop 0;`
);

lesson.addInstruction(
  `Recall that the general formula for alkanes is C<sub>n</sub>H<sub>2n+2</sub>. Since monoalcohols have one H replaced by -OH, their general formula is C<sub>n</sub>H<sub>2n+2</sub>O. The chemical formulas for methanol, ethanol, and 1-propanol are CH<sub>4</sub>O, C<sub>2</sub>H<sub>6</sub>O, and C<sub>3</sub>H<sub>8</sub>O, respectively. The chemical formulas are often written by separating the H atom bonded to O in the hydroxyl group so it is present after the H, in the following fashion for the previous three examples: CH<sub>3</sub>OH, C<sub>2</sub>H<sub>5</sub>OH, C<sub>3</sub>H<sub>7</sub>OH. To provide even more information about structure, the formulas for alcohols are often written in the form of condensed structural formulas, where the C atoms are written in the order they are connected in a molecule, with the substituent atoms present on the C atoms written after them. By convention, the C atom to which the OH group is attached, if terminal, is usually written last in the condensed structural formula, even though the numbering starts with the C atom to which the -OH group is attached. The condensed structural formulas for methanol, ethanol, and 1-propanol are CH<sub>3</sub>OH, CH<sub>3</sub>CH<sub>2</sub>OH, and CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH, respectively.`,
  `display ${methanol}, ${ethanol}, ${propanol_1};` + `moveto 0.0 { 440 649 621 23.15} 404.56 1.2 0.0 {1.2235117379899465 1.751235392371459 -0.15637776324328634} 25.50836158339149 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `display $methanol_label; display $ethanol_label; display $propanol_label;`
);

lesson.addInstruction(
  `Alcohols that have the same chemical formulas, but where the positions of the hydroxyl groups differ, are structural isomers. 1-propanol and 2-propanol are structural isomers of one another.`,
  `display ${propanol_1}, ${propanol_2}; moveto 0.0 { -246 -132 -960 36.88} 352.85 0.0 0.0 {-1.1293469782300587 1.4506606981378187 -0.05593291155563572} 26.29511339639351 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.drawOrbital(48, "TRANSLUCENT GREEN", "S") + Lesson.drawOrbital(55, "TRANSLUCENT GREEN", "S")
);

lesson.addInstruction(
  `Adding a hydroxyl group to C1 of butane gives the alcohol 1-butanol.`,
  `display ${butanol_1}, ${butanol_2}; moveto 0.0 { 166 -736 -657 137.93} 225.84 0.0 0.0 {-2.3796044451890395 -3.0842363794745564 0.20056931460504365} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `hide ADD @96; select @88; color atom white; spacefill 15%;` + Lesson.drawOrbital("81, @67", "TRANSLUCENT GREEN", "S")
);

lesson.addInstruction(
  `Adding a hydroxyl group to C2 of butane gives 2-butanol.`,
  `display ${butanol_1}, ${butanol_2}; moveto 0.0 { 242 -674 -698 134.07} 225.84 0.0 0.0 {-2.3796044451890395 -3.0842363794745564 0.20056931460504365} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +`hide ADD @95; select @71; color atom white; spacefill 15%;` + Lesson.drawOrbital("82, @68", "TRANSLUCENT GREEN", "S")
);

lesson.addInstruction(
  `Adding a hydroxyl group to C3 of butane also gives 2-butanol. This is because the numbering of the chain will change once the hydroxyl group is added. The chain is always numbered starting with the C atom closest to where the hydroxyl group will first be encountered.`,
  `display ${butanol_2}; moveto 0.0 { 11 132 991 165.64} 600.73 0.0 0.0 {1.0346099036085903 -3.0358290030403103 -0.21198069457820448} 21.3359208170355 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `hide ADD @96; select @88; color atom white; spacefill 15%;` + Lesson.echoAtWindow("butane") + Lesson.label(89, "C1", 19) + Lesson.label(86, "C2", 19) + Lesson.label(82, "C3", 19) + Lesson.label(81, "C4", 19) + `delay 2;` + Lesson.drawOrbital(82, "TRANSLUCENT GREEN", "S") + `delay 2; ` + Lesson.echoAtWindow("") + `display ${butanol_2}; select *; color atom cpk; spacefill reset;` + Lesson.label(86, "C2", 25, "red") + Lesson.label(82, "C3", 25, "red") + `delay 2;` + Lesson.label(81, "C1", 25, "green") + Lesson.label(82, "C2", 25, "green") + Lesson.label(86, "C3", 25, "green") + Lesson.label(89, "C4", 25, "green") + Lesson.echoAtWindow("2-butanol") + `delay 5; loop 0;`
);

lesson.addInstruction(
  `Alcohols can also be formed starting with branched-chain alkanes. 2-methylpropane is an isomer of 1-butane (see branched-chain alkanes lesson). If a hydroxyl group replaces one of the H atoms on any one of the three C atoms of 2-methylpropane, an alcohol named 2-methyl-1-propanol is formed. For branched-chain alcohols, the name of the alkane is changed in the same fashion as for a linear alkane, and the resulting alcohol numbered so that lowest number is given to the C atom closest to where the -OH group is first encountered in the longest continual chain.`,
  `display ${methyl_2_propanol_1}; zoom 0; moveto 0.0 { 256 -224 -940 45.96} 311.44 0.0 0.0 {3.897242970477919 -8.581534534633512 -0.029938663889120882} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `hide ADD @129; select @122; color atom white; spacefill 15%;` + Lesson.label(115, "C1", 19) + Lesson.label(116, "C2", 19) + Lesson.label(124, "C3", 19) + Lesson.echoAtWindow("2-methylpropane") +`delay 2;` + Lesson.drawOrbital(120, "TRANSLUCENT GREEN", "S") + `delay 2; display ${methyl_2_propanol_1}; select *; color atom cpk; spacefill reset;` + `select @115, @116, @124; font label 25; color label red;` + Lesson.echoAtWindow("") + `delay 2; select @115; label HIDE;` + Lesson.label(120, "C1", 19, "green") + Lesson.label(116, "C2", 19) + Lesson.label(124, "C3", 19) + Lesson.echoAtWindow("2-methyl-1-propanol") + `delay 4; loop 0;`
);

lesson.addInstruction(
  `There is one additional alcohol that will have the chemical formula C<sub>4</sub>H<sub>9</sub>OH. This alcohol, shown at right,  has the systematic name 2-methyl-2-propanol. This alcohol is commonly referred to by its trivial name, tert-butanol, or tert-butyl alcohol.`,
  `display ${methyl_2_propanol_2}; zoom 0; moveto 0.0 { -547 -757 -357 89.53} 310.23 0.0 0.0 {8.608653865388872 -3.69344898941017 0.10684932340646636} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +`hide ADD @144; select @140; color atom white; spacefill 15%;` + Lesson.label(135, "C1", 19) + Lesson.label(131, "C2", 19) + Lesson.label(139, "C3", 19) + Lesson.echoAtWindow("2-methylpropane") + `delay 2;` + Lesson.drawOrbital(131, "TRANSLUCENT GREEN", "S") +`delay 2; display ${methyl_2_propanol_2}; select *; color atom cpk; spacefill reset;` + Lesson.echoAtWindow("2-methyl-2-propanol") + `delay 4; loop 0;`
);

lesson.addInstruction(
  `All four isomers of “butanol” are shown here`,
  `display ${butanol_1}, ${butanol_2}, ${methyl_2_propanol_1}, ${methyl_2_propanol_2};` +`moveto 0.0 { -134 -138 -981 40.24} 139.79 -3.2 4.1 {1.9366719863721782 -4.610864070748199 0.11951232218185817} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("butanol isomers")
);

lesson.addInstruction(
  `We will now examine some general structural and electronic properties that apply to alcohols derived from alkanes. In doing so we will focus on the properties of the hydroxyl functional group. The alkyl group attached to the hydroxyl group can be represented by “R” where the group “R” is the alkyl substituent to which the hydroxyl group is attached.`,
  `display ${methanol};` +`hide ADD @10, @11, @13; select @9; spacefill 30%; color atoms green;` + Lesson.label(9, "R", 19) + `moveto 0.0 { -515 -767 -384 87.82} 1306.6 0.0 0.0 {-2.5305897643859367 2.452606438278538 -1.4933698607149735} 27.924051942189607 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `The O atom of a hydroxyl group is bonded to two atoms (H, and the C of the R group) and contains two lone pairs of electrons. With two bonded and two nonbonded electron domains, the AXE designation for the O is AX<sub>2</sub>E<sub>2</sub>. With four total electron domains, the electron domain geometry surrounding the O atom is tetrahedral, as shown here.`,
  `display ${methanol}; moveto 0.0 { -264 -802 -536 104.79} 1727.98 -3.2 -8.4 {-2.5305897643859367 2.452606438278538 -1.4933698607149735} 27.924051942189607 {0 0 0} 0 0 0 3.0 0.0 0.0;` +`hide ADD @10, @11, @13; select @9; spacefill 20%;` + Lesson.label(9, "R", 19) + Lesson.drawOrbitals(12, "TRANSLUCENT PURPLE", ["sp3a", "sp3b", "sp3c", "sp3d"]) +`draw roh_geo on;`
);

lesson.addInstruction(
  `With two bonded and two nonbonded electron domains, the molecular geometry about the O atom will be bent.`,
  `display ${methanol}; moveto 0.0 { -401 -826 -396 94.72} 1502.59 0.0 0.0 {-2.5305897643859367 2.452606438278538 -1.4933698607149735} 27.924051942189607 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `hide ADD @10, @11, @13; select @9; spacefill 30%; color atoms green; ` + Lesson.label(9, "R", 19, "black") + `draw roh_m_geo on;` + Lesson.drawOrbitals(12, "TRANSLUCENT RED", ["sp3c", "sp3d"]) + `select @9, @12, @31; color translucent 0.5;`
);

lesson.addInstruction(
  `The bond angles in a molecule with four electron domains, and in which all the electron domains are bonded to terminal atoms, will be exactly 109.5 degrees. For the O in alcohols, the lone pairs of electrons spread out more in space than the bonded pairs of electrons, resulting in a slight compression of the bond angle.`,
  `display ${methanol}; moveto 0.0 { -433 -835 -339 95.52} 1727.98 0.0 0.0 {-2.5305897643859367 2.452606438278538 -1.4933698607149735} 27.924051942189607 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `hide ADD @10, @11, @13; select @9; spacefill 30%; color atoms green;` + Lesson.label(9, "R", 19, "black") + Lesson.drawOrbitals(12, "TRANSLUCENT RED", ["sp3c", "sp3d"]) + `measure ({30}) ({11}) ({8});`
);

lesson.addInstruction(
  `Now that we have established the molecular geometry about the O atom in an alcohol, we will look at the polarity of alcohols. Carbon and hydrogen have fairly similar electronegativity values, so each C-H bond in the alkyl portion of an alcohol is only weakly polar. O is much more electronegative than either H or C. Due to the differences in electronegativity, the O in an alcohol has a partial negative charge while the H and C atoms to which it is bonded have partial positive charges. This is highlighted here for methanol.`,
  `display ${methanol}; moveto 0.0 { -483 -850 -211 107.37} 1727.98 5.3 -10.2 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.label(12, "δ-", 32, "black", "0 0") + Lesson.label(9, "δ+", 32, "black", "0 0") + Lesson.label(31, "δ+", 32, "black", "0 0")
);

lesson.addInstruction(
  `The differences in electronegativity make the C-O and H-O bonds polar. The bond dipole moments are represented by vector where the arrows point in the directions of the more electronegative atoms. The length of the vector is proportional t the differences in electronegativity of the two atoms present in the bond. Shown here are the bond dipoles for the C-O an H-O bonds.`,
  `display ${methanol}; moveto 0.0 { -535 -780 -324 106.52} 1637.33 2.1 -14.2 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `select *; color translucent 0.5; dipole mBond1 on; dipole mBond2 on;`
);

lesson.addInstruction(
  `The directions and magnitudes of bond dipoles dictate whether, and to what an extent, a molecule is polar. In the case of an alcohol, the individual dipoles for the C-O and H-O bonds reinforce each other in a “vertical” direction, while they cancel one another in the “horizontal” directions. The net dipole moment due to the hydroxyl functional group, obtained by adding the individual dipole vectors, is shown, alternating with the bond dipoles. Since C and H have similar electronegativities, the C-H bonds in methanol are only slightly polar, and they are therefore disregarded here.`,
  `display ${methanol}; moveto 0.0 { -535 -780 -324 106.52} 1637.33 2.1 -14.2 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `select *; color translucent 0.5; dipole mBond1 on; dipole mBond2 on;` + Lesson.label(12, "δ-", 20, "black", "0 0") + Lesson.label(9, "δ+", 20, "black", "0 0") + Lesson.label(31, "δ+", 20, "black", "0 0") + Lesson.echoAtWindow("Bond Dipoles") + `spin on; delay 6; dipole * off; dipole mBond3 on;` + Lesson.echoAtWindow("Overall Dipole") + `delay 6; loop 0;`
);

lesson.addInstruction(
  `This rendering shows the electrostatic potential map for methanol. The electrostatic potential map is an isosurface which allows the visualization of partial charges within molecules due to electronegativity differences of bonded atoms. As discussed on the previous slides, since O is more electronegative than C and H, it has a partial negative charge, and there is a net dipole moment in the molecule. The colors in the electrostatic potential map allow the regions of higher and lower electron density due to bond and molecule polarity to be visualized. Red colors represent regions where electron density is being pulled towards more electronegative atom(s), while blue colors represent regions where electron density is being pulled away from electropositive atom(s). Green colors represent net electrically neutral regions. The electrostastic potential map for methanol shown here emphasizes how the electronegative O pulls electron density away from the the C and H atoms it is bonded to.`,
  `display ${methanol_e}; moveto 0.0 { -592 -783 -188 106.59} 1431.41 0.0 0.0 {-7.507129301351488 -19.452288189590725 -1.2554165495400038} 32.42721528239544 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select ${methanol_e}; isosurface vdw map mep; isosurface translucent; spin on;`
);

lesson.addInstruction(
  `The polarity of the O-H bond in methanol allows methanol to form favorable hydrogen bonds with other methanol molecules, as well as other molecules capable of forming hydrogen bonds, like water. Methanol is miscible (soluble in all proportions) in water due to the hydrogen bonding capability.`,
  `display ${methanol}, ${ethanol}; moveto 0.0 { -812 397 428 105.13} 818.41 -8.1 -1.3 {-1.257812549475854 2.2070297943806665 0.03130399709440277} 27.01386675436036 {0 0 0} 0 0 0 3.0 0.0 0.0; hide ADD @10, @11, @13, @24, @25, @26; select @9, @22; color atom white; spacefill 15%;` + Lesson.label(12, "δ-", 20, "black", "0 0") + Lesson.label(27, "δ-", 20, "black", "0 0") + Lesson.label(30, "δ+", 20, "black", "0 0") + Lesson.label(31, "δ+", 20, "black", "0 0") + `select @31, @27; hbonds CALCULATE; spin on;`
);

lesson.addInstruction(
  `The C-O and H-O bonds in other alcohols will be polar as well. Shown here is the  electrostatic 
    potential map for ethanol, which, like methanol, is miscible in water.`,
  `display ${ethanol_e}; moveto 0.0 { -844 -499 -195 83.68} 1082.35 0.0 0.0 {1.9080042667163077 -19.827849265885227 1.0083199060312253} 29.407753664373434 {0 0 0} 0 0 0 3.0 0.0 0.0; select ${ethanol_e}; isosurface vdw map mep; isosurface translucent; spin on;`
);

lesson.addInstruction(
  `Shown here is the electrostatic potential map for 1-propanol`,
  `display ${propanol_e}; moveto 0.0 { 27 444 -896 81.91} 711.66 0.0 0.0 {10.285977376013413 -17.83815833999463 -0.4051082955448102} 29.99132562184005 {0 0 0} 0 0 0 3.0 0.0 0.0; select ${propanol_e}; isosurface vdw map mep; isosurface translucent; spin on;`
);

lesson.addInstruction(
  `Due to the similarities in electronegativities of C and H, and symmetrical arrangement of atoms in alkyl groups, the alkyl portions of alcohols are largely nonpolar. As the alkyl groups of alcohols become larger, and longer in length, more London dispersion forces are formed with other alcohol molecules in the liquid and solid states of these substances. Alcohols become increasingly more nonpolar in character as the alkyl chain length attached to the hydroxyl functional group increases in length. While the OH group will always be polar, more C and H atoms in the alkyl portion will cause London dispersion forces to become increasingly more important than hydrogen bonding as an intermolecular attractive force. For this reason, the solubilities of alcohols in water decrease as the length of the alkyl chain increases. Methanol, ethanol and 1-propanol are all miscible in water, while butanol exhibits an upper solubility limit of  0.11 mol/100 g H<sub>2</sub>O. The next linear alcohol, 1-pentanol, shown here, has a solubility of only 0.030 mol/100 g H<sub>2</sub>O.`,
  `display ${pentanol_1}; moveto 0.0 { 56 -216 -975 152.38} 467.93 0.0 0.0 {-3.269789139978053 -7.670598730450664 -0.09966665728469014} 20.640053228631185 {0 0 0} 0 0 0 3.0 0.0 0.0; select ${pentanol_1}; isosurface vdw map mep; isosurface translucent; spin on;`
);

lesson.addInstruction(
  `This concludes the lesson for alcohols. <a href="http://ensignchemistry.com/jsmol%20models/lessons/index.html">Click here to return to the main lessons page</a>.`,
  `display ${propanol_2}, ${methanol}, ${ethanol}, ${butanol_2}, ${propanol_1}, ${butanol_1}; moveto 0.0 { -30 -219 -975 138.11} 307.67 0.0 0.0 {-1.700864479352614 -0.35660561903216004 0.07455434082945064} 25.06626901739457 {0 0 0} 0 0 0 3.0 0.0 0.0; spin on;`
);


lesson.start();