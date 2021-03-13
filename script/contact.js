
// for project page.......................
var moving_back = document.getElementById("moving_back");

var move = setInterval(MoveBackGround, 10000);

var count = 0;


setTimeout(MoveBackGround, 1000);

function MoveBackGround() {
	
	if(count%2==0){
		console.log("0");
		moving_back.setAttribute("style", "transform: scale(1.2)")
	}
	else{
		console.log("1");
		moving_back.setAttribute("style", "transform: scale(1)")
	}
	
	count++;
	
}