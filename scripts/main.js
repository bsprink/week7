//my scripts


$(document).scroll(function(){
	console.log($(document).scrollTop());

	$("#grass").css("left", String($(document).scrollTop() * -.9) +"px");
	$("#hills").css("left", String($(document).scrollTop() * -.2) +"px");
	$("#clouds").css("left", String ($(document).scrollTop() * -.1) +"px");
	$("#trees").css("left", String($(document).scrollTop() * -.3) +"px");
	$("#moon").css("top", String($(document).scrollTop() * .1) +"px");
	$("#sky").css("right", String($(document).scrollTop() * .3) +"px");
	$("#stars").css("right", String($(document).scrollTop() *.3)  +"px");
	$("#sun").css("left", String($(document).scrollTop()  * .1 ) +"px");
	
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