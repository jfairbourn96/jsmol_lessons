// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
let lesson = new Lesson();

document.getElementById('restartButton').onclick = lesson.restart;
document.getElementById('refreshButton').onclick = () => { lesson.execute(0); }
document.getElementById('backButton').onclick = () => { lesson.execute(-1); }
document.getElementById('nextButton').onclick = () => { lesson.execute(1); }
document.getElementById('scriptButton').onclick = () => lesson.runCommand(document.getElementById('console').value);

// 1: Loads the molecule and draws the shapes then hides them. 
lesson.addInstruction(
  `Water molecules in ice are arranged in an ordered crystalline lattice called "hexagonal ice".`,
  `reset; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;` + lesson.shapeString
);

// 2: Large rotation 1 (box)
lesson.addInstruction(
  `The ordered arrangement of water can be visualized by rotating the assembly of water molecules.`,
  `display *; moveto 3.0 { -462 -771 439 102.85} 100.0 0.0 0.0 {1.1279998 0.0 0.0} 16.976467;`
);

// 3: Large rotation 2 (box)
lesson.addInstruction(
  `The ordered arrangement of water can be visualized by rotating the assembly of water molecules.`,
  `display *; moveto 2.5 { -661 -365 656 136.67} 100.0 0.0 0.0  {1.1279998 0.0 0.0} 16.976467;`
)

// 4: Large rotation 3 (hex)
lesson.addInstruction(
  `The ordered arrangement of water can be visualized by rotating the assembly of water molecules.`,
  `display *; moveto 2.0 { -1 5 1000 120.44} 100.0 0.0 0.0 {1.1279998 0.0 0.0} 16.976467 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// 5: Zoom to yellow hex
lesson.addInstruction(
  `A unit giving rise to the name "hexagonal ice" is highlighted in yellow.`,
  `display *; draw hex* on;` +
  `moveto 2.0 { -1 5 1000 120.44} 231.31 0.0 0.0 {1.1279998 0.0 0.0} 16.976467;`
)

// 6: Zoom out from hex
lesson.addInstruction(
  `Each water molecule in ice is hydrogen bonded to 4 other water molecules.`,
  `display *;` +
  `moveto 2.0 { 625 385 679 143.29} 75.62 0.0 0.0 {1.1279998 0.0 0.0} 16.976467;`
)

// 7: Zoom into tetrahedron
lesson.addInstruction(
  `Each water molecule in ice is hydrogen bonded to 4 other water molecules.`,
  `hide {*}; 
  display {atomno=[328,329,330,415,416,417,427,428,429,430,431,432,448,449,450]};
  moveto 1.0 { 584 367 724 149.67} 265.9 16.91 -7.23 {1.1279998 0.0 0.0} 16.976467;`
)

// 8: Highlight and measure H-bonds on first tetrahedron
lesson.addInstruction(  
  `Each water molecule in ice is hydrogen bonded to 4 other water molecules.`,
  `hide {*}; 
  display {atomno=[328,329,330,415,416,417,427,428,429,430,431,432,448,449,450]};
  draw hbond1* on;
  measure (atomno=427) (atomno=432); measure (atomno=430) (atomno=449);
  measure (atomno=431) (atomno=415); measure (atomno=430) (atomno=330);
  moveto 1.0 { 571 253 781 162.53} 231.22 16.82 -22.41 {1.1279998 0.0 0.0} 16.976467;`
  )

// 9: Draw first the blue tetrahedron
lesson.addInstruction(
  `The oxygen atoms of the four water molecules surrounding a central water form a tetrahedral unit.`,
  `hide {*}; 
  display {atomno=[328,329,330,415,416,417,427,428,429,430,431,432,448,449,450]};
  draw tet1* on; draw hbond1* on;
  moveto 1.0 { 571 253 781 162.53} 231.22 16.82 -22.41 {1.1279998 0.0 0.0} 16.976467;`  
)

// 10: Rotate and display the molecules for the second tetrahedron
lesson.addInstruction(
  `Hydrogen bonding to additional water molecules forms an ordered structure, with the tetrahedral units formed by O atoms indicated.`,
  `hide {*}; 
  display {atomno=[328,329,330,343,344,345,346,347,348,349,350,351,364,365,366,415,416,417,427,428,429,430,431,432,448,449,450]};
  draw tet1* on; draw hbond1* on;
  moveto 2.0 { -171 -232 957 120.4} 231.22 31.49 27.44 {1.1279998 0.0 0.0} 16.976467;`
)

// 11: Draw the outline and hbonds for the second tetrahedron
lesson.addInstruction(
  `Hydrogen bonding to additional water molecules forms an ordered structure, with the tetrahedral units formed by O atoms indicated.`,
  `hide {*}; 
  display {atomno=[328,329,330,343,344,345,346,347,348,349,350,351,364,365,366,415,416,417,427,428,429,430,431,432,448,449,450]};
  draw tet1* on; draw tet2* on; draw hbond1* on; draw hbond2* on;
  moveto 2.0 { -171 -232 957 120.4} 231.22 31.49 27.44 {1.1279998 0.0 0.0} 16.976467;`
)

// 12: Rotate and display the molecules for the third tetrahedron
lesson.addInstruction(
  `Hydrogen bonding to additional water molecules forms an ordered structure, with the tetrahedral units formed by O atoms indicated.`,
  `hide {*}; 
  display {atomno=[328,329,330,343,344,345,346,347,348,349,350,351,364,365,366,415,416,417,427,428,429,430,431,432,448,449,450,769,770,771,766,767,768,688,689,690,772,773,774]}
  draw tet1* on; draw tet2* on; draw hbond1* on; draw hbond2* on;
  moveto 1.0 { -300 -252 920 124.93} 231.22 21.63 23.34 {1.1279998 0.0 0.0} 16.976467;`
)

// 13: Draw the outline and hbonds for the third tetrahedron
lesson.addInstruction(
  `Hydrogen bonding to additional water molecules forms an ordered structure, with the tetrahedral units formed by O atoms indicated.`,
  `hide {*}; 
  display {atomno=[328,329,330,343,344,345,346,347,348,349,350,351,364,365,366,415,416,417,427,428,429,430,431,432,448,449,450,769,770,771,766,767,768,688,689,690,772,773,774]}
  draw tet1* on; draw tet2* on; draw tet3* on; draw hbond1* on; draw hbond2* on; draw hbond3* on;`
)

// 14: Rotate and display the molecules for the fourth tetrahedron
lesson.addInstruction(
  `Hydrogen bonding to additional water molecules forms an ordered structure, with the tetrahedral units formed by O atoms indicated.`,
  `hide {*}; 
  display {atomno=[328,329,330,343,344,345,346,347,348,349,350,351,364,365,366,415,416,417,427,428,429,430,431,432,448,449,450,769,770,771,766,767,768,688,689,690,772,773,774,442,443,444,451,452,453,421,422,423,424,425,426]}
  draw tet1* on; draw tet2* on; draw tet3* on; draw hbond1* on; draw hbond2* on; draw hbond3* on;
  moveto 1.0 { -894 -248 372 165.06} 231.22 -29.44 -2.41 {1.1279998 0.0 0.0} 16.976467 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// 15: Draw the outline and hbonds for the fourth tetrahedron
lesson.addInstruction(
  `Hydrogen bonding to additional water molecules forms an ordered structure, with the tetrahedral units formed by O atoms indicated.`,
  `hide {*}; 
  display {atomno=[328,329,330,343,344,345,346,347,348,349,350,351,364,365,366,415,416,417,427,428,429,430,431,432,448,449,450,769,770,771,766,767,768,688,689,690,772,773,774,442,443,444,451,452,453,421,422,423,424,425,426]}
  draw tet1* on; draw tet2* on; draw tet3* on; draw tet4* on; draw hbond1* on; draw hbond2* on; draw hbond3* on; draw hbond4* on;
  moveto 1.0 { -894 -248 372 165.06} 231.22 -29.44 -2.41 {1.1279998 0.0 0.0} 16.976467 {0 0 0} 0 0 0 3.0 0.0 0.0;`
)

// 16: Zoom out to end
lesson.addInstruction(
  `Thanks for watching!`,
  `draw OFF;
  display *;
  moveto 2.5 { 625 385 679 143.29} 75.62 0.0 0.0 {1.1279998 0.0 0.0} 16.976467;
  `
)

lesson.execute(0);

