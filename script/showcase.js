var imageurl = localStorage.getItem("imageurl");
var img_title = localStorage.getItem("imgtitle");
var slider_counter = localStorage.getItem("slider_counter");
// <!-- alert("The Value Received is " + b); -->
var resetValue =0;

console.log(imageurl);
console.log(img_title);
console.log(slider_counter);

// localStorage.setItem("imageurl", resetValue);

var image_holder = document.getElementById("image_holder");
var project_title = document.getElementById("project_title");
var project_des = document.getElementById("project_des");




// var imageurl = "test";
// var new_image_url = "url(../"+imageurl+") no-repeat center center / cover";
var new_image_url = "background: url(image/"+imageurl+") no-repeat center center / cover;";
// console.log(new_image_url);

setTimeout(first_call, 10);

// first_call();

function first_call()
{
	
	// image_holder.setAttribute("style", new_image_url);
	// project_title.innerHTML = img_title;
	
	
	if(slider_counter == 1)
	{
		
		image_holder.setAttribute("style", "background: url(image/1.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Item1";
		project_des.innerHTML = "this is item1";
		document.getElementById("set_pdf").src = "pdf/1.pdf";
		
	}
	else if(slider_counter == 2)
	{
		image_holder.setAttribute("style", "background: url(image/2.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Item2";
		project_des.innerHTML = "this is item2";
		document.getElementById("set_pdf").src = "pdf/2.pdf";
		
		
		// project_des.innerHTML = "this is "+img_title;
		// document.getElementById("set_pdf").src = "pdf/2.pdf";
	}
	else if(slider_counter == 3)
	{
		
		image_holder.setAttribute("style", "background: url(image/3.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Item3";
		project_des.innerHTML = "this is item3";
		document.getElementById("set_pdf").src = "pdf/3.pdf";
		
		
		// project_des.innerHTML = "this is "+img_title;
		// document.getElementById("set_pdf").src = "pdf/3.pdf";
	}
	else if(slider_counter == 4)
	{
		
		image_holder.setAttribute("style", "background: url(image/4.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Item4";
		project_des.innerHTML = "this is item4";
		document.getElementById("set_pdf").src = "pdf/4.pdf";
		
		
		// project_des.innerHTML = "this is "+img_title;
		// document.getElementById("set_pdf").src = "pdf/4.pdf";
	}
	
	
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














































