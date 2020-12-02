const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,backgroundImg;
var score=0;


function preload() {
    getBackground();
}

function setup(){
    var canvas = createCanvas(1200,575);
    engine = Engine.create();
    world = engine.world;

    brick=new Brick(600,565,1250,20,"brown");
    Matter.Body.setStatic(brick.body,isStatic=true);
    
    brick1=new Brick(400,540,30,30,"red");
    brick2=new Brick(440,540,30,30,"green");
    brick3=new Brick(480,540,30,30,"violet");
    brick4=new Brick(520,540,30,30,"grey");
    brick5=new Brick(560,540,30,30,"purple");
    brick6=new Brick(600,540,30,30,"pink");
    brick7=new Brick(640,540,30,30,"maroon");
    brick8=new Brick(680,540,30,30,"blue");
    brick9=new Brick(720,540,30,30,"black");
    brick10=new Brick(760,540,30,30,"brown");
    brick11=new Brick(800,540,30,30,"orange");
    brick12=new Brick(840,540,30,30,"yellow");
    brick13=new Brick(880,540,30,30,"red");
    brick14=new Brick(920,540,30,30,"green");
    brick15=new Brick(960,540,30,30,"violet");
    brick16=new Brick(1000,540,30,30,"grey");
    brick17=new Brick(1040,540,30,30,"purple");
    brick18=new Brick(1080,540,30,30,"pink");
    brick19=new Brick(1120,540,30,30,"maroon");
    brick20=new Brick(1160,540,30,30,"blue");
    brick21=new Brick(420,510,30,30,"red");
    brick22=new Brick(460,510,30,30,"green");
    brick23=new Brick(500,510,30,30,"violet");
    brick24=new Brick(540,510,30,30,"grey");
    brick25=new Brick(580,510,30,30,"purple");
    brick26=new Brick(620,510,30,30,"pink");
    brick27=new Brick(660,510,30,30,"maroon");
    brick28=new Brick(700,510,30,30,"blue");
    brick29=new Brick(740,510,30,30,"black");
    brick30=new Brick(780,510,30,30,"brown");
    brick31=new Brick(820,510,30,30,"orange");
    brick32=new Brick(860,510,30,30,"yellow");
    brick33=new Brick(900,510,30,30,"red");
    brick34=new Brick(940,510,30,30,"green");
    brick35=new Brick(980,510,30,30,"violet");
    brick36=new Brick(1020,510,30,30,"grey");
    brick37=new Brick(1060,510,30,30,"purple");
    brick38=new Brick(1100,510,30,30,"pink");
    brick39=new Brick(1140,510,30,30,"maroon");
    brick40=new Brick(440,480,30,30,"green");
    brick41=new Brick(480,480,30,30,"violet");
    brick42=new Brick(520,480,30,30,"grey");
    brick43=new Brick(560,480,30,30,"purple");
    brick44=new Brick(600,480,30,30,"pink");
    brick45=new Brick(640,480,30,30,"maroon");
    brick46=new Brick(680,480,30,30,"blue");
    brick47=new Brick(720,480,30,30,"black");
    brick48=new Brick(760,480,30,30,"brown");
    brick49=new Brick(800,480,30,30,"orange");
    brick50=new Brick(840,480,30,30,"yellow");
    brick51=new Brick(880,480,30,30,"red");
    brick52=new Brick(920,480,30,30,"green");
    brick53=new Brick(960,480,30,30,"violet");
    brick54=new Brick(1000,480,30,30,"grey");
    brick55=new Brick(1040,480,30,30,"purple");
    brick56=new Brick(1080,480,30,30,"pink");
    brick57=new Brick(1120,480,30,30,"maroon");
    brick58=new Brick(460,440,30,30,"violet");
    brick59=new Brick(500,440,30,30,"grey");
    brick60=new Brick(540,440,30,30,"purple");
    brick61=new Brick(580,440,30,30,"pink");
    brick62=new Brick(620,440,30,30,"maroon");
    brick63=new Brick(660,440,30,30,"blue");
    brick64=new Brick(700,440,30,30,"black");
    brick65=new Brick(740,440,30,30,"brown");
    brick66=new Brick(780,440,30,30,"orange");
    brick67=new Brick(820,440,30,30,"yellow");
    brick68=new Brick(860,440,30,30,"red");
    brick69=new Brick(900,440,30,30,"green");
    brick70=new Brick(940,440,30,30,"violet");
    brick71=new Brick(980,440,30,30,"grey");
    brick72=new Brick(1020,440,30,30,"purple");
    brick73=new Brick(1060,440,30,30,"pink");
    brick74=new Brick(1100,440,30,30,"maroon");

    tnt=new TNT(100,300);  
    sling=new Slingshot(tnt.body,{x:100,y:300})
    
         
}
function draw(){
    if(backgroundImg) {
        background(backgroundImg);
    }
    Engine.update(engine);

    brick.display();
    brick1.display();
    brick1.score();
    brick2.display();
    brick2.score();
    brick3.display();
    brick3.score();
    brick4.display();
    brick4.score();
    brick5.display();    
    brick5.score();
    brick6.display();
    brick6.score();
    brick7.display();
    brick7.score();
    brick8.display();
    brick8.score();
    brick9.display();
    brick9.score();
    brick10.display();
    brick10.score();
    brick11.display();    
    brick11.score();
    brick12.display();
    brick12.score();
    brick13.display();
    brick13.score();
    brick14.display();
    brick14.score();
    brick15.display();
    brick15.score();
    brick16.display();
    brick16.score();
    brick17.display();    
    brick17.score();
    brick18.display();
    brick18.score();
    brick19.display();
    brick19.score();
    brick20.display();
    brick20.score();
    brick21.display();
    brick21.score();
    brick22.display();
    brick22.score();
    brick23.display();
    brick23.score();
    brick24.display();
    brick24.score();
    brick25.display();    
    brick25.score();
    brick26.display();
    brick26.score();
    brick27.display();
    brick27.score();
    brick28.display();
    brick28.score();
    brick29.display();
    brick29.score();
    brick30.display();
    brick30.score();
    brick31.display();    
    brick31.score();
    brick32.display();
    brick32.score();
    brick33.display();
    brick33.score();
    brick34.display();
    brick34.score();
    brick35.display();
    brick35.score();
    brick36.display();
    brick36.score();
    brick37.display();    
    brick37.score();
    brick38.display();
    brick38.score();
    brick39.display();
    brick39.score();
    brick40.display();
    brick40.score();
    brick41.display();
    brick41.score();
    brick42.display();
    brick42.score();
    brick43.display();    
    brick43.score();
    brick44.display();
    brick44.score();
    brick45.display();
    brick45.score();
    brick46.display();
    brick46.score();
    brick47.display();
    brick47.score();
    brick48.display();
    brick48.score();
    brick49.display();    
    brick49.score();
    brick50.display();
    brick50.score();
    brick51.display();
    brick51.score();
    brick52.display();
    brick52.score();
    brick53.display();
    brick53.score();
    brick54.display();
    brick54.score();
    brick55.display();    
    brick55.score();
    brick56.display();
    brick56.score();
    brick57.display();
    brick57.score();
    brick58.display();
    brick58.score();
    brick59.display();
    brick59.score();
    brick60.display();    
    brick60.score();
    brick61.display();
    brick61.score();
    brick62.display();
    brick62.score();
    brick63.display();
    brick63.score();
    brick64.display();
    brick64.score();
    brick65.display();
    brick65.score();
    brick66.display();    
    brick66.score();
    brick67.display();
    brick67.score();
    brick68.display();
    brick68.score();
    brick69.display();
    brick69.score();
    brick70.display();
    brick70.score();
    brick71.display();
    brick71.score();
    brick72.display();    
    brick72.score();
    brick73.display();
    brick73.score();
    brick74.display();
    brick74.score();    
    
    sling.display();
    tnt.display();

    strokeWeight(4);
    stroke("white");
    fill("red");
    textSize(20);{
    text("Score : "+Math.round(score),1000,75);   
    }
}

function mouseDragged(){
    Matter.Body.setPosition(tnt.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(tnt.body,{x:100,y:300})
        sling.attach(tnt.body);
    }
}

async function getBackground(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON= await response.json();
    
    var datetime=responseJSON.datetime;
    
    var hour=datetime.slice(11,13);
    console.log(hour);
   // var backgroundImg=null;
    if(hour>6 && hour<18) {
       backgroundImg = loadImage("bg.png");
    }
    else{
      backgroundImg = loadImage("bg2.jpg");
    }

    //return backgroundImg;
}