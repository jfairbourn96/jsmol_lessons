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
      resetScript += 'draw * off; measure off; ';

      this.backButton.disabled = false;
      this.nextButton.disabled = false;
      if(this.instruction === 0) this.backButton.disabled = true;
      else if(this.instruction === this.maxInstruction) this.nextButton.disabled = true;
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

    this.shapeString = `
      draw hex1 DIAMETER 18 COLOR yellow (atomno=115) (atomno=118); 
      draw hex2 DIAMETER 18 COLOR yellow (atomno=145) (atomno=118); 
      draw hex3 DIAMETER 18 COLOR yellow (atomno=145) (atomno=148); 
      draw hex4 DIAMETER 18 COLOR yellow (atomno=247) (atomno=148); 
      draw hex5 DIAMETER 18 COLOR yellow (atomno=247) (atomno=250); 
      draw hex6 DIAMETER 18 COLOR yellow (atomno=115) (atomno=250);

      draw hbond11 DIAMETER 12 COLOR yellow (atomno=415) (atomno=431);
      draw hbond12 DIAMETER 12 COLOR yellow (atomno=430) (atomno=330);
      draw hbond13 DIAMETER 12 COLOR yellow (atomno=430) (atomno=449);
      draw hbond14 DIAMETER 12 COLOR yellow (atomno=427) (atomno=432);

      draw tet11 DIAMETER 8 COLOR blue (atomno=415) (atomno=328);
      draw tet12 DIAMETER 8 COLOR blue (atomno=415) (atomno=448);
      draw tet13 DIAMETER 8 COLOR blue (atomno=427) (atomno=448);
      draw tet14 DIAMETER 8 COLOR blue (atomno=427) (atomno=415);
      draw tet15 DIAMETER 8 COLOR blue (atomno=427) (atomno=328);
      draw tet16 DIAMETER 8 COLOR blue (atomno=448) (atomno=328);

      draw hbond21 DIAMETER 12 COLOR yellow (atomno=427) (atomno=347);
      draw hbond22 DIAMETER 12 COLOR yellow (atomno=346) (atomno=365);
      draw hbond23 DIAMETER 12 COLOR yellow (atomno=346) (atomno=345);
      draw hbond24 DIAMETER 12 COLOR yellow (atomno=349) (atomno=348);

      draw tet21 DIAMETER 8 COLOR blue (atomno=427) (atomno=364);
      draw tet22 DIAMETER 8 COLOR blue (atomno=364) (atomno=343);
      draw tet23 DIAMETER 8 COLOR blue (atomno=343) (atomno=349);
      draw tet24 DIAMETER 8 COLOR blue (atomno=427) (atomno=349);
      draw tet25 DIAMETER 8 COLOR blue (atomno=364) (atomno=349);
      draw tet26 DIAMETER 8 COLOR blue (atomno=427) (atomno=343);

      draw hbond31 DIAMETER 12 COLOR yellow (atomno=769) (atomno=428);
      draw hbond32 DIAMETER 12 COLOR yellow (atomno=769) (atomno=768);
      draw hbond33 DIAMETER 12 COLOR yellow (atomno=772) (atomno=770);
      draw hbond34 DIAMETER 12 COLOR yellow (atomno=688) (atomno=771);

      draw tet31 DIAMETER 8 COLOR blue (atomno=427) (atomno=688);
      draw tet32 DIAMETER 8 COLOR blue (atomno=427) (atomno=772);
      draw tet33 DIAMETER 8 COLOR blue (atomno=427) (atomno=766);
      draw tet34 DIAMETER 8 COLOR blue (atomno=766) (atomno=772);
      draw tet35 DIAMETER 8 COLOR blue (atomno=766) (atomno=688);
      draw tet36 DIAMETER 8 COLOR blue (atomno=772) (atomno=688);

      draw hbond41 DIAMETER 12 COLOR yellow (atomno=424) (atomno=443);
      draw hbond42 DIAMETER 12 COLOR yellow (atomno=424) (atomno=429);
      draw hbond43 DIAMETER 12 COLOR yellow (atomno=451) (atomno=426);
      draw hbond44 DIAMETER 12 COLOR yellow (atomno=425) (atomno=421);

      draw tet41 DIAMETER 8 COLOR blue (atomno=427) (atomno=421);
      draw tet42 DIAMETER 8 COLOR blue (atomno=427) (atomno=442);
      draw tet43 DIAMETER 8 COLOR blue (atomno=427) (atomno=451);
      draw tet44 DIAMETER 8 COLOR blue (atomno=451) (atomno=442);
      draw tet45 DIAMETER 8 COLOR blue (atomno=451) (atomno=421);
      draw tet46 DIAMETER 8 COLOR blue (atomno=442) (atomno=421);

      draw off;
      `
  }
}