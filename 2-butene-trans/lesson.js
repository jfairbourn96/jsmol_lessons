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

      // Only interrupt the instruction if we're not executing the first one.
      if(this.instruction > 0) 
      {
        resetScript += '!quit;'
      }
      // TODO: Change your resetScript to only reset the options that your instructions adjust
      resetScript += 'select *; draw * off; measure off; isosurface off; lcaoCartoon off; mo off; set spinX 0; set spinY 20; set spinZ 0;';
      resetScript += 'select @13, @14, @15, @16, @17, @18, @19, @20, @21, @22, @23, @24; hide selected;'
      resetScript += 'select @1, @2, @6, @8; label hide;';
      resetScript += 'select *; color translucent 0;'

      // Adjust the buttons and HTML elements
      this.backButton.disabled = (this.instruction === 0);
      this.nextButton.disabled = (this.instruction === this.maxInstruction);
      this.descriptionBox.innerHTML = `${this.instruction + 1}: ${this.instructionList[this.instruction].description}`;

      // Run the command and log to the console.
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

    // TODO: If there are any shapes to draw for this lesson, draw them here.
    this.shapeString = ``;
  }
}