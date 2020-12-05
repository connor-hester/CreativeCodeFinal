class Slider{
    constructor(x,y,image){
        this.x=x;
        this.y=y;
        this.image=image;
    }
    create(){
        this.sliderSprite=createSprite(this.x,this.y);
        this.sliderSprite.addImage(this.image);
        this.sliderSprite.setCollider("rectangle",0,0,100,50);
        return(this.sliderSprite);
    }
}