
var MENU = 1;
var PLAYING = 2;
var OVER = 3;
var gameState = PLAYING;


var canvas = document.querySelector("canvas");  
var ctx = canvas.getContext("2d"); 

//images
var menu = new Image();
menu.src = "./images/menu-colored.png";
var background = new Image(); 
background.src = "./images/desert.jpg"; 
var moses = new Image();
moses.src = "./images/moses.png";
var army1 = new Image();
army1.src = "./images/army1.png";
var army2 = new Image();
army2.src = "./images/army2.png";

var endImg = new Image();
endImg.src = "./images/moses-final.jpg";

//various variables

//degree of hands
var degree = 80;
//how quickly Moses' lowers hands
var lowerspeed = 0.1;
//timer
var time = 0;
//how far Israelite army is
var stalemate = -300;
var advanceDir = .5;
var armyX = -300;

var timer = 0;

//space key events
//raises hands when space bar is unpressed
window.addEventListener("keyup", function(event) 
{ 
  if (event.keyCode == 32){
  	
    if (degree< 170){
		degree+=5;
	 }
  }

});


 
//game loop
 function update() 
 {  
	if (gameState == MENU) {
		drawMenu();
	}else if (gameState == PLAYING){
		desertRumble();
	}else if (gameState == OVER){
		gameOver();
	}
 
 }
 

 
function gameOver(){
	
	
	//draws background
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fill();
	ctx.stroke();
	
	ctx.drawImage(endImg,300,100, canvas.width-300,canvas.height-100);
	
	
	//text
	ctx.font = "30px Arial";
	ctx.fillStyle="black";
	ctx.fillText("Growing weary, you lower your hands. The battle",10,40); 
	ctx.fillText("is nearly lost, but two Israelites hold up your hands.",10,80); 
	ctx.fillText("With their help (and",10,120); 
	ctx.fillText("God's) you are",10,160); 
	ctx.fillText("victorious! Praise",10,200);
	ctx.fillText("the Lord!",10,240);
	
	
	ctx.fillText("You lasted",50,340);
	ctx.fillStyle="brown";
	ctx.fillText(timer/100,100,380);
	ctx.fillStyle="black";
	ctx.fillText("seconds!",60,420);
	
	//button
	ctx.beginPath();
	ctx.fillStyle="brown";
	ctx.rect(440,350,150,55);
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle="white";
	ctx.fillText("Play Again",443,390);
	
	
}
 
function drawMenu(){

	ctx.drawImage(menu,0,0);
	
	/*
	//start button
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.rect(300,350,180,70);
	ctx.fill();
	ctx.stroke();
	
	ctx.font = "40px Courier";
	ctx.fillStyle="black";
	ctx.fillText("Begin",332,395);
	*/
}
 
function desertRumble(){
 
	var zone = 20;
 //lowers hands a little bit each time
   if (degree>0){
	degree-=lowerspeed;
   }
   
    //increases speed so that it lowers quicker with time
   time += 1;
   timer += 1;
   if (time == 100){
	  lowerspeed+=.03;
	  time = 0;
   }
   
    
   //the tides of battle
   
   //focuses on one point depending on how high arms are
   if (degree < 90){
      stalemate=-400;
   }
   if (degree >= 90){
      stalemate=-130;
   }
    if (degree > 150){
      stalemate=-20;
   }
   
   //moves army to focus on this point
   if (armyX > stalemate+zone){
		armyX -= 1;
   }else if (armyX < stalemate-zone){
		armyX += 1;
   }
   
   
   //jiggles around the point a bit for variety
   if (armyX > stalemate-zone && armyX < stalemate+zone){
		armyX+= advanceDir;
   }
   if (armyX == stalemate-zone || armyX == stalemate+zone){
		advanceDir*=-1;
		armyX+=advanceDir;
   }
     
   
   
   
  
   
   //game over
   if (degree < 10){
	   gameState = OVER;
   }
   
  //The animation loop 
   requestAnimationFrame(update, canvas); 
 
  //clears canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //draws background
  ctx.drawImage(background,0,0, canvas.width,canvas.height);
 
	

	
	//arm behind
	
	ctx.save();	
	//deals with rotations
	ctx.translate(125,210);
	ctx.rotate(-degree*Math.PI/180);

	//hand
	ctx.beginPath();
	ctx.fillStyle="antiquewhite";
	ctx.rect(-10,70,30,30);
	ctx.fill();
	ctx.stroke();
	
	//arm
	ctx.beginPath();
	ctx.fillStyle="#cb9a6d";
	ctx.rect(-20,-40,50,120);
	ctx.fill();
	ctx.stroke();
		
	ctx.restore();
	

	ctx.drawImage(moses,50,120);
	
	
	//front arm
	
	ctx.save();
	
	ctx.translate(115,230);
	ctx.rotate(-degree*Math.PI/180);
	
	//staff
	ctx.beginPath();
	ctx.fillStyle="saddlebrown";
	ctx.rect(-90,105,200,10);
	ctx.fill();
	ctx.stroke();
	
	//hand
	ctx.beginPath();
	ctx.fillStyle="antiquewhite";
	ctx.rect(-20,90,30,30);
	ctx.fill();
	ctx.stroke();
	
	//arm
	ctx.beginPath();
	ctx.fillStyle="#cb9a6d";
	ctx.rect(-30,-20,50,120);
	ctx.fill();
	ctx.stroke();
	

	
	ctx.restore();
	
	
	//armies
	ctx.drawImage(army1,armyX,390);
    ctx.drawImage(army2,armyX+635,390);

	//rock Moses is standing on
	ctx.beginPath();
	ctx.fillStyle="peru";
	ctx.rect(0,370,200,400);
	ctx.fill();
	ctx.stroke();
	
	
 }

    
update();
