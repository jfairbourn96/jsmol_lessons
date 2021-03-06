// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
class Lesson 
{
  constructor()
  {
    // Instruction variables
    this.instructionList = new Array();
    this.instruction = 0;
    this.maxInstruction = -1;

    /** Script that runs once at page load and initializes all the shapes and text that will be drawn. */
    this.initializeScript = "";
    
    /** Default reset script hides labels, drawings, measurements, and surfaces*/
    this.resetScript = 'select *; label hide; draw * off; set echo off; measure off; isosurface off; lcaoCartoon off; mo off;';
    
    // HTML Elements
    this.descriptionBox = document.getElementById('description');
    this.refreshButton = document.getElementById('refreshButton');
    this.restartButton = document.getElementById('restartButton');
    this.backButton = document.getElementById('backButton');
    this.nextButton = document.getElementById('nextButton');
    
    this.setInitializeScript = (script) => this.initializeScript = script;
    this.setResetScript = (script) => this.resetScript = script;
    this.appendToResetScript = (script) => this.resetScript += ` ${script};`;

    this.addInstruction = (description, script) => 
    {
      this.instructionList.push(new Instruction(description, script));
      this.maxInstruction++;
    }

    this.execute = (step) =>
    {
      this.instruction += step;
      let resetScript = this.resetScript;

      // Only interrupt the instruction if we're not executing the first one.
      if(this.instruction > 0) 
      {
        resetScript = '!quit;' + resetScript;
      }

      // Adjust the buttons and HTML elements
      this.backButton.disabled = (this.instruction === 0);
      this.nextButton.disabled = (this.instruction === this.maxInstruction);
      this.descriptionBox.innerHTML = `${this.instruction + 1}: ${this.instructionList[this.instruction].description}`;

      let script = resetScript + this.instructionList[this.instruction].script;
      this.runCommand(script, this.instruction);
    }
    
    this.restart = () =>
    {
        this.instruction = 0;
        this.initializeScript();
        this.execute(0);
    }
    
    this.runCommand = (command, instructionNum = -1) =>
    {
        Jmol.script(main, command);
        if (instructionNum >= 0) {
          console.log(`instruction ${instructionNum}: ${command} completed`);
        }
        else {
          console.log(`script: $${command} completed`);
        }
    }

    this.initialize = () =>
    {
      this.runCommand(this.initializeScript);
    }
  }
}

class Instruction 
{
  constructor(description, script)
  {
    this.script = script;
    this.description = description;
  }
}