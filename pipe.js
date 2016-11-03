function Pipe(){

var spacing =random(60, height/2-100)
var centery=random(spacing,height-spacing);
  this.top=centery-spacing/2;
  this.bottom = height-(centery+spacing/2);
  this.x=width;
  this.w=40;
  this.speed=3;
  this.highlight=false;

  this.hits=function (bird){
    if(bird.x>this.x && bird.x<this.x+this.w){
      if(bird.y<this.top || bird.y>height-this.bottom){
        this.highlight=true;
        return true;
      }
    }
    this.highlight=false;
    return false;
  }

  this.show=function(){
    noStroke();
    fill (255);
    if(this.highlight){
      fill(255, 0 ,0);
    }
    rect (this.x,0,this.w,this.top)
    rect (this.x,height-this.bottom,this.w,this.bottom)
  }
  this.update= function(){
    this.x-=this.speed;
  }

  this.offscreen=function(){
      return this.x < -this.w;
  }

}
