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

var copy_to_clip_button = document.getElementById("copy_to_clip");

var own_t=100;
var not_own_t=600;

var description_bar = document.getElementById("description_bar");

first_call();

function first_call()
{
	// image_1.setAttribute("style", "transform: scale(1.2)")
	// image_2.setAttribute("style", "transform: scale(1)")
	// image_3.setAttribute("style", "transform: scale(1)")
	// image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-30%)")
	scroller.setAttribute("style", "transform:translate(0%,0%)")
	// document.getElementById('slide_button_1').checked = true
	
	
	slider_counter = 1;
	arrow_alpha_controll();
	
	description_bar.setAttribute("style", "opacity:1")
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
	if(slider_counter == 1){
		// setTimeout(go_to_showcase(image_1), 100);
		setTimeout(function() {go_to_showcase(image_1);}, own_t)
		
	}
	else{
		// setTimeout(go_to_showcase(image_1), 700);
		setTimeout(function() {go_to_showcase(image_1);}, not_own_t)
	}
  
  
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
	if(slider_counter == 2){
		setTimeout(function() {go_to_showcase(image_2);}, own_t)
	}
	else{
		setTimeout(function() {go_to_showcase(image_2);}, not_own_t)
	}
  
  
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
  
	if(slider_counter == 3){
		setTimeout(function() {go_to_showcase(image_3);}, own_t)
	}
	else{
		setTimeout(function() {go_to_showcase(image_3);}, not_own_t)
	}
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1.2)")
	image_4.setAttribute("style", "transform: scale(1)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-90%)")
	scroller.setAttribute("style", "transform:translate(0%,200%)")
	document.getElementById('slide_button_3').checked = true
	
	slider_counter = 3;
	
	arrow_alpha_controll();
	
	// setTimeout(go_to_showcase, 600);
	// go_to_showcase();
});


document.getElementById("image_4").addEventListener("click", function() {
  // document.getElementById("demo").innerHTML = "Hello World";
  
  // console.log("hello");
	if(slider_counter == 4){
		setTimeout(function() {go_to_showcase(image_4);}, own_t)
	}
	else{
		setTimeout(function() {go_to_showcase(image_4);}, not_own_t)
	}
  
  
  
	image_1.setAttribute("style", "transform: scale(1)")
	image_2.setAttribute("style", "transform: scale(1)")
	image_3.setAttribute("style", "transform: scale(1)")
	image_4.setAttribute("style", "transform: scale(1.2)")
	
	image_holder.setAttribute("style", "transform:translate(0%,-120%)")
	scroller.setAttribute("style", "transform:translate(0%,300%)")
	document.getElementById('slide_button_4').checked = true
	
	slider_counter = 4;
	
	arrow_alpha_controll();
	
	// setTimeout(go_to_showcase, 600);
	// go_to_showcase();
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



copy_to_clip_button.addEventListener("click", function() {
  
	// console.log('ok');
	// var copyText = document.getElementById("myInput");
	// var copyText = document.URL;
	// var copyText = window.location.href;
	// console.log(copyText);
	// copyText.select();
	// copyText.setSelectionRange(0, 99999); 

	// document.execCommand("copy");

	// alert("Copied the text: " + copyText.value);
	
	
	
	// var dummy = document.createElement('input'),
    // text = window.location.href;

	var page_link = document.createElement('input'),
		text = window.location.href;

	document.body.appendChild(page_link);
	page_link.value = text;
	page_link.select();
	document.execCommand('copy');
	document.body.removeChild(page_link);
	
	swal({
	  title: "Link Copied!",
	  text: "Link copied to clipboard",
	  icon: "success",
	  // button: "Okay",
	  // showConfirmButton: false,
	  timer: 1000
	});
  
});

//image clicking to go to page........................showcase...............

function go_to_showcase(img_hol)
{	
	
	const style = window.getComputedStyle(img_hol);
	const image = style.backgroundImage;
	const url= image.slice(75,-2);
	
	var img_title = img_hol.getAttribute('value');
	console.log(img_title);
	console.log(url);
	console.log(slider_counter);
	
	localStorage.setItem("imgtitle", img_title);
	localStorage.setItem("imageurl", url);
	localStorage.setItem("slider_counter", slider_counter);
	
	window.location.href="showcase.html";
	
}




// ............... nav bar menu 
var menu_nav = document.getElementById("menu_nav");
var navbar_2 = document.getElementById("navbar_2");

menu_nav.addEventListener("click", function() {
  
	const style = window.getComputedStyle(navbar_2);
	const nav_display = style.display;
	// console.log(displays);
	
	if(nav_display == "none"){
		navbar_2.setAttribute("style", "display:flex");
		// console.log("ok");
	}
	else{
		
		navbar_2.setAttribute("style", "display:none");
		// console.log("ok");
	}
});
// ............... nav bar menu 


























































