
// for project page.......................
var title_plate = document.getElementById("title_plate");
var des_plate = document.getElementById("des_plate");
var photo_bar = document.getElementById("photo_bar");

setTimeout(first_call, 10);

function first_call()
{
	title_plate.setAttribute("style", "transform: Scale(1)")
	des_plate.setAttribute("style", "transform:translate(0%,0%);")
	photo_bar.setAttribute("style", "transform:translate(0%,0%);")
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



























































