
// for project page.......................
var prj_image_1 = document.getElementById("prj_image_1");
var prj_image_2 = document.getElementById("prj_image_2");
var prj_image_3 = document.getElementById("prj_image_3");
var prj_image_4 = document.getElementById("prj_image_4");


prj_image_1.addEventListener("click", function() {
	// console.log("ok");
	prj_go_to_showcase(prj_image_1,1);
});

prj_image_2.addEventListener("click", function() {
	prj_go_to_showcase(prj_image_2,2);
});

prj_image_3.addEventListener("click", function() {
	prj_go_to_showcase(prj_image_3,3);
});

prj_image_4.addEventListener("click", function() {
	prj_go_to_showcase(prj_image_4,4);
});



function prj_go_to_showcase(img_hol, slider_cnt)
{	
	
	const style = window.getComputedStyle(img_hol);
	const image = style.backgroundImage;
	const url= image.slice(75,-2);
	
	var img_title = img_hol.getAttribute('value');
	const slider_counter = slider_cnt;
	
	
	console.log(img_title);
	console.log(url);
	console.log(slider_counter);
	
	localStorage.setItem("imgtitle", img_title);
	localStorage.setItem("imageurl", url);
	localStorage.setItem("slider_counter", slider_counter);
	
	window.location.href="showcase.html";
	
}


/* 
function prj_go_to_showcase(img_hol)
{	
	
	const style = window.getComputedStyle(img_hol);
	const image = style.backgroundImage;
	const url= image.slice(75,-2);
	// console.log(url);
	
	var img_title = img_hol.getAttribute('value');
	// console.log(img_title);
	
	var slider_counter= image.slice(75,-6);
	// console.log(slider_counter);
	
	localStorage.setItem("imgtitle", img_title);
	localStorage.setItem("imageurl", url);
	localStorage.setItem("slider_counter", slider_counter);
	
	
	
	window.location.href="showcase.html";
	
}
 */


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















































