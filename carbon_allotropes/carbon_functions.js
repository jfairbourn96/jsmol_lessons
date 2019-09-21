// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
// This script defines the functions and everything else referenced in carbon_allotropes.html

// info object passed to the Jmol in carbon_allotropes.html
let info = {
  color: "#FFFFFF", 
  height: 500,      
  width: 500,
  j2sPath: "../jsmol/j2s",
  script: "load ../PDB/graphite.pdb; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;",
  debug: false
};

// Adds initWindow() as the window load callback.
window.addEventListener("load", initWindow);

// Function that initializes all of the options in the html and properly associates
// each option with a molecule.
function initWindow() {
  var moleculeSelect = document.getElementById('configuration');
  
  // initialize the 6 option elements
  let options = {
    option01: document.createElement("option"),
    option02: document.createElement("option"),
    option03: document.createElement("option"),
    option04: document.createElement("option"),
    option05: document.createElement("option"),			
    option06: document.createElement("option")
  }

  // assign each element a molecule object from carbon_molecules.js
  options.option01.molecule = buckyball;
  options.option02.molecule = nanotube;
  options.option03.molecule = diamond;
  options.option04.molecule = graphite;
  options.option05.molecule = graphene_1;
  options.option06.molecule = graphene_2;
  
  // label each element
  options.option01.label = "Buckyball";			
  options.option02.label = "Nanotube";
  options.option03.label = "Diamond";
  options.option04.label = "Graphite";
  options.option05.label = "Graphene";
  options.option06.label = "Graphene (2)";
  
  // give each option its correct inner html
  options.option01.innerHTML = options.option01.label;
  options.option02.innerHTML = options.option02.label;
  options.option03.innerHTML = options.option03.label;
  options.option04.innerHTML = options.option04.label;
  options.option05.innerHTML = options.option05.label;
  options.option06.innerHTML = options.option06.label;

  // link each option to the select element
  moleculeSelect.add(options.option01);
  moleculeSelect.add(options.option02);
  moleculeSelect.add(options.option03);
  moleculeSelect.add(options.option04);
  moleculeSelect.add(options.option05);
  moleculeSelect.add(options.option06);
  
  // IMPORTANT: Make sure one of the options is selected, or the loadNew() function call will not work.
  options.option05.selected = "selected";
  
  loadNew();
}

// Loads the new molecule, sets the title and description appropriately, and sets options to default
function loadNew() {
  var molecule = getCurrentMolecule();
  
  var loadString = "load " + molecule.path + "; select *; spacefill 0.4;";
  
  document.getElementById('name').innerHTML = "Carbon Allotrope: " + molecule.title;
  document.getElementById('description').innerHTML = molecule.description;
  document.getElementById("mt_ballstick").checked = true;
  document.getElementById("co_spin").checked = false;
  document.getElementById("co_isosurface").checked = false;

  Jmol.script(main, loadString);
}

function getCurrentMolecule(){
  moleculeSelect = document.getElementById("configuration");
  return moleculeSelect.options[moleculeSelect.selectedIndex].molecule;
}

function toggleIsosurface() {
  if (document.getElementById('co_isosurface').checked) {
    Jmol.script(main, 'isosurface vdw; isosurface translucent;');
  } else {
    Jmol.script(main, 'select *; isosurface off;');
  }
}

function toggleSpin() {
  if (document.getElementById('co_spin').checked) {
    Jmol.script(main, 'spin on;');
  } else {
    Jmol.script(main, 'spin off;');
  }
}

function ballAndStick() {
  Jmol.script(main, 'wireframe 0.15; spacefill 20%');
}

function spacefill() {
  Jmol.script(main, 'spacefill 100%;');
}

function stick() {
  Jmol.script(main, 'wireframe 0.2; spacefill off;');
}

function changeColor(color) {
  var colorString = 'background ' + color + ';';
  Jmol.script(main, colorString);
}