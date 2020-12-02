class Maga{
    constructor(x,y){
        this.startX=x;
        this.startY=y;
        this.magaSprite;
    }
    display(){
        this.magaSprite=createSprite(this.startX,this.startY,50,50);
        this.magaSprite.shapeColor=color(200,0,0);
        this.magaSprite.setDefaultCollider();
        this.magaSprite.setVelocity(1,0);
        this.magaSprite.attractionPoint(0.2,userSprite.position.x,userSprite.position.y);
        this.magaSprite.maxSpeed=2;
    }
}