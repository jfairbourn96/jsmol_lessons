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

      // Turn off all drawings and surfaces and set the spin to default
      resetScript += 'select *; draw * off; measure off; isosurface off; lcaoCartoon off; mo off; set spinX 0; set spinY 20; set spinZ 0;';
      // reset all the drawn bonds to single
      resetScript += 'connect;';
      // hide the Carbon labels by default
      resetScript += 'select @1, @2, @3, @5, @7, @9; label hide;';
      // set the atoms to be opaque
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