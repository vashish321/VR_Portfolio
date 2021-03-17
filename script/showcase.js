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
		project_title.innerHTML = "Charles Street Video";
		project_des.innerHTML = "This website was aimed to redesign the website of an organisation whose cause was charitable. This project included the redesign of the website and mobile versions of the website and ensuring it was appealing to all the present and future stakeholders of the organization. Prototyping included using paper wireframes and adding clickable functions to them in order to iterate possible solutions to the problem. Hi-level iterations of prototypes included using figma and high level graphics to animate the webiste and deeply disseminate the functionality of the website and mobile application.";
		document.getElementById("set_pdf").src = "pdf/1.pdf";
		
	}
	else if(slider_counter == 2)
	{
		image_holder.setAttribute("style", "background: url(image/2.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Genius Create";
		project_des.innerHTML = "This project included the design of the features of the app as well as the onboarding process demonstrated using Figma. The user research was a structured approach where the user persona was developed and the key characteristics to developing the needs and pain points of the user were defined. In conclusion, only the mobile version of the app was developed and the project was a success in detailing its main features. Further iterations of this design would include more user research to target the key demographics as well as a website further of the application.";
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
		project_title.innerHTML = "First UX UI Portfolio";
		project_des.innerHTML = "This is a simple presentation featuring one of my first UX UI Portfolios. It can be used in lieu of going through this entire website.";
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














































