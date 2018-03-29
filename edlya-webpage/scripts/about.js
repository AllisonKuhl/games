//code written by Allison Kuhl March 2018
//if you have any questions please contact me at allison.kuhl@bell.net!



$(document).ready(function(){
	
	//switches the different sections when selected. :)
	var currSection = 0;
	var totalSections = 3;
	
	$('#a'+currSection%totalSections).css("display","block");
	$('#b'+currSection%totalSections).css("background-color","red");
	
	
	//moves to the next section when next button is selected
	 $('#next').click(function() {
		
		//hides currently selected elements
		$("#a"+currSection%totalSections).hide();
		$('#b'+(currSection%totalSections)).css("background-color","white");
		
		//moves to next element
		currSection+=1;
		
		$("#a"+currSection%totalSections).show();
		$('#b'+currSection%totalSections).css("background-color","red");
		
		/* Change picture
		var churchpic = "url(../images/church" + currSection%totalSections + ".png)";	
		//changes src		$("#churchForeground").css("background-image", churchpic);
		*/
	});
	

	$('.navB').click(function() {
		var id = $(this).attr("data-id");
		
		//hides currently selected elements
		$("#a"+currSection%totalSections).hide();
		$('#b'+(currSection%totalSections)).css("background-color","white");
		
		currSection = id;
		
		$("#a"+currSection%totalSections).show();
		$('#b'+currSection%totalSections).css("background-color","red");
		
		
		
	});
	
});











