class Maga{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=maga;
        this.attraction=random(0.3,0.9);
        this.mSpeed=random(2.2,3);
    }

    create(){
        this.magaSprite=createSprite(this.x,this.y);
        this.magaSprite.addImage(this.image);
        this.magaSprite.setCollider("circle",0,0,25);
        return(this.magaSprite);
    }
    move(){
        this.magaSprite.attractionPoint(this.attraction,userSprite.position.x,userSprite.position.y);
        this.magaSprite.maxSpeed=this.mSpeed;
    }
}