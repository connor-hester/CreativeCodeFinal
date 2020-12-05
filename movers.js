class Mover{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=recycle;
    }
    create(){
        this.moverSprite=createSprite(this.x,this.y);
        this.moverSprite.addImage(this.image);
        this.moverSprite.setCollider("rectangle",0,0,100,100);
        return(this.moverSprite);
    }
}