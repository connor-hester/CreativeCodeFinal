class Box{
    constructor(x,y,image,l,w){
        this.x=x;
        this.y=y;
        this.image=image;
        this.l=l;
        this.w=w;
    }
    create(){
    this.boxSprite=createSprite(this.x,this.y);
    this.boxSprite.addImage(this.image);
    this.boxSprite.setCollider("rectangle",0,0,this.l,this.w);
    return(this.boxSprite);
    }
}