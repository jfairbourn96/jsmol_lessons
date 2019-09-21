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
  var option01 = document.createElement("option");
  var option02 = document.createElement("option");
  var option03 = document.createElement("option");
  var option04 = document.createElement("option");
  var option05 = document.createElement("option");			
  var option06 = document.createElement("option");

  // assign each element a molecule object from carbon_molecules.js
  option01.molecule = instructions;
  option02.molecule = graphite;
  option03.molecule = diamond;
  option04.molecule = buckyball;
  option05.molecule = graphene_1;
  option06.molecule = nanotube;
	
  
  // label each element
  option01.label = "Instructions";
  option02.label = "Graphite";			
  option03.label = "Diamond";
  option04.label = "Buckyball";
  option05.label = "Graphene";
  option06.label = "Nanotube";
  
  // link each option to the select element
  moleculeSelect.add(option01);
  moleculeSelect.add(option02);
  moleculeSelect.add(option03);
  moleculeSelect.add(option04);
  moleculeSelect.add(option05);
  moleculeSelect.add(option06);
  
  // IMPORTANT: Make sure one of the options is selected, or the loadNew() function call will not work.
  option01.selected = "selected";
  
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