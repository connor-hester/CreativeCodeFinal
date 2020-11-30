class Level1{
    constructor(){
        this.box1=0;
        this.box2=0;
        this.box3=0;
        this.box4=0;
        this.box5=0;
    }
    display(){
        this.box1=createSprite(width/2, height/2, width-400, 200);
        this.box1.shapeColor=color(0);
        this.box2=createSprite(300, 250, 200, 200);
        this.box2.shapeColor=color(0);
        this.box3=createSprite(600, 100, 200, 200);
        this.box3.shapeColor=color(0);
        this.box4=createSprite(width-300,650,200,200);
        this.box4.shapeColor=color(0);
        this.box5=createSprite(width/2+100, height-100, 200,200);
        this.box5.shapeColor=color(0);
    }
    boxCollision(){
        userSprite.collide(this.box1);
        userSprite.collide(this.box2);
        userSprite.collide(this.box3);
        userSprite.collide(this.box4);
        userSprite.collide(this.box5);
        }

         
        }
        
}