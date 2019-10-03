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

let defaultEchoOptions = "font echo 18; color echo black; set echo OFFSET { 0 1.4 0 }; ";

lesson.appendToInitializeScript(
  Lesson.echoAtAtom(13, "methanol", "methanol", defaultEchoOptions) +
  Lesson.echoAtAtom(25, "ethanol", "ethanol", defaultEchoOptions) +
  Lesson.echoAtAtom(53, "1-propanol", "propanol_1", defaultEchoOptions) +
  Lesson.echoAtAtom(83, "2-butanol", "butanol_2", defaultEchoOptions) +
  Lesson.echoAtAtom(10, "methanol\nCH<sub>3</sub>OH", "methanol_label", defaultEchoOptions) +
  Lesson.echoAtAtom(24, "ethanol\nCH<sub>3</sub>CH<sub>2</sub>OH", "ethanol_label", defaultEchoOptions) +
  Lesson.echoAtAtom(47, "1-propanol\nCH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH", "propanol_label", defaultEchoOptions)
);

// Add necessary commands to the reset script.
lesson.appendToResetScript("select *; ");
lesson.appendToResetScript("color atom cpk; ");
lesson.appendToResetScript("spacefill reset; ");

lesson.addInstruction(
  `This tutorial consists of a sequence of interactive molecular models, with explanations, illustrating details of alcohols. Use your mouse or touch screen to rotate, zoom, and move the model on any of the states in this tutorial. Use the right arrow key to advance to the next model and accompanying explanation. Use the left arrow key to go to the previous model. Use the "reset page" button to return to the default model view, if desired, for the current model. Use the “reset tutorial” button to return to the start of the tutorial at this instruction. Click the “advance” arrow to get started!`,
  `select ${methanol}, ${ethanol}, ${propanol_1}, ${butanol_2}; display selected; center selected;` +
  `display $methanol; display $ethanol; display $propanol_1; display $butanol_2; ` +
  `moveto 0.0 { -386 807 -447 33.57} 152.09 -9.1 1.4 {1.1255784666510318 0.022078093109455847 -0.1404902250390892} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `Alcohols are organic compounds containing one or more hydroxyl functional groups (-OH) bonded to carbon. The simplest alcohols are those formed by substituting a single H atom on an alkane with a hydroxyl group. With a single hydroxyl group present, an alcohol is a <strong>monoalcohol</strong>. <strong>Polyalcohols</strong>, with more than one hydroxyl group, can be formed by substituting more than one H atom on an alkane with hydroxyl groups. In this lesson we will be focusing on the structures of representative monoalcohols, which we will refer to as “alcohols” throughout.<br/>The simplest alcohol, methanol, will be formed by taking the simplest alkane, methane, and replacing one H atom with a hydroxyl group. This replacement is illustrated here.`,
  `select ${methane}; display selected; center selected; moveto 1.0 { 814 295 -500 27.88} 1636.69 -8.6 -4.5 {-0.6459019397286032 6.726701373941719 -0.4332319595222314} 30.771977867220333 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("methane") +
  `delay 2;` + Lesson.drawOrbital(5, "GREEN TRANSLUCENT", "S") +
  `delay 2; display ${methanol}; moveto 0.0 { 791 98 604 42.29} 1423.19 -4.2 -3.4 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("methanol") +
  `delay 2; loop 0;`
);

lesson.addInstruction(
  `Alcohols are named by taking the name of the alkane from which it was derived, dropping the last letter in the name (“e”) and replacing it with “ol”.`,
  `display ${methane}; moveto 1.0 { 413 -496 -764 16.17} 1423.21 0.0 0.0 {-0.6459019397286032 6.726701373941719 -0.4332319595222314} 30.771977867220333 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is methane") +
  `delay 2; select @5; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${methanol}; moveto 0.0 { 423 43 905 39.56} 1237.56 0.0 0.0 {-2.7234880796880887 3.1336547081195993 -1.3782715381674753} 28.597253612810317 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is methanol") +
  `delay 3.5;` +
  `display ${ethane}; moveto 1.0 { -593 722 356 63.98} 1076.14 -11.6 -13.9 {3.206785951439305 6.838458113368992 0.22251372916254092} 30.98163116248421 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is ethane") +
  `delay 2; select @19; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${ethanol}; moveto 0.0 { -113 -747 656 97.38} 935.77 -8.8 -15.1 {-0.28069552933436426 1.5892798518880449 0.9710210206023215} 26.015156809862827 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("Alkane name is ethanol") +
  `delay 2; loop 0;`
);

lesson.addInstruction(
  `The position of the hydroxyl group must be indicated for alcohols formed from alkanes with chains longer than two C atoms in length. This is illustrated here with propane. If a H atom attached to a terminal C atom (at C<sub>1</sub>) is replaced by a hydroxyl group, the alcohol is named 1-propanol. The “1-“ indicates the position of the hydroxyl group in the longest continual chain, which has the root name “prop”.`,
  `display ${propane}; moveto 1.0 { 243 255 -936 128.61} 1076.15 -8.3 -10.5 {7.317454773416418 5.608465841532068 0.039535450828173176} 31.617278791937533 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  Lesson.echoAtWindow("propane") + Lesson.label(32, "C1") + Lesson.label(33, "C2") + Lesson.label(37, "C3") +
  `delay 2; select @36; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S; ` + Lesson.drawOrbital(36, "GREEN TRANSLUCENT", "S") +
  `delay 2; display ${propanol_1}; moveto 0.0 { 958 67 277 37.35} 935.77 -4.9 -7.2 {4.325167097322197 1.1814923898599492 -0.3909799636653978} 26.278749772367902 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("1-propanol") + Lesson.label(48, "C1") + Lesson.label(44, "C2") + Lesson.label(43, "C3") +  
  `delay 5; loop 0;`
);

lesson.addInstruction(
  `In this rendering, a H atom on carbon atom 2 of propane is being replaced with a hydroxyl group to form the alcohol named 2-propanol. The “2-“ indicates the position where the hydroxyl group is present on the chain of C atoms. This alcohol is often referred to by the trivial name “isopropyl alcohol”, or “rubbing alcohol”.`,
  `display ${propane}; moveto 1.0 { 504 188 -843 128.11} 1076.15 -8.3 -10.5 {7.317454773416418 5.608465841532068 0.039535450828173176} 31.617278791937533 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("propane") + Lesson.label(32, "C1") + Lesson.label(33, "C2") + Lesson.label(37, "C3") + `delay 2;` + Lesson.drawOrbital(38, "GREEN TRANSLUCENT", "S") + `delay 2; display ${propanol_2}; moveto 0.0 { 564 -758 327 40.4} 1076.16 -6.4 -9.9 {-6.583861053782314 1.7198290064156874 0.2791141405541262} 29.65991887870761 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("2-propanol") + Lesson.label(59, "C1") + Lesson.label(55, "C2") + Lesson.label(54, "C3") + `delay 5; loop 0;`
);

lesson.addInstruction(
  `Imagine we had added the hydroxyl group to carbon atom number 3 in the propane chain. The resulting alcohol would be 1-propanol, not 3-propanol. When numbering the chain of C atoms in an alcohol, always start at the end of the chain closest to where the hydroxyl group is present. Therefore, if a hydroxyl group were added to C<sub>3</sub> of propane, the resulting alcohol is renumbered starting with “1” on the atom originally assigned as “3”.`,
  `display ${propane}; moveto 1.0 { 399 357 -845 131.74} 1076.16 7.2 -4.1 {7.317454773416418 5.608465841532068 0.039535450828173176} 31.617278791937533 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("propane") + Lesson.label(32, "C1") + Lesson.label(33, "C2") + Lesson.label(37, "C3") + `delay 2; ` + Lesson.drawOrbital(41, "TRANSLUCENT GREEN", "S") + `delay 2; display ${propanol_1}; moveto 0.0 { -544 -667 -510 150.57} 813.71 3.2 -7.5 {4.325167097322197 1.1814923898599492 -0.3909799636653978} 26.278749772367902 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("") + Lesson.label(43, "C1", 25, "red") + Lesson.label(44, "C2", 25, "black") + Lesson.label(48, "C3", 25, "red") + `delay 2; moveto 1.0 { 743 -576 341 155.54} 813.71 3.2 -7.5 {4.325167097322197 1.1814923898599492 -0.3909799636653978} 26.278749772367902 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.label(48, "C1", 25, "green") + Lesson.label(44, "C2", 25, "black") + Lesson.label(43, "C3", 25, "green") + Lesson.echoAtWindow("1-propanol") + `delay 5; loop 0;`
);

lesson.addInstruction(
  `Recall that the general formula for alkanes is C<sub>n</sub>H<sub>2n+2</sub>. Since monoalcohols have one H replaced by -OH, their general formula is C<sub>n</sub>H<sub>2n+2</sub>O. The chemical formulas for methanol, ethanol, and 1-propanol are CH<sub>4</sub>O, C<sub>2</sub>H<sub>6</sub>O, and C<sub>3</sub>H<sub>8</sub>O, respectively. The chemical formulas are often written by separating the H atom bonded to O in the hydroxyl group so it is present after the H, in the following fashion for the previous three examples: CH<sub>3</sub>OH, C<sub>2</sub>H<sub>5</sub>OH, C<sub>3</sub>H<sub>7</sub>OH. To provide even more information about structure, the formulas for alcohols are often written in the form of condensed structural formulas, where the C atoms are written in the order they are connected in a molecule, with the substituent atoms present on the C atoms written after them. By convention, the C atom to which the OH group is attached, if terminal, is usually written last in the condensed structural formula, even though the numbering starts with the C atom to which the -OH group is attached. The condensed structural formulas for methanol, ethanol, and 1-propanol are CH<sub>3</sub>OH, CH<sub>3</sub>CH<sub>2</sub>OH, and CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH, respectively.`,
  `display ${methanol}, ${ethanol}, ${propanol_1};` + `moveto 1.0 { 440 649 621 23.15} 404.56 1.2 0.0 {1.2235117379899465 1.751235392371459 -0.15637776324328634} 25.50836158339149 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `display $methanol_label; display $ethanol_label; display $propanol_label;`
);

lesson.addInstruction(
  `Alcohols that have the same chemical formulas, but where the positions of the hydroxyl groups differ, are structural isomers. 1-propanol and 2-propanol are structural isomers of one another.`,
  `display ${propanol_1}, ${propanol_2}; moveto 1.0 { -246 -132 -960 36.88} 352.85 0.0 0.0 {-1.1293469782300587 1.4506606981378187 -0.05593291155563572} 26.29511339639351 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.drawOrbital(48, "TRANSLUCENT GREEN", "S") + Lesson.drawOrbital(55, "TRANSLUCENT GREEN", "S")
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
  `display ${butanol_1}, ${butanol_2}, ${methyl_2_propanol_1}, ${methyl_2_propanol_2};` +`moveto 1.0 { -134 -138 -981 40.24} 139.79 -3.2 4.1 {1.9366719863721782 -4.610864070748199 0.11951232218185817} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + Lesson.echoAtWindow("butanol isomers")
);

lesson.start();