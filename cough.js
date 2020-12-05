//Code from https://editor.p5js.org/Allayna/sketches/o239lOcns
class Cough {
    constructor(sprite) {
      this.x = sprite.position.x; //starting x
      this.y = sprite.position.y; //starting y
      this.vx = random(-10, 10); //movement in the x
      this.vy = random(-10, 10);//movement in the y
      this.alpha = 255; //opacity at 100%
      this.d = 16; //diameter of particle at 16
    }
  
    finished() {
      return this.alpha < 0; //if opacity is 0, lets the program know the particle has disappeared
    }
  
    update() { 
      this.x += this.vx; //added particle movement in the x direction
      this.y += this.vy; //added particle movement in the y direction
      this.alpha -= 2; //dereases opacity by 2
      this.d -= random(0.05, 0.1); //decreases particle size by 0.05 to 0.1 units
    }
  
    show() {
      noStroke();
      fill(random(50,100), random(200, 230), 10, this.alpha); //randomizes the shade of green the particle is
      ellipse(this.x, this.y, this.d); //creates the ellipse representative of the particle using the properties of the particle
    }
  }