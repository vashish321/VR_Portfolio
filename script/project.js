
// for project page.......................
var prj_image_1 = document.getElementById("prj_image_1");
var prj_image_2 = document.getElementById("prj_image_2");
var prj_image_3 = document.getElementById("prj_image_3");
var prj_image_4 = document.getElementById("prj_image_4");


prj_image_1.addEventListener("click", function() {
	// console.log("ok");
	prj_go_to_showcase(prj_image_1);
});

prj_image_2.addEventListener("click", function() {
	prj_go_to_showcase(prj_image_2);
});

prj_image_3.addEventListener("click", function() {
	prj_go_to_showcase(prj_image_3);
});

prj_image_4.addEventListener("click", function() {
	prj_go_to_showcase(prj_image_4);
});


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