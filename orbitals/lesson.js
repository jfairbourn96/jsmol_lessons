// Authors: Justin Fairbourn and Scott Ensign
// Created at Utah State University with support from the Chemistry department and the Center for Innovative Design and Instruction.
class Lesson 
{
  constructor()
  {
    this.instructionList = new Array();
    this.instruction = 0;
    this.maxInstruction = -1;
    this.descriptionBox = document.getElementById('description');
    this.refreshButton = document.getElementById('refreshButton');
    this.restartButton = document.getElementById('restartButton');
    this.backButton = document.getElementById('backButton');
    this.nextButton = document.getElementById('nextButton');


    this.addInstruction = (description, script) => 
    {
      this.instructionList.push(new Instruction(description, script));
      this.maxInstruction++;
    }

    this.execute = (step) =>
    {
      this.instruction += step;
      let resetScript = '';
      if(this.instruction > 0) 
      {
        resetScript += '!quit;'
      }
      resetScript += 'draw * off; measure off; lcaoCartoon DELETE; spin on; isosurface OFF;';

      this.backButton.disabled = false;
      this.nextButton.disabled = false;
      if(this.instruction === 0) this.backButton.disabled = true;
      else if(this.instruction === this.maxInstruction) this.nextButton.disabled = true;
      this.descriptionBox.innerHTML = `${this.instruction + 1}: ${this.instructionList[this.instruction].description}`;
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

    this.shapeString = ``
  }
}