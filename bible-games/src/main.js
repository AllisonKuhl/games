var START = 1;
var INSTRUCTIONS = 2;
var PLAYING = 3;
var OVER = 4;
var gameState = START;


var canvas = document.querySelector("canvas");  
var ctx = canvas.getContext("2d"); 
    
//images

var menu = new Image();
menu.src = "./images/menu-colored.png";
var intro1 = new Image();
intro1.src = "./images/instructions.png";
var intro2 = new Image();
intro2.src = "./images/instructions2.png";

var end1 = new Image();
end1.src = "./images/end1.png";
var end2 = new Image();
end2.src = "./images/end2.png";

var background = new Image(); 
background.src = "./images/desert.jpg"; 

var moses = new Image();
moses.src = "./images/moses.png";

var israelites1 = new Image();
israelites1.src = "./images/army1.png";
var israelites2 = new Image();
israelites2.src = "./images/army1-2.png";

var amalekites1 = new Image();
amalekites1.src = "./images/army2.png";
var amalekites2 = new Image();
amalekites2.src = "./images/army2-2.png";

var place = 0;
var intro = [intro1,intro2];
var end = [end1, end2];

var endImg = new Image();
endImg.src = "./images/moses-final.jpg";

//various variables

//degree of hands
var degree = 80;
//how quickly Moses' lowers hands
var lowerspeed = 0.1;
//total 
var score = 0;
//previous record
var bestScore = 0;
//how far Israelite army is
var stalemate = -300;
//advance speed and direction
var advanceDir = .5;
var armyX = -300;
//controls arm speed
var time = 0;
//changes army animation
var armyTimer = 0;

 

console.log(gameState);

function start() {
    gameState = INSTRUCTIONS;
	document.getElementById("start").style.display = 'none';
}

function cont() {
	document.getElementById("continue").style.display = 'none';
	place = 1;
}

function restart() {
    gameState = PLAYING;
	document.getElementById("restart").style.display = 'none';
	degree = 80;
	lowerspeed = 0.1;
	score = 0;
	stalemate = -300;
	advanceDir = .5;
	armyX = -300;
	time = 0;
	armyTimer = 0;
}

//space key events
//raises hands when space bar is unpressed
window.addEventListener("keyup", function(event) 
{ 

if (gameState == PLAYING){
  if (event.keyCode == 32){
  	
	score += 1;
	
    if (degree< 170){
		degree+=5;
	 }
  }
 }

});


window.addEventListener("keydown", function(event) 
{ 

 if (gameState == INSTRUCTIONS){
	 
	  if (event.keyCode == 32){
		if (place == 1){
			place = 0;
			gameState = PLAYING;
	    }else{
			place +=1;
		}
	  }  
  }
  
});

 
//game loop
function update() 
 {  
 
	if (gameState == START) {
		ctx.drawImage(menu,0,0);
	}else if (gameState == INSTRUCTIONS){
		ctx.drawImage(intro[place],0,0);
	}else if (gameState == PLAYING){
		desertRumble();
	}else if (gameState == OVER){
		gameOver();
	}
	
	requestAnimationFrame(update, canvas); 
 
 }
 

 
function gameOver(){
	ctx.drawImage(end[place],0,0);
	
	 //creates new record
	 if (score > bestScore){
		bestScore = score;
	 }
	 
	 if (place > 0){
		ctx.font = "40px Courier";
		ctx.fillStyle="red";
		ctx.fillText(score,90,240);
		document.getElementById("restart").style.display = 'block';		
	 }else {
		document.getElementById("continue").style.display = 'block';
	 }
	 
	
}
 

function desertRumble(){
 
	var zone = 20;
 //lowers hands a little bit each time
   if (degree>0){
	degree-=lowerspeed;
   }
   
    //increases speed so that it lowers quicker with time
   time += 1;
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
   
   
  //clears canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //draws background
  ctx.drawImage(background,0,0, canvas.width,canvas.height);
 
   //draw the rest

	
	//arm behind
	
	ctx.save();	
	//deals with rotations
	ctx.translate(125,210);
	ctx.rotate(-degree*Math.PI/180);

	//hand
	ctx.beginPath();
	ctx.fillStyle="#DDB686";
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
	

	//it's ya boi, Moses
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
	ctx.fillStyle="#DDB686";
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
	
	armyTimer += 1;
	
	if (armyTimer > 15){
		ctx.drawImage(israelites1,armyX,390);
		ctx.drawImage(amalekites2,armyX+635,390);
	}else {
		ctx.drawImage(israelites2,armyX,390);
		ctx.drawImage(amalekites1,armyX+635,390);
	}
	if (armyTimer == 30){
		armyTimer = 0;
	}
	
   
	//rock Moses is standing on
	ctx.beginPath();
	ctx.fillStyle="peru";
	ctx.rect(0,370,200,400);
	ctx.fill();
	ctx.stroke();
	
	
	//deals with score

	ctx.font = "12px Courier";
	ctx.fillStyle="black";
	ctx.fillText("Current Score:",520,100);
	ctx.fillStyle="brown";
	ctx.fillText(score,630,100);
	
	if (bestScore == 0){
		ctx.font = "30px Courier";
		ctx.fillStyle="black";
		ctx.fillText("Press SPACE to repel the Amalekites!",38 ,50);
	}else if (bestScore > 0){
		ctx.font = "12px Courier";
		ctx.fillStyle="black";
		ctx.fillText("Previous Record:",504,50);
		ctx.fillStyle="brown";
		ctx.fillText(bestScore,630,50);	
   }
	
 }

    
update();
