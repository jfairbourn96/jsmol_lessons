// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }

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

// Overview slide of a bunch of alcohols from the log file
lesson.addInstruction(
  `This tutorial consists of a sequence of interactive molecular models, with explanations, 
    illustrating details of alcohols. Use your mouse or touch screen to rotate, zoom, and move 
    the model on any of the states in this tutorial. Use the right arrow key to advance to the 
    next model and accompanying explanation. Use the left arrow key to go to the previous model. 
    Use the "reset page" button to return to the default model view, if desired, for the 
    current model. Use the “reset tutorial” button to return to the start of the tutorial at 
    this instruction. Click the “advance” arrow to get started!`,
  `display ${methanol}, ${ethanol}, ${propanol_1}, ${butanol_2};` +
  `moveto 0.0 { -386 807 -447 33.57} 152.09 -9.1 1.4 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @10, @24, @53, @83; label DISPLAY;`
);

// Start with methane, then highlight the H (by adding translucent s orbital for example) and 
// then switch it out for methanol. Echo text in lower left for “methane” and for “methanol” 
// once formed. Maybe have this run as a continuous loop, like on frame 13 of the alkenes 
// lesson (see that for what I mean).
lesson.addInstruction(
  `Alcohols are organic compounds containing one or more hydroxyl functional groups (-OH) 
    bonded to carbon. The simplest alcohols are those formed by substituting a single H atom 
    on an alkane with a hydroxyl group. With a single hydroxyl group present, an alcohol is a 
    <strong>monoalcohol</strong>. <strong>Polyalcohols</strong>, with more than one hydroxyl 
    group, can be formed by substituting more than one H atom on an alkane with hydroxyl 
    groups. In this lesson we will be focusing on the structures of representative 
    monoalcohols, which we will refer to as “alcohols” throughout.<br/>
  The simplest alcohol, methanol, will be formed by taking the simplest alkane, methane, and 
    replacing one H atom with a hydroxyl group. This replacement is illustrated here.`,
  `display ${methane}; moveto 0.0 { 955 55 -292 32.72} 465.25 7.9 167.8 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "methane"; echo "methane"; color echo black; font echo 36;` +
  `delay 2; select @5; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${methanol}; moveto 0.0 { 583 464 667 46.06} 535.03 138.1 40.1 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "methanol"; echo "methanol"; color echo black; font echo 36;` +
  `delay 2; loop 0;`
);

// Do as for methane on previous slide, but this time using ethane and switching it with 
// ethanol. Echo text ethane and ethanol
lesson.addInstruction(
  `The next simplest alcohol will be formed by replacing a H atom on ethane, C<sub>2</sub>H<sub>6
    </sub>, with a hydroxyl group as shown here. This alcohol is named ethanol.`,
  `display ${ethane}; moveto 0.0 { -303 731 611 70.63} 535.03 87.6 115.4 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "ethane"; echo "ethane"; color echo black; font echo 36;` +
  `delay 2; select @19; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${ethanol}; moveto 0.0 { -70 -696 715 91.39} 535.03 40.7 -14.3 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "ethanol"; echo "ethanol"; color echo black; font echo 36;` +
  `delay 2; loop 0;`
);

// Repeating animations from previous two slides:
// Methane: echo text “Alkane name is methane”
// Methanol: echo text “Alkane name is methanol”
// Ethane: echo text “Alkane name is ethane”
// Ethanol: echo text “Alkane name is ethanol”
lesson.addInstruction(
  `Alcohols are named by taking the name of the alkane from which it was derived, dropping the 
    last letter in the name (“e”) and replacing it with “ol”.`,
  `display ${methane}; moveto 0.0 { 955 55 -292 32.72} 465.25 7.9 167.8 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0; set echo off; set echo "Alkane name is methane"; echo "Alkane name is methane"; color echo black; font echo 36;` +
  `delay 2; select @5; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${methanol}; moveto 0.0 { 583 464 667 46.06} 535.03 138.1 40.1 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "Alkane name is methanol"; echo "Alkane name is methanol"; color echo black; font echo 36;` +
  `delay 2;` +
  `display ${ethane}; moveto 0.0 { -303 731 611 70.63} 535.03 87.6 115.4 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "Alkane name is ethane"; echo "Alkane name is ethane"; color echo black; font echo 36;` +
  `delay 2; select @19; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
  `delay 2; display ${ethanol}; moveto 0.0 { -70 -696 715 91.39} 535.03 40.7 -14.3 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` + `set echo off; set echo "Alkane name is ethanol"; echo "Alkane name is ethanol"; color echo black; font echo 36;` +
  `delay 2; loop 0;`
);

// Start with propane, show numbering on propane, then highlight the H (by adding translucent 
// s orbital for example) on C1 and then switch it out for 1-propanol. Retain numbering. Echo 
// text in lower left for “propane” and for “1-propanol” once formed. Run this as a loop too 
// maybe.
lesson.addInstruction(
  `The position of the hydroxyl group must be indicated for alcohols formed from alkanes with 
  chains longer than two C atoms in length. This is illustrated here with propane. If a H 
  atom attached to a terminal C atom (at C<sub>1</sub>) is replaced by a hydroxyl group, 
  the alcohol is named 1-propanol. The “1-“ indicates the position of the hydroxyl group in 
  the longest continual chain, which has the root name “prop”.`,
  `display ${propane}; moveto 0.0 { 202 45 -978 120.36} 465.25 -63.2 -161.9 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `set echo off; set echo "propane"; echo "propane"; color echo black; font echo 36;` +
  `select @32, @33, @37; label DISPLAY;` +
  `delay 2; select @36; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S; ` +
  `delay 2; label HIDE; display ${propanol_1}; moveto 0.0 { 957 -84 279 44.7} 404.56 -52.3 38.5 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `set echo off; set echo "1-propanol"; echo "1-propanol"; color echo black; font echo 36;` +    
  `select @48; label \"C1\"; font label 19; color label black;` + `select @44; label \"C2\"; font label 19; color label black;` + `select @43; label \"C3\"; font label 19; color label black;` +
  `select @43, @44, @48; label DISPLAY;` +
  `delay 5; loop 0;`
);

// Start with propane, show numbering on propane, then highlight the H (by adding translucent 
// s orbital for example) on C2 and then switch it out for 2-propanol. Retain numbering. Echo 
// text in lower left for “propane” and for “2-propanol” once formed. Run this as a loop too 
// maybe.
lesson.addInstruction(
  `In this rendering, a H atom on carbon atom 2 of propane is being replaced with a hydroxyl 
    group to form the alcohol named 2-propanol. The “2-“ indicates the position where the 
    hydroxyl group is present on the chain of C atoms. This alcohol is often referred to by 
    the trivial name “isopropyl alcohol”, or “rubbing alcohol”.`,
  `display ${propane}; moveto 0.0 { 202 45 -978 120.36} 465.25 -63.2 -161.9 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `set echo off; set echo "propane"; echo "propane"; color echo black; font echo 36;` +
    `select @32, @33, @37; label DISPLAY;` +
    `delay 2; select @38; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
    `delay 2; label HIDE; display ${propanol_2}; moveto 0.0 { 92 938 335 35.24} 351.8 109.8 12.2 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `set echo off; set echo "2-propanol"; echo "2-propanol"; color echo black; font echo 36;` +    
    `select @59, @55, @54; label DISPLAY;` +
    `delay 5; loop 0;`
);

// Show same animation as in state 5, but orient and number the alkane so C3 gets swapped with 
// an OH. Once the OH is added, change the C3 to C1 for the alcohol to illustrate the point.
lesson.addInstruction(
  `Imagine we had added the hydroxyl group to carbon atom number 3 in the propane chain. The 
    resulting alcohol would be 1-propanol, not 3-propanol. When numbering the chain of C atoms 
    in an alcohol, always start at the end of the chain closest to where the hydroxyl group is 
    present. Therefore, if a hydroxyl group were added to C<sub>3</sub> of propane, the 
    resulting alcohol is renumbered starting with “1” on the atom originally assigned as “3”.`,
  `display ${propane}; moveto 0.0 { 202 45 -978 120.36} 535.04 -57.1 -178.7 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `set echo off; set echo "propane"; echo "propane"; color echo black; font echo 36;` +
    `select @32, @33, @37; label DISPLAY;` +
    `delay 2; select @41; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S; ` +
    `select @48; label \"C3\"; font label 24; color label red;` + `select @44; label \"C2\"; font label 19; color label black;` + `select @43; label \"C1\"; font label 24; color label red;` +
    `delay 2; label HIDE; select @43, @44, @48; label DISPLAY; display ${propanol_1}; moveto 0.0 { -613 -687 -390 149.07} 404.56 -33.2 22.6 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `set echo off;` + 
    `delay 2; moveto 1.0 { 957 -84 279 44.7} 404.56 -52.3 38.5 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `select @48; label \"C1\"; font label 24; color label green;` + `select @44; label \"C2\"; font label 19; color label black;` + `select @43; label \"C3\"; font label 24; color label green;` +
    `set echo "1-propanol"; echo "1-propanol"; color echo black; font echo 36;` +    
    `select @43, @44, @48; label DISPLAY;` +
    `delay 5; loop 0;`
);

// Do text by drawing a point near the atom and giving it the "text" value
// Show methanol, ethanol, and 1-propanol on same slide, with their names and condensed structural 
// formulas under them.
lesson.addInstruction(
  `Recall that the general formula for alkanes is C<sub>n</sub>H<sub>2n+2</sub>. Since 
    monoalcohols have one H replaced by -OH, their general formula is C<sub>n</sub>H<sub>2n+2
    </sub>O. The chemical formulas for methanol, ethanol, and 1-propanol are CH<sub>4</sub>O, 
    C<sub>2</sub>H<sub>6</sub>O, and C<sub>3</sub>H<sub>8</sub>O, respectively. The chemical 
    formulas are often written by separating the H atom bonded to O in the hydroxyl group so 
    it is present after the H, in the following fashion for the previous three examples: 
    CH<sub>3</sub>OH, C<sub>2</sub>H<sub>5</sub>OH, C<sub>3</sub>H<sub>7</sub>OH. To provide 
    even more information about structure, the formulas for alcohols are often written in the 
    form of condensed structural formulas, where the C atoms are written in the order they are 
    connected in a molecule, with the substituent atoms present on the C atoms written after 
    them. By convention, the C atom to which the OH group is attached, if terminal, is usually 
    written last in the condensed structural formula, even though the numbering starts with the 
    C atom to which the -OH group is attached. The condensed structural formulas for methanol, 
    ethanol, and 1-propanol are CH<sub>3</sub>OH, CH<sub>3</sub>CH<sub>2</sub>OH, and CH<sub>3
    </sub>CH<sub>2</sub>CH<sub>2</sub>OH, respectively.`,
  `display ${methanol}, ${ethanol}, ${propanol_1}; reset;` +
  `moveto 0.0 { 290 104 -951 74.16} 201.14 -29.3 6.6 {1.0967998980308318 -1.2474398841246677 0.03303999685453962} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `set echo ID methanol {-1.9, 4.0, -1.21}; font echo 20; set echo methanol "methanol\nCH<sub>3</sub>OH";` +
  `set echo ID ethanol {-0.11, 3.16, 0.60}; font echo 20; set echo ethanol "ethanol\nCH<sub>3</sub>CH<sub>2</sub>OH";` +
  `set echo ID propanol {3.81, 3.01, 0.36}; font echo 20; set echo propanol "1-propanol\nCH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH";`
);

// Show 1-propanol and 2-propanol on same slide.
lesson.addInstruction(
  `Alcohols that have the same chemical formulas, but where the positions of the hydroxyl 
    groups differ, are structural isomers. 1-propanol and 2-propanol are structural isomers 
    of one another.`,
  `display ${propanol_1}, ${propanol_2}; moveto 0.0 { 440 -70 -895 171.88} 221.15 0.0 0.0 {-1.1293469782300587 1.4506606981378187 -0.05593291155563572} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @48, @55; lcaoCartoon COLOR TRANSLUCENT GREEN; lcaoCartoon CREATE S;`
);

// Same drill…
lesson.addInstruction(
  `Adding a hydroxyl group to C1 of butane gives the alcohol 1-butanol.`,
  `display ${butanol_1}, ${butanol_2}; moveto 0.0 { 166 -736 -657 137.93} 225.84 0.0 0.0 {-2.3796044451890395 -3.0842363794745564 0.20056931460504365} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `hide ADD @96; select @88; color atom white; spacefill 15%;` +
  `select @81, @67; lcaoCartoon COLOR TRANSLUCENT GREEN; lcaoCartoon CREATE S;`
);

// Same drill….
lesson.addInstruction(
  `Adding a hydroxyl group to C2 of butane gives 2-butanol.`,
  `display ${butanol_1}, ${butanol_2}; moveto 0.0 { 853 241 463 96.12} 225.84 0.0 0.0 {-2.3796044451890395 -3.0842363794745564 0.20056931460504365} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `hide ADD @95; select @71; color atom white; spacefill 15%;` +
  `select @82, @68; lcaoCartoon COLOR TRANSLUCENT GREEN; lcaoCartoon CREATE S;`
);

// Same drill, but change numbering from 1-2-3-4 when adding OH to C3 so it becomes 4-3-2-1 to 
// illustrate the point. 
lesson.addInstruction(
  `Adding a hydroxyl group to C3 of butane also gives 2-butanol. This is because the numbering 
    of the chain will change once the hydroxyl group is added. The chain is always numbered 
    starting with the C atom closest to where the hydroxyl group will first be encountered.`,
  `display ${butanol_2}; moveto 0.0 { 60 174 983 167.9} 343.47 46.3 7.4 {-2.3796044451890395 -3.0842363794745564 0.20056931460504365} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `hide ADD @96; select @88; color atom white; spacefill 15%;` +
    `set echo off; set echo "butane"; echo "butane"; color echo black; font echo 36;` +
    `select @89; label \"C1\"; font label 19; color label black;` + `select @86; label \"C2\"; font label 19; color label black;` + `select @82; label \"C3\"; font label 19; color label black;` + `select @81; label \"C4\"; font label 19; color label black;` +  
    `delay 2; select @82; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
    `delay 2; display ${butanol_2}; select *; color atom cpk; spacefill reset;` +
    `select @89; label \"C4\"; font label 24; color label black;` + `select @86; label \"C3\"; font label 24; color label black;` + `select @82; label \"C2\"; font label 24; color label black;` + `select @81; label \"C1\"; font label 24; color label black;` +
    `set echo off; set echo "2-butanol"; echo "2-butanol"; color echo black; font echo 36;` +    
    `delay 5; loop 0;`
);

// Show structure of 2-methylpropane with numbering changing to 2-methyl-1-propanol with numbering.
lesson.addInstruction(
  `Alcohols can also be formed starting with branched-chain alkanes. 2-methylpropane is an 
    isomer of 1-butane (see branched-chain alkanes lesson). If a hydroxyl group replaces one 
    of the H atoms on any one of the three C atoms of 2-methylpropane, an alcohol named 
    2-methyl-1-propanol is formed. For branched-chain alcohols, the name of the alkane is 
    changed in the same fashion as for a linear alkane, and the resulting alcohol numbered so 
    that lowest number is given to the C atom closest to where the -OH group is first 
    encountered in the longest continual chain.`,
  `display ${methyl_2_propanol_1}; zoom 0; moveto 0.0 { 256 -224 -940 45.96} 311.44 0.0 0.0 {3.897242970477919 -8.581534534633512 -0.029938663889120882} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `hide ADD @129; select @122; color atom white; spacefill 15%;` +
    `select @115; label \"C1\"; font label 19; color label black;` + `select @116; label \"C2\"; font label 19; color label black;` + `select @124; label \"C3\"; font label 19; color label black;` + 
    `set echo off; set echo "2-methylpropane"; echo "2-methylpropane"; color echo black; font echo 36;` +
    `delay 2; select @120; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
    `delay 2; display ${methyl_2_propanol_1}; select *; color atom cpk; spacefill reset; select @115; label HIDE;` +
    `select @120; label \"C1\"; font label 19; color label black;` + `select @116; label \"C2\"; font label 19; color label black;` + `select @124; label \"C3\"; font label 19; color label black;` + 
    `set echo off; set echo "2-methyl-1-propanol"; echo "2-methyl-1-propanol"; color echo black; font echo 36;` +    
    `delay 4; loop 0;`
);

// Show 2-methyl-2-propanol.
lesson.addInstruction(
  `There is one additional alcohol that will have the chemical formula C<sub>4</sub>H<sub>9
    </sub>OH. This alcohol, shown at right,  has the systematic name 2-methyl-2-propanol. This 
    alcohol is commonly referred to by its trivial name, tert-butanol, or tert-butyl alcohol.`,
  `display ${methyl_2_propanol_2}; zoom 0; moveto 0.0 { -547 -757 -357 89.53} 310.23 0.0 0.0 {8.608653865388872 -3.69344898941017 0.10684932340646636} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `hide ADD @144; select @140; color atom white; spacefill 15%;` +
    `select @135; label \"C1\"; font label 19; color label black;` + `select @131; label \"C2\"; font label 19; color label black;` + `select @139; label \"C3\"; font label 19; color label black;` + 
    `set echo off; set echo "2-methylpropane"; echo "2-methylpropane"; color echo black; font echo 36;` +
    `delay 2; select @131; lcaoCartoon COLOR GREEN TRANSLUCENT; lcaoCartoon CREATE S;` +
    `delay 2; display ${methyl_2_propanol_2}; select *; color atom cpk; spacefill reset;` +
    `set echo off; set echo "2-methyl-2-propanol"; echo "2-methyl-2-propanol"; color echo black; font echo 36;` +    
    `delay 4; loop 0;`
);

// Show 1-butanol, 2-butanol, 2-methyl-1-propanol, and 2-methyl-2-propanol.
lesson.addInstruction(
  `All four isomers of “butanol” are shown here`,
  `display ${butanol_1}, ${butanol_2}, ${methyl_2_propanol_1}, ${methyl_2_propanol_2};` +
  `moveto 1.0 { -134 -138 -981 40.24} 139.79 -3.2 4.1 {1.9366719863721782 -4.610864070748199 0.11951232218185817} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `set echo off; set echo "butanol isomers"; echo "butanol isomers"; color echo black; font echo 36;`
);

// Show methanol, then switch out the methyl group for a large sphere labeled R, as for frame 
// 3 of the alkenes lesson. Easiest way is probably to hide the H atoms of the methyl group 
// and then increase the sphere size of C and change its color to C per the alkene lesson. 
lesson.addInstruction(
  `We will now examine some general structural and electronic properties that apply to 
    alcohols derived from alkanes. In doing so we will focus on the properties of the hydroxyl 
    functional group. The alkyl group attached to the hydroxyl group can be represented by “R” 
    where the group “R” is the alkyl substituent to which the hydroxyl group is attached.`,
  `display ${methanol}; moveto 0.0 { -522 -762 -382 87.01} 859.11 -50.55 41.81 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `hide ADD @10, @11, @13; select @9; spacefill 40%; color atoms green; label \"R\"; font label 19; color label black;`
);

// Display generic R-OH alcohol, add sp3 orbitals to show tetrahedral electron domain 
// geometry, then add the necessary lines to highlight the tetrahedral unit. A good way to 
// find the end points of the lobes is to use that trick I discovered: set picking draw, 
// draw a line, use shift click to drag the line to where it is on top of the lobe, then 
// “show draw:.
lesson.addInstruction(
  `The O atom of a hydroxyl group is bonded to two atoms (H, and the C of the R group) and 
    contains two lone pairs of electrons. With two bonded and two nonbonded electron domains, 
    the AXE designation for the O is AX<sub>2</sub>E<sub>2</sub>. With four total electron 
    domains, the electron domain geometry surrounding the O atom is tetrahedral, as shown 
    here.`,
  `display ${methanol}; moveto 0.0 { -262 -803 -535 103.74} 1727.98 -202.85 117.21 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `hide ADD @10, @11, @13; select @9; spacefill 40%; color atoms green; label \"R\"; font label 19; color label black;` +
    `select @12; lcaoCartoon COLOR TRANSLUCENT PURPLE; lcaoCartoon CREATE sp3a; lcaoCartoon CREATE sp3b; lcaoCartoon CREATE sp3c; lcaoCartoon CREATE sp3d;` +
    `draw roh_geo on;`
);

// Highlight bent geometry, still showing the lone pair lobes. The bonded lobes can probably 
// be turned off here?
lesson.addInstruction(
  `With two bonded and two nonbonded electron domains, the molecular geometry about the O 
    atom will be bent.`,
  `display ${methanol}; moveto 0.0 { -250 -858 -448 115.91} 1727.98 -266.65 94.81 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
    `hide ADD @10, @11, @13; select @9; spacefill 40%; color atoms green; label \"R\"; font label 19; color label black;` +
    `draw roh_m_geo on;` +
    `select @12; lcaoCartoon COLOR TRANSLUCENT RED; lcaoCartoon CREATE sp3c; lcaoCartoon CREATE sp3d;` +
    `select @9, @12, @31; color translucent 0.5;`
);

// I got a bond angle of 107 degrees for an optimized methanol molecule in Avogadro. I think 
// the angle is actually closer to 108-109 degrees. Anyway, it is slightly less than 109.5. 
// just have the angle appear as what it is, as long as it is something slightly less than 
// 109.5. 
lesson.addInstruction(
  `The bond angles in a molecule with four electron domains, and in which all the electron 
   domains are bonded to terminal atoms, will be exactly 109.5 degrees. For the O in alcohols, 
   the lone pairs of electrons spread out more in space than the bonded pairs of electrons, 
   resulting in a slight compression of the bond angle.`,
  `display ${methanol}; moveto 0.0 { -250 -858 -448 115.91} 1727.98 -266.65 94.81 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
   `hide ADD @10, @11, @13; select @9; spacefill 40%; color atoms green; label \"R\"; font label 19; color label black;` +
   `select @12; lcaoCartoon COLOR TRANSLUCENT RED; lcaoCartoon CREATE sp3c; lcaoCartoon CREATE sp3d;` +
   `measure ({30}) ({11}) ({8});`
);

// Show methanol, label O with delta minus and C and H with delta plus as for frame 15 in the 
// ammonia vsepr lesson: http://ensignchemistry.com/jsmol%20models/lessons/NH3_vsepr/
lesson.addInstruction(
  `Now that we have established the molecular geometry about the O atom in an alcohol, we will 
    look at the polarity of alcohols. Carbon and hydrogen have fairly similar electronegativity 
    values, so each C-H bond in the alkyl portion of an alcohol is only weakly polar. O is 
    much more electronegative than either H or C. Due to the differences in electronegativity, 
    the O in an alcohol has a partial negative charge while the H and C atoms to which it is 
    bonded have partial positive charges. This is highlighted here for methanol.`,
  `display ${methanol}; moveto 0.0 { -250 -858 -448 115.91} 1727.98 -266.65 94.81 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @12; label δ-; font label 32; color label black; set labeloffset 0 0; select @9; label δ+; font label 32; color label black; set labeloffset 0 0; select @31; label δ+; font label 32; color label black; set labeloffset 0 0;`
);

// Continue using methanol. Show bond dipoles per frame 16 of VSEPR NH3 lesson. I like putting 
// the dipole right on the bond and making the bond translucent to do this (see script for 
// frame 16). Since C is a little more electronegative than H, you can make the O-H dipole 
// slighty longer than the C-H dipole if you want, but this is really not necessary. 
lesson.addInstruction(
  `The differences in electronegativity make the C-O and H-O bonds polar. The bond dipole 
    moments are represented by vectors, where the arrows point in the directions of the more 
    electronegative atoms. The length of the vector is proportional to the differences in 
    electronegativity of the two atoms present in the bond. Shown here are the bond dipoles 
    for the C-O and H-O bonds.`,
  `display ${methanol}; moveto 0.0 { -250 -858 -448 115.91} 1727.98 -266.65 94.81 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select *; color translucent 0.5;` +
  `dipole bond1 (@31, @12); dipole bond1 width 0.05; color dipole red; dipole bond1 offsetSide 0.0; dipole bond1 offset 0.2;` +
  `dipole bond2 (@9, @12); dipole bond2 width 0.05; color dipole red; dipole bond2 offsetSide 0.0; dipole bond2 offset 0.2;`

);

// Reproduce frame 17 of the NH3 VSEPR lesson for methanol. Include echo text like frame 17. 
lesson.addInstruction(
  `The directions and magnitudes of bond dipoles dictate whether, and to what an extent, a 
    molecule is polar. In the case of an alcohol, the individual dipoles for the C-O and H-O 
    bonds reinforce each other in a “vertical” direction, while they cancel one another in 
    the “horizontal” directions. The net dipole moment due to the hydroxyl functional group, 
    obtained by adding the individual dipole vectors, is shown, alternating with the bond 
    dipoles. Since C and H have similar electronegativities, the C-H bonds in methanol are 
    only slightly polar, and they are therefore disregarded here.`,
  ``
);

// Show electrostatic potential map for methanol per frame 18 of NH3 VSEPR lesson. 
// select *; if ({atomno < 10}.partialcharge == 0){calculate partialcharge};isosurface vdw map mep; isosurface translucent; spin on;
lesson.addInstruction(
  `This rendering shows the electrostatic potential map for methanol. The electrostatic 
    potential map is an isosurface which allows the visualization of partial charges within 
    molecules due to electronegativity differences of bonded atoms. As discussed on the 
    previous slides, since O is more electronegative than C and H, it has a partial negative 
    charge, and there is a net dipole moment in the molecule. The colors in the electrostatic 
    potential map allow the regions of higher and lower electron density due to bond and 
    molecule polarity to be visualized. Red colors represent regions where electron density is 
    being pulled towards more electronegative atom(s), while blue colors represent regions 
    where electron density is being pulled away from electropositive atom(s). Green colors 
    represent net electrically neutral regions. The electrostastic potential map for methanol 
    shown here emphasizes how the electronegative O pulls electron density away from the the 
    C and H atoms it is bonded to.`,
  `display ${methanol}; moveto 0.0 { -250 -858 -448 115.91} 1727.98 -266.65 94.81 {7.496656885552758 -3.8463515029665087 0.10895982320236501} 12.408430709530037 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select *; if ({atomno < 10}.partialcharge == 0){calculate partialcharge}; select ${methanol}; isosurface vdw map mep; isosurface translucent;`
);

// This would be cool. Add an H2O moleculeto the log file, where they it is oriented so that a hydrogen bond can be displayed on this 
// slide like this (but do it for methanol):
lesson.addInstruction(
  `The polarity of the O-H bond in methanol allows methanol to form favorable hydrogen bonds 
    with other methanol molecules, as well as other molecules capable of forming hydrogen 
    bonds, like water. Methanol is miscible (soluble in all proportions) in water due to the 
    hydrogen bonding capability.`,
  ``
);

// Ethanol with vdw isosurface
lesson.addInstruction(
  `The C-O and H-O bonds in other alcohols will be polar as well. Shown here is the  electrostatic 
    potential map for ethanol, which, like methanol, is miscible in water.`,
  ``
);

// 1-propanol with vdw isosurface added
lesson.addInstruction(
  `Shown here is the electrostatic potential map for 1-propanol`,
  ``
);

// Show structure of 1-pentanol with the vdw isosurface on
lesson.addInstruction(
  `Due to the similarities in electronegativities of C and H, and symmetrical arrangement of 
    atoms in alkyl groups, the alkyl portions of alcohols are largely nonpolar. As the alkyl 
    groups of alcohols become larger, and longer in length, more London dispersion forces 
    are formed with other alcohol molecules in the liquid and solid states of these substances. 
    Alcohols become increasingly more nonpolar in character as the alkyl chain length attached 
    to the hydroxyl functional group increases in length. While the OH group will always be 
    polar, more C and H atoms in the alkyl portion will cause London dispersion forces to 
    become increasingly more important than hydrogen bonding as an intermolecular attractive 
    force. For this reason, the solubilities of alcohols in water decrease as the length of 
    the alkyl chain increases. Methanol, ethanol and 1-propanol are all miscible in water, 
    while butanol exhibits an upper solubility limit of  0.11 mol/100 g H<sub>2</sub>O. The 
    next linear alcohol, 1-pentanol, shown here, has a solubility of only 0.030 mol/100 g 
    H<sub>2</sub>O.`,
  ``
);

// Show a bunch of different alcohols from the log file here?
lesson.addInstruction(
  `This concludes the lesson for alcohols. Click here to return to the main lessons page.`,
  ``
);

lesson.execute(0);