var imageurl = localStorage.getItem("imageurl");
var img_title = localStorage.getItem("imgtitle");
var slider_counter = localStorage.getItem("slider_counter");
// <!-- alert("The Value Received is " + b); -->
var resetValue =0;

// console.log(img_title);

// localStorage.setItem("imageurl", resetValue);

var image_holder = document.getElementById("image_holder");
var project_title = document.getElementById("project_title");
var project_des = document.getElementById("project_des");




// var imageurl = "test";
// var new_image_url = "url(../"+imageurl+") no-repeat center center / cover";
var new_image_url = "background: url(image/"+imageurl+") no-repeat center center / cover;";
// console.log(new_image_url);

first_call();

function first_call()
{
	
	image_holder.setAttribute("style", new_image_url);
	project_title.innerHTML = img_title;
	
	
	if(slider_counter == 1)
	{
		project_des.innerHTML = "this is "+img_title;
		
		document.getElementById("set_pdf").src = "pdf/1.pdf";
	}
	else if(slider_counter == 2)
	{
		project_des.innerHTML = "this is "+img_title;
		
		document.getElementById("set_pdf").src = "pdf/2.pdf";
	}
	else if(slider_counter == 3)
	{
		project_des.innerHTML = "this is "+img_title;
		
		document.getElementById("set_pdf").src = "pdf/3.pdf";
	}
	else if(slider_counter == 4)
	{
		project_des.innerHTML = "this is "+img_title;
		
		document.getElementById("set_pdf").src = "pdf/4.pdf";
	}
	
	
	
	
}

















































