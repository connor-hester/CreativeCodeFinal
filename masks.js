class Mask{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=mask;
    }
    create(){
        this.maskSprite=createSprite(this.x,this.y);
        this.maskSprite.addImage(mask);
        this.maskSprite.setCollider("rectangle",0,0,50,50);
        return(this.maskSprite);
    }
}