//code written by Allison Kuhl 2018
//if you have any questions please contact me at allison.kuhl@bell.net!



/* ---------- Retreat Information ---------------- */
/*

   ~~~~ IMPORTANT ~~~~
   
   You can update the next retreat information here and it will automatically update the information on the webpage.
   You can also specify whether registration is open or closed.
   
   Just fill out the specified variables below. 
               | |
               V V
               
*/


//either true or false
var openRegistration = true;

//use numerical date
var nextRetreat = {
 day: 4,
 month: 5,
 year: 2018
}

//put the location of the next retreat here
//whatever you put will display in the location section

//format must be as follows:  "Your location here";

var rlocation = "Trinity Lutheran Church";


//put the address here
var address = "30 Erie Ave N, Fisherville, Ontario";

/* ---------- End of Retreat Information----------------- */


$(document).ready(function(){
	
	//fills in the correct retreat information
	updateInformation();
	
	//for mobile
	//shows menu-dropdown when menu icon clicked
	$('.toggle-menu').click(function(){
		$('nav').toggle();
	});

	//reorders sections on main page in mobile version so that registration button is right after next retreat information
	if ($(window).width() < 760) {
		swapSections();
	}
	
	//returns main page to windows from mobile when resized
	$(window).resize(function() {
	  if ($(window).width() > 760) {
		 $('nav').show();
		 $('#registration').insertAfter('#getInvolved');
		 $('#registration').css("border-bottom","none");
	  }else{
		swapSections();
	  }

	});
	

	
	
});


//swaps sections between window and mobile
function swapSections(){
		$('#registration').insertBefore('#getInvolved');
		$('#nextRetreat').css("border-bottom","none");	
		$('#nextRetreat').css("padding-bottom","0px");	
		$('#registration').css("border-bottom","2px white solid");
}

function updateInformation(){
	
	//gets word month from number month
	var months = ["January", "February", "March", "April", "May","June","July","August","September","November","December"]

	//update the date
	$(".date").append(months[nextRetreat.month-1], " ", nextRetreat.day, ", ",nextRetreat.year);
	//update location
	$(".location").append(rlocation);
	//update address
	$(".address").append(address);
	
	//displays registration button only if registration is open
	if (openRegistration == true){
		$("#yesRegister").show();
		$("#noRegister").hide();
	}else{
		$("#yesRegister").hide();
		$("#noRegister").show();
	}
	

}











