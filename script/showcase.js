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
		project_title.innerHTML = "Charles Street Video Case Study";
		project_des.innerHTML = "This website is a case study for a charitable organization where we analyzed the elements of UX UI Design which can be used to improve website traffic and interaction. It included the creation of desktop and mobile versions of the website, ensuring it was appealing to all the present and future stakeholders of the organization. Prototyping included using paper wireframes and adding clickable functions to them in order to iterate possible solutions to the problem. Hi-level iterations of prototypes included using figma and high level graphics to animate the webiste and deeply disseminate the functionality of the website and mobile application. In the Figma link provided, the Development Processes to ideate solutions included User Personas, Empathy Maps and Feature prioritization to decide on main features. User interviews and Heuristic evaluations were some client exercises to determine the needs and pain points of the stakeholders. My role included interviewing the clients as potential users of the website; as well as delegating duties to the team for the completion of the project. The re-design of this website took 4 weeks.";
		document.getElementById("set_pdf").src = "pdf/1.pdf";
		document.getElementById("down_link").href = "https://drive.google.com/file/d/1OHorSB-zqRyDza_kgi-589SUC9zFZmO0/view?usp=sharing";
		document.getElementById("figma_link").href = "https://www.figma.com/file/c34PT2oI6vtWgzEW9g9HxZ/Charles-Street-Video-Re-design";
	}
	else if(slider_counter == 2)
	{
		image_holder.setAttribute("style", "background: url(image/2.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Genius Create MTV";
		project_des.innerHTML = "This project included the design of the features of the app as well as the onboarding process demonstrated using Figma. The user research was a structured approach where the user persona was developed and the key characteristics to developing the needs and pain points of the user were defined. In conclusion, only the mobile version of the app was developed and the project was a success in detailing its main features. Further iterations of this design would include more user research to target the key demographics as well as a website further of the application.";
		document.getElementById("set_pdf").src = "pdf/2.pdf";
		document.getElementById("down_link").href = "https://drive.google.com/file/d/1gYw1QU4boOUGlUguSabRTYtxh76OBr-l/view?usp=sharing";
		document.getElementById("figma_link").href = "https://www.figma.com/file/ThgRCaiKdB5gcnLv53LZsv/MTV-Deliverables-Design";
	}
	else if(slider_counter == 3)
	{
		image_holder.setAttribute("style", "background: url(image/3.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "Secretsauce Group Design";
		project_des.innerHTML = "This project included the design of the features of the app as well as the onboarding process demonstrated using Figma. The user research was a structured approach where the user persona was developed and the key characteristics to developing the needs and pain points of the user were defined. In conclusion, only the mobile version of the app was developed and the project was a success in detailing its main features. Further iterations of this design would include more user research to target the key demographics as well as a website further of the application.";
		document.getElementById("set_pdf").src = "pdf/3.pdf";
		document.getElementById("down_link").href = "pdf/4.pdf";
		document.getElementById("figma_link").href = "https://www.figma.com/file/ViLux4zSU5UME2p6PUZzeu/SecretSauce-Design";
	}
	else if(slider_counter == 4)
	{
		image_holder.setAttribute("style", "background: url(image/4.jpg) no-repeat center center / cover;");
		project_title.innerHTML = "My First Individual Project";
		project_des.innerHTML = "This is a simple presentation featuring one of my first UX UI Projects. It was based on an app of my choosing where I used iterative processes along with the teachings of what we learned so far in the UX UI Deisgn course to deisgn a clickable prototype of the app in FIgma.";
		document.getElementById("set_pdf").src = "pdf/4.pdf";
		document.getElementById("down_link").href = "https://drive.google.com/file/d/1GW7k8YDmnOfkDVLUdVR3_SENquV15kAr/view?usp=sharing";
		document.getElementById("figma_link").href = "https://www.figma.com/files/project/9727840/Very-First-Project?fuid=848065108254760187";
		
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














































