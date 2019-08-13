// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

let propane = "WITHIN(MOLECULE, {@1})";
let n_butane = "WITHIN(MOLECULE, {@12})";
let isobutane = "WITHIN(MOLECULE, {@26})";
let n_pentane = "WITHIN(MOLECULE, {@40})";
let isopentane = "WITHIN(MOLECULE, {@57})";
let neopentane = "WITHIN(MOLECULE, {@75})";
let n_hexane = "WITHIN(MOLECULE, {@91})";
let methyl_2_pentane = "WITHIN(MOLECULE, {@111})";
let methyl_3_pentane = "WITHIN(MOLECULE, {@131})";
let dimethyl_2_3_butane = "WITHIN(MOLECULE, {@151})";
let dimethyl_2_2_butane = "WITHIN(MOLECULE, {@177})";
let ethyle_3_pentane = "WITHIN(MOLECULE, {@191})";

lesson.addInstruction(
  `Structural isomers are compounds that have the same molecular formula, but different arrangements 
    for bonded atoms. In this lesson we will look at structural isomers of alkanes called 
    branched-chain alkanes.`,
  `display ${n_pentane}; display ADD ${isopentane}; display ADD ${neopentane};` + 
  `select @43, @65, @88; label DISPLAY;` +
  `moveto 0.0 {0 0 1 0} 235.93 0.0 0.0 {5.62001418272841 3.8978627743929484 0.03395195763089276} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `For straight-chain alkanes, all of the C atoms are connected in a continuous chain with no 
    branching. Branched-chain alkanes are those in which one or more alkyl groups (methyl, 
    ethyl, etc) replace one or more H atoms on a methylene group (-CH<sub>2</sub>-) in the 
    continuous chain of a linear alkane. The shortest linear alkane for which branching can 
    occur is propane (structural formula CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>3</sub>). In 
    this rendering, one of the methylene H atoms of propane is being replaced with the 
    simplest alkyl group, a methyl group, to give a structural isomer of butane.`,
  // Display propane
  `display ${propane}; moveto 0.0 { -282 -918 278 27.29} 463.75 0.0 0.0 {-2.420223410965005 6.828994818847897 -0.04822181362130437} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 1; lcaoCartoon COLOR TRANSLUCENT ORANGE; lcaoCartoon SCALE 1.5;` +
  `select @8; lcaocartoon CREATE s;` +
  `moveto 1.0 { -391 -903 178 45.75} 1233.58 29.0 -36.7 {-2.420223410965005 6.828994818847897 -0.04822181362130437} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  // Subtly change to isobutane/methylpropane and then zoom out with the methyl group replaced/highlighted
  `delay 1; display ${isobutane}; moveto 0.0 { -478 235 846 117.96} 1172.39 20.1 -25.1 {-3.2037054159468568 -2.656440466809013 -0.4379571019117368} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @26, @28, @29, @30; lcaoCartoon CREATE S; moveto 1.0 { -308 113 945 114.34} 582.89 -0.3 -8.0 {-3.2037054159468568 -2.656440466809013 -0.4379571019117368} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `The structural isomer created from propane by replacement of a methylene hydrogen with a 
    methyl group has the same molecular formula as the linear alkane butane 
    (C<sub>4</sub>H<sub>10</sub>). Thus, these two compounds are structural isomers. 
    Technically, either compound can be referred to properly as “butane”. To distinguish them, 
    straight-chain butane is called n-butane, where the “n” stands for “normal”. In this 
    context, a “normal” alkane is one containing all C atoms in a linear chain and with no 
    branching.  The structural isomer of butane with branching may be properly referred to as 
    “isobutane” or “2-methylpropane”. The name “isobutane” is a traditional name still used 
    to some extent. The name “2-methylpropane” is the proper systematic name according to the 
    nomenclature rules for naming organic compounds. When naming an alkane systematically, 
    the longest continuous chain of C atoms serves as the base name of the compound. The C 
    atoms in the chain are numbered starting with the first atom in the chain. The numerical 
    position(s) on the chain of alkyl substituents are placed before the alkyl name, followed 
    by the base name. In this rendering, the longest continuous chains of the structural 
    isomers n-butane and methylpropane are highlighted by changing their bond colors to yellow.`,
  `display ${n_butane}; display ADD ${isobutane}; moveto 1.0 { 128 -283 950 93.63} 310.66 -1.7 -1.8 {-2.5908915444330227 -0.287434616043215 0.021344640953006654} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @24, @33; label DISPLAY;` +
  `delay 0.5; select @12, @26; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @13, @27; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @17, @31; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @20; color BONDS YELLOW; color BALLS YELLOW; label DISPLAY;`
);

lesson.addInstruction(
  `If both H atoms on the methylene (-CH<sub>2</sub>-) group of propane had been replaced with 
    methyl groups, the following compound would be formed. The longest continual chain is still 
    propane, but now there are two methyl groups branching off of the middle C atom, and five 
    total C atoms rather than 4. This compound is named systematically as 2,2-dimethylpropane.`,
  `display ${neopentane}; moveto 0.0 { 508 700 -501 114.64} 450.23 0.0 0.0 {7.95694278885541 6.0038564999259965 0.13577116380840537} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.5; select @83; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @75; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @87; color BALLS YELLOW; label DISPLAY;` +
  `lcaoCartoon COLOR TRANSLUCENT ORANGE; lcaoCartoon SCALE 1.5;` +
  `delay 1.0; select @79, @80, @81, @82; lcaoCartoon CREATE S;` +
  `delay 1.0; select @74, @76, @77, @78; lcaoCartoon CREATE S;`
);

lesson.addInstruction(
  `The molecular formula for 2,2-dimethylpropane is C<sub>5</sub>H<sub>12</sub>, so it is a 
    structural isomer of the straight-chain alkane n-pentane. Henceforth, we will always place 
    “n-“ in front of linear alkanes to conform to nomenclature rules. 2,2-dimethylpropane is 
    often referred to by the traditional name “neopentane”.`,
  `display ${neopentane}; display ADD ${n_pentane}; moveto 0.0 { -149 -39 -988 124.6} 257.97 -8.3 -1.2 {5.419983613124699 5.548887130527837 -0.2688508572967045} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @43, @88; label DISPLAY;` +
  `delay 1.5; select @83; label \"C1\"; select @83, @51; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @48, @75; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @45, @74; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @41; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.5; select @40; color BALLS YELLOW; label DISPLAY;`
);

lesson.addInstruction(
  `2,2-dimethylpropane is not the only structural isomer of n-pentane. Starting with 
    2,2-dimethylpropane, imagine taking one of the methyl groups from C<sub>2</sub>, and moving 
    it to C<sub>3</sub>, at the same time moving the H from C<sub>3</sub> to C<sub>2</sub>. These 
    substitutions would result in a new isomer of pentane being formed where the longest 
    continuous chain now has four C atoms rather than 3.  When looking at structural formulas 
    of alkanes, it is important to always identify the longest continual chain of C atoms to 
    get the proper base name. The compound formed from the above substitution is 2-methylbutane. 
    When a single substituent branches off a continual chain, the numbering of the continual 
    chain starts with the end closest to the substituent. `,
  `display ${neopentane}; display ADD ${isopentane}; moveto 0.0 { 834 -539 -121 167.83} 245.39 0.0 0.0 {6.9885090553956175 3.2998352810245826 0.3876643756472465} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0; ` +
  `delay 0.75; select @79, @57; color BALLS YELLOW; label DISPLAY; ` +
  `delay 0.75; select @75, @58; color BALLS YELLOW; label DISPLAY; ` +
  `delay 0.75; select @83; label \"C3\"; select @83, @62; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.75; select @63; color BALLS YELLOW; label DISPLAY;` +
  `delay 1.5; moveto 1.0 { 844 -536 -20 179.84} 373.21 27.7 -23.6 {6.9885090553956175 3.2998352810245826 0.3876643756472465} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 1.25; select @74, @76, @77, @78; color ATOMS RED;` +
  `delay 0.75; draw CURVE {7.057 6.766 -0.846} {8.503786 7.2949367 -1.7271919} {9.492033 6.6998587 -1.7938538} {9.571 5.727 -1.312} DIAMETER 10 COLOR RED;` +
  `delay 1.0; select @86; color ATOMS RED;` +
  `delay 1.0; moveto 0.75 { 844 -536 -20 179.84} 373.21 -27.1 14.2 {6.9885090553956175 3.2998352810245826 0.3876643756472465} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.75; select @63, @66, @67, @68; color ATOMS RED; color BALLS RED;` +
  `delay 0.75; select @70; color ATOMS RED;` +
  `delay 1.5; moveto 1.0 { 834 -539 -121 167.83} 245.39 0.0 0.0 {6.9885090553956175 3.2998352810245826 0.3876643756472465} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `Branched-chain alkanes will always have the general molecular formula C<sub>n</sub>H<sub>2n+2</sub>, 
    the same general formula that straight-chain alkanes have. The greater the value of “n”, the more 
    structural isomers will be present for a given alkane. There are only two structural isomers 
    possible for alkanes with the chemical formula C<sub>4</sub>H<sub>10</sub> (n-butane and 
    2-methylpropane). There are three structural isomers possible for alkanes with the chemical 
    formula C<sub>5</sub>H<sub>12</sub> (n-pentane, 2-methylbutane, and 2,2-dimethylpropane). All 
    three isomers of pentane are shown here.`,
  `display ${neopentane}; display ADD ${isopentane}; display ADD ${n_pentane}; zoom 0;` +
  `moveto 0.0 { 834 -552 10 163.88} 235.93 0.0 0.0 {5.62001418272841 3.8978627743929484 0.03395195763089276} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @56, @61, @85; label DISPLAY;` +
  `delay 0.75; select @51, @79, @57; color BALLS YELLOW; label DISPLAY; ` +
  `delay 0.75; select @48, @75, @58; color BALLS YELLOW; label DISPLAY; ` +
  `delay 0.75; select @83; label \"C3\"; select @45, @83, @62; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.75; select @41, @63; color BALLS YELLOW; label DISPLAY;` +
  `delay 0.75; select @40; color BALLS YELLOW; label DISPLAY;`
);

lesson.addInstruction(
  `There are five possible structural isomers possible for alkanes with the formula 
    C<sub>6</sub>H<sub>14</sub>. Shown below is n-hexane. To identify the additional isomers, start by 
    changing the longest continual chain from 6 to 5 carbon atoms, and then determine what possible 
    branching could be present. These isomers are shown in the next two renderings. `,
  `display ${n_hexane}; moveto 1.0 { -727 570 -382 153.5} 299.34 0.0 0.0 {3.4838856755804066 -4.602453571505962 0.20976198043584193} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.75; select @91; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @92; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @96; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @99; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @102; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @105; label DISPLAY; color BALLS YELLOW;`
);

lesson.addInstruction(
  `Shown here is 2-methylpentane.`,
  `select @91, @92, @96, @99, @102, @105; color BALLS YELLOW; label DISPLAY;` +
  `display ${methyl_2_pentane}; display ADD ${n_hexane}; moveto 1.0 { 988 -155 6 163.13} 190.62 0.0 0.0 {1.0990376476484973 -7.011063597388084 0.028260997397294853} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.75; select @111; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @112; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @116; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @117; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @120; label DISPLAY; color BALLS YELLOW;`
);

lesson.addInstruction(
  `Shown here is 3-methylpentane. There are two isomers of hexane where the longest chain is 5 C atoms. 
    There are two additional isomers where the longest chain is 4 C atoms. These will be rendered in 
    the next two states.`,
  `select @91, @92, @96, @99, @102, @105, @111, @112, @116, @117, @120; color BALLS YELLOW; label DISPLAY;` +
  `display ${methyl_3_pentane}; display ADD ${methyl_2_pentane}; display ADD ${n_hexane};` +
  `moveto 1.0 { 988 -136 -74 164.24} 168.71 0.0 0.0 {3.3170246912235726 -7.766517777109776 0.09283765801428605} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.75; select @131; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @132; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @136; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @139; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @140; label DISPLAY; color BALLS YELLOW;`
);

lesson.addInstruction(
  `2,3-dimethylbutane`,
  `select @91, @92, @96, @99, @102, @105, @111, @112, @116, @117, @120, @131, @132, @136, @139, @140; color BALLS YELLOW; label DISPLAY;` +  
  `display ${methyl_3_pentane}; display ADD ${methyl_2_pentane}; display ADD ${n_hexane}; display ADD ${dimethyl_2_3_butane};` +
  `moveto 1.0 { 902 -417 -111 167.41} 164.6 -5.6 1.8 {6.3116625375359146 -8.075891748313426 -0.04686762061631203} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.75; select @157; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @156; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @152; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @151; label DISPLAY; color BALLS YELLOW;`
);

lesson.addInstruction(
  `2,2-dimethylbutane`,
  `select @91, @92, @96, @99, @102, @105, @111, @112, @116, @117, @120, @131, @132, @136, @139, @140, @151, @152, @156, @157; color BALLS YELLOW; label DISPLAY;` +
  `display ${methyl_3_pentane}; display ADD ${methyl_2_pentane}; display ADD ${n_hexane}; display ADD ${dimethyl_2_3_butane}; display ADD ${dimethyl_2_2_butane};` +
  `moveto 1.0 { 904 -419 79 166.73} 159.21 -8.8 3.2 {7.281069922316922 -7.237746026310885 0.04500109580308027} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `delay 0.75; select @183; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @172; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @176; label DISPLAY; color BALLS YELLOW;` +
  `delay 0.75; select @177; label DISPLAY; color BALLS YELLOW;`
);

lesson.addInstruction(
  `Shown here are all five isomers of hexane with the formula C6H14.`,
  `display ${methyl_3_pentane}; display ADD ${methyl_2_pentane}; display ADD ${n_hexane}; display ADD ${dimethyl_2_3_butane}; display ADD ${dimethyl_2_2_butane};` +
  `select @188, @160, @137, @118, @93; label DISPLAY; display` +
  `moveto 1.0 { 904 -419 79 166.73} 159.21 -8.8 3.2 {7.281069922316922 -7.237746026310885 0.04500109580308027} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;`
);

lesson.addInstruction(
  `The number of possible structural isomers increases dramatically for each additional C atom in the 
    reference n-alkane. There are 9 isomers of heptane (C<sub>7</sub>H<sub>16</sub>) and 18 isomers of 
    octane (C<sub>8</sub>H<sub>18</sub>). For  heptane, one structural isomers will contain an ethyl 
    group (-CH<sub>2</sub>CH<sub>3</sub>). This isomer, 3-ethylpentane, is shown here. As the number 
    of C atoms becomes successively greater, isomers can incorporate combinations of methyl, ethyl, 
    propyl, and longer chain alkyl substituents. The substituents can also be branched, adding more 
    structural complexity.`,
  `display ${ethyle_3_pentane}; moveto 0.0 { -909 413 62 169.22} 319.74 0.0 0.0 {13.857905666836592 5.054045181617122 -0.6008399439849127} 15.694997647746145 {0 0 0} 0 0 0 3.0 0.0 0.0;` +
  `select @191, @192, @196, @204, @206, @208; label DISPLAY;` +
  `lcaoCartoon COLOR TRANSLUCENT YELLOW; lcaoCartoon SCALE 1.2;` +
  `delay 1.0; select @199, @201, @202, @200, @203, @205, @204; lcaoCartoon CREATE S;` +
  `select @205; label DISPLAY;`
);

lesson.execute(0);