var image_1 = document.getElementById("image_1");
var image_2 = document.getElementById("image_2");
var image_3 = document.getElementById("image_3");
var image_4 = document.getElementById("image_4");

var image_holder = document.getElementById("image_holder");
var scroller = document.getElementById("scroll_handle");

// search_bar.addEventListener("mouseover", func, false);
// search_bar.addEventListener("mouseout", func1, false);
var slider_counter;
var up_arrow = document.getElementById("up_arrow");
var down_arrow = document.getElementById("down_arrow");

first_call();

function first_call()
{
	image_1.setAttribute("style", "transform: scale(1.2)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-30%)")
	scroller.setAttribute("style", "transform:translate(0%,0%)")
	document.getElementById('slide_button_1').checked = true
	
	
	slider_counter = 1;
	arrow_alpha_controll();
}


function arrow_alpha_controll(){
	
	if(slider_counter == 1){
		up_arrow.setAttribute("style", "color: rgba(255,255,255, 0.5)")
		down_arrow.setAttribute("style", "color: rgba(255,255,255, 1)")
	}
	else if(slider_counter == 4){
		up_arrow.setAttribute("style", "color: rgba(255,255,255, 1)")
		down_arrow.setAttribute("style", "color: rgba(255,255,255, 0.5)")
	}
	else{
		up_arrow.setAttribute("style", "color: rgba(255,255,255, 1)")
		down_arrow.setAttribute("style", "color: rgba(255,255,255, 1)")
	}
	
}







// slider start..............................................................................


document.getElementById("image_1").addEventListener("click", function() {
  // document.getElementById("demo").innerHTML = "Hello World";
  
  // console.log("hello");
  
	image_1.setAttribute("style", "transform: scale(1.2)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-30%)")
	scroller.setAttribute("style", "transform:translate(0%,0%)")
	document.getElementById('slide_button_1').checked = true
	
	slider_counter = 1;
	
	arrow_alpha_controll();
});

document.getElementById("image_2").addEventListener("click", function() {
  // document.getElementById("demo").innerHTML = "Hello World";
  
  // console.log("hello");
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1.2)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-60%)")
	scroller.setAttribute("style", "transform:translate(0%,100%)")
	document.getElementById('slide_button_2').checked = true
	
	slider_counter = 2;
	
	arrow_alpha_controll();
});

document.getElementById("image_3").addEventListener("click", function() {
  // document.getElementById("demo").innerHTML = "Hello World";
  
  // console.log("hello");
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1.2)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-90%)")
	scroller.setAttribute("style", "transform:translate(0%,200%)")
	document.getElementById('slide_button_3').checked = true
	
	slider_counter = 3;
	
	arrow_alpha_controll();
});


document.getElementById("image_4").addEventListener("click", function() {
  // document.getElementById("demo").innerHTML = "Hello World";
  
  // console.log("hello");
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1.2)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-120%)")
	scroller.setAttribute("style", "transform:translate(0%,300%)")
	document.getElementById('slide_button_4').checked = true
	
	slider_counter = 4;
	
	arrow_alpha_controll();
});















// slider button start  ...................................................................

document.getElementById("slide_button_1").addEventListener("click", function() {
  
	image_1.setAttribute("style", "transform: scale(1.2)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-30%)")
	scroller.setAttribute("style", "transform:translate(0%,0%)")
	
	slider_counter = 1;
	
	arrow_alpha_controll();
});

document.getElementById("slide_button_2").addEventListener("click", function() {
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1.2)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-60%)")
	scroller.setAttribute("style", "transform:translate(0%,100%)")
	
	slider_counter = 2;
	
	arrow_alpha_controll();
});

document.getElementById("slide_button_3").addEventListener("click", function() {
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1.2)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-90%)")
	scroller.setAttribute("style", "transform:translate(0%,200%)")
	
	slider_counter = 3;
	
	arrow_alpha_controll();
});

document.getElementById("slide_button_4").addEventListener("click", function() {
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1.2)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-120%)")
	scroller.setAttribute("style", "transform:translate(0%,300%)")
	
	slider_counter = 4;
	
	arrow_alpha_controll();
});

// slider button end  ...................................................................







document.getElementById("up_arrow").addEventListener("click", function() {
  
	if(slider_counter == 1){
		
		arrow_alpha_controll();
	}
    else if(slider_counter == 2){
		
		image_1.setAttribute("style", "transform: scale(1.2)")
		image_2.setAttribute("style", "transform: scale(1)")
		image_3.setAttribute("style", "transform: scale(1)")
		image_4.setAttribute("style", "transform: scale(1)")
		
		image_holder.setAttribute("style", "transform:translate(0%,-30%)")
		scroller.setAttribute("style", "transform:translate(0%,0%)")
		document.getElementById('slide_button_1').checked = true
		
		slider_counter =1;
		
		arrow_alpha_controll();
		
	}
	else if(slider_counter == 3){
		
		image_1.setAttribute("style", "transform: scale(1)")
		image_2.setAttribute("style", "transform: scale(1.2)")
		image_3.setAttribute("style", "transform: scale(1)")
		image_4.setAttribute("style", "transform: scale(1)")
		
		image_holder.setAttribute("style", "transform:translate(0%,-60%)")
		scroller.setAttribute("style", "transform:translate(0%,100%)")
		document.getElementById('slide_button_2').checked = true
		
		slider_counter =2;
		
		arrow_alpha_controll();
	}
	else if(slider_counter == 4){
		
		image_1.setAttribute("style", "transform: scale(1)")
		image_2.setAttribute("style", "transform: scale(1)")
		image_3.setAttribute("style", "transform: scale(1.2)")
		image_4.setAttribute("style", "transform: scale(1)")
		
		image_holder.setAttribute("style", "transform:translate(0%,-90%)")
		scroller.setAttribute("style", "transform:translate(0%,200%)")
		document.getElementById('slide_button_3').checked = true
		
		slider_counter = 3;
		
		arrow_alpha_controll();
	}
  
	
	
});



document.getElementById("down_arrow").addEventListener("click", function() {
  
	
    if(slider_counter == 1){
		
		image_1.setAttribute("style", "transform: scale(1)")
		image_2.setAttribute("style", "transform: scale(1.2)")
		image_3.setAttribute("style", "transform: scale(1)")
		image_4.setAttribute("style", "transform: scale(1)")
		
		image_holder.setAttribute("style", "transform:translate(0%,-60%)")
		scroller.setAttribute("style", "transform:translate(0%,100%)")
		document.getElementById('slide_button_2').checked = true
		
		slider_counter = 2;
		
		arrow_alpha_controll();
	}
	else if(slider_counter == 2){
		
		image_1.setAttribute("style", "transform: scale(1)")
		image_2.setAttribute("style", "transform: scale(1)")
		image_3.setAttribute("style", "transform: scale(1.2)")
		image_4.setAttribute("style", "transform: scale(1)")
		
		image_holder.setAttribute("style", "transform:translate(0%,-90%)")
		scroller.setAttribute("style", "transform:translate(0%,200%)")
		document.getElementById('slide_button_3').checked = true
		
		slider_counter = 3;
		
		arrow_alpha_controll();
	}
	else if(slider_counter == 3){
		
		image_1.setAttribute("style", "transform: scale(1)")
		image_2.setAttribute("style", "transform: scale(1)")
		image_3.setAttribute("style", "transform: scale(1)")
		image_4.setAttribute("style", "transform: scale(1.2)")
		
		image_holder.setAttribute("style", "transform:translate(0%,-120%)")
		scroller.setAttribute("style", "transform:translate(0%,300%)")
		document.getElementById('slide_button_4').checked = true
		
		slider_counter = 4;
		
		arrow_alpha_controll();
	}
	else if(slider_counter == 4){
		
		arrow_alpha_controll();
	}
	
	
});



















