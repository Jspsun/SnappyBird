var bird;
var pipes=[];
var mic;
//var slider;
var snapping=false;
var threshhold=0.005;

function setup() {
  createCanvas(400,600);
  mic=new p5.AudioIn();
  mic.start();
  bird=new Bird();
  pipes.push(new Pipe());

  //TODO remove
  // slider=createSlider(0,1,0.2,0.01);
}

function draw() {
  background(0);

  var vol=mic.getLevel();


  for (var i=pipes.length-1;i>=0;i--){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)){
      if(pipes[i].offscreen()){
        pipes.splice(i,1);
      }
    }
  }

  bird.update();
  bird.show();

  if(frameCount %100==0){
    pipes.push(new Pipe());
  }



  //TODO remove visual representation of volume & threshhold------------------
  // fill(0,255,0);
  // var y =map(vol,0,1,height,0);
  // rect(width-50,y,50,height-y);
  //
  // var threshhold=slider.value();
  // console.log(threshhold);
  //
  // var ty=map(threshhold,0,1,height,0);
  // stroke(255,0,0);
  // strokeWeight(4);
  // line(width-50,ty,width,ty);
//--------------------------

  if(vol>threshhold && !snapping){
    bird.up();
    snapping=true;
  }
  if (vol<=threshhold){
    snapping=false;
  }
}

function keyPressed(){
  if (key==' '){
    bird.up();
  }
}
