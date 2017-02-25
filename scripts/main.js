//my scripts

//$(document).scroll(function(){
	//console.log(
			//$(document).scrollTop()
		//);

	//$("#frontClouds").css("left",String($(document).scrollTop() -70) + "px" );
	//$("#middleClouds").css("left",String($(document).scrollTop() * .5) + "px" );
	//$("#backClouds").css("left",String($(document).scrollTop() * .2) + "px" );
	//$("#me").css("left",String($(document).scrollTop() * .2) + "px" );
//
//$(document).mousemove(function(p){
	//console.log(p.pageX + "," +p.pageY);
	//if(p.pageX > 100 && p.pageX < 900){
		//$("#frontClouds").css("left",String(p.pageX * -.1) + "px" );
		//$("#middleClouds").css("left",String(p.pageX * .0 ) + "px" );
		//$("#backClouds").css("left",String(p.pageX * .0) + "px" );
		//$("#me").css("left",String(p.pageX * .100) + "px" );
	//}
//});

$(document).scroll(function(){
	console.log($(document).scrollTop());

	$("#trees").css("right", String($(document).scrollTop() - 3720) +"px");
	$("#grass").css("right", String($(document).scrollTop() - 3700) +"px");
	$("#hills").css("right", String($(document).scrollTop() - 3700) +"px");
	//$("#sky").css("right", String($(document).scrollTop() - 1000) +"px");
	
	if( $ (document).scrollTop() > 0){
		$("#row2").css("left", String ($(document).scrollTop() - 1000) + "px");
	}
	
});

var animationCount = 0;
var guyMoving = false;
var moveGuyTimer; 



function showNum(){
	animationCount ++;
	if(animationCount > 3){
		animationCount = 0;
		//clearInterval(moveGuyTimer);
		//guyMoving = false;
	}
	//if(animationCount == 1){

		
	//} 
	/*else*/if(animationCount == 1){
		document.getElementById("me").style.backgroundPosition = "-120px 0px";

	} else if(animationCount == 2){
		document.getElementById("me").style.backgroundPosition = "-230px 0px";

	} else if(animationCount == 3){
		document.getElementById("me").style.backgroundPosition = "-335px 0px";
	}
}

$(document).scroll(function(){
	if(guyMoving == false){
		moveGuyTimer = setInterval(showNum, 246);
		guyMoving = true;
	}
	$(document).mouseup(function(){
		document.getElementById("me").style.backgroundPosition = "0px 0px";
		clearInterval(moveGuyTimer);
		guyMoving = false;
	});
		$(document).keyup(function(){
		document.getElementById("me").style.backgroundPosition = "0px 0px";
		clearInterval(moveGuyTimer);
		guyMoving = false;
	});
});