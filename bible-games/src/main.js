 
var canvas = document.querySelector("canvas");  
var ctx = canvas.getContext("2d"); 

var stalemate = 200;
var battle = 0;
var degree = 80;
var lowerspeed = 0.1;
 
window.addEventListener("keyup", function(event) 
{ 
  
  if (event.keyCode == 32){
  	
    if (degree< 170){
		degree+=5;
	 }
  }

 
});
 
 
 function update() 
 {  
 
 
   //lowers hands
   if (degree>0){
	degree-=lowerspeed;
   }
   
   
   
   
   if (degree < 90){
      battle=50;
   }
   if (degree > 90){
      battle=-50;
   }
    if (degree > 150){
      battle=-150;
   }
   
   
   
  //The animation loop 
   requestAnimationFrame(update, canvas); 
 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	

 
	
	ctx.beginPath();
	ctx.fillStyle="grey";
	ctx.rect(0,370,200,400);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
    ctx.fillStyle="beige";
	ctx.rect(80,200,80,170);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
    ctx.fillStyle="antiquewhite";
	ctx.rect(80,120,70,70);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
    ctx.fillStyle="black";
	ctx.rect(120,140,10,10);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
    ctx.fillStyle="white";
	ctx.rect(110,160,45,100);
	ctx.fill();
	ctx.stroke();
	
	
	
	
	//the arms
	
	ctx.save();
	
	ctx.beginPath();
	
	ctx.translate(115,230);
	ctx.rotate(-degree*Math.PI/180);
	
//	ctx.translate();
	
	ctx.fillStyle="antiquewhite";
	ctx.rect(-20,90,30,30);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.fillStyle="DarkGoldenRod";
	ctx.rect(-30,-20,50,120);
	ctx.fill();
	ctx.stroke();
	
	ctx.restore();
	
	//armies
	
	ctx.beginPath();
	ctx.fillStyle="darkred";
	ctx.rect(200+stalemate-battle,450,600,70);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.fillStyle="navy";
	ctx.rect(200,450,stalemate-battle,70);
	ctx.fill();
	ctx.stroke();
	
	
	
    
 
 }
 
 

    
update();
