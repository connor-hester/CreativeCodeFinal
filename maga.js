class Maga{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=maga;
        this.attraction=0.5;
        this.mSpeed=2.4;
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