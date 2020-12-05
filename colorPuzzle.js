class CPuzzle{
    constructor(x,y,r,g,b){
        this.x=x;
        this.y=y;
        this.r=r;
        this.g=g;
        this.b=b;
        this.l=40;
    }
    create(){
        this.colorSprite=createSprite(this.x,this.y,this.l,this.l);
        this.colorSprite.shapeColor=color(this.r,this.g,this.b);
        this.colorSprite.setDefaultCollider();
        return(this.colorSprite);
    }
}