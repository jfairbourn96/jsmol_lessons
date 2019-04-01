// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
class Lesson 
{
  constructor()
  {
    this.instructionList = null;
    this.instructions_1 = new Array();
    this.instructions_2 = new Array();
    this.instructions_3 = new Array();
    this.instruction = 0;
    this.maxInstruction = -1;
    this.descriptionBox = document.getElementById('description');
    this.refreshButton = document.getElementById('refreshButton');
    this.restartButton = document.getElementById('restartButton');
    this.backButton = document.getElementById('backButton');
    this.nextButton = document.getElementById('nextButton');
    
    // Switches the active instruction set to setnumber.
    this.switchInstructions = (setNumber) =>
    {
      Jmol.script(main, "!quit;");
      //TODO: Add draw and hide commands for each of the following switches.
      if(setNumber === 1) 
      {
        Jmol.script(main, "load bf3.mol; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;");
        this.instructionList = this.instructions_1;
        this.execute(0);
      }
      else if(setNumber === 2) 
      {
        Jmol.script(main, "load so2.mol; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;");
        this.instructionList = this.instructions_2;
        this.execute(0);
      }
      else if(setNumber === 3) 
      {
        Jmol.script(main, "load formaldehyde.mol; spacefill 20%; wireframe 0.15; spin off; frank on; background=white; antialiasDisplay=true;");
        this.instructionList = this.instructions_3;
        this.execute(0);
      }
      else 
      {
        console.log(`Invalid instruction set: ${setNumber}. Defaulting to instruction set 1.`)
        this.switchInstructions(1);
      }
      this.instruction = 0;
    }
    
    // Adds a new instruction to the current instruction set.
    this.addInstruction = (description, script) => 
    {
      this.instructionList.push(new Instruction(description, script));
    }

    this.execute = (step) =>
    {
      this.instruction += step;
      let resetScript = '';
      if(this.instruction > 0) 
      {
        resetScript += '!quit;'
      }
      resetScript += 'draw * off; measure off; ';

      this.backButton.disabled = false;
      this.nextButton.disabled = false;
      if(this.instruction === 0) this.backButton.disabled = true;
      else if(this.instruction === this.instructionList.length - 1) this.nextButton.disabled = true;
      console.log(this.instructionList);
      this.descriptionBox.innerHTML = `${this.instruction + 1}: ${this.instructionList[this.instruction].description}`;
      // Jmol.script(main, 'draw * off; measure off;');
      Jmol.script(main, resetScript + this.instructionList[this.instruction].script);
      console.log(`instruction ${this.instruction}: ${resetScript + this.instructionList[this.instruction].script} completed`);
    }

    this.restart = () =>
    {
      this.instruction = 0;
      this.execute(0);
    }

    this.runCommand = (command) =>
    {
      Jmol.script(main, command);
    }
  }
}