
// for project page.......................
var title_plate = document.getElementById("title_plate");
var des_plate = document.getElementById("des_plate");
var photo_bar = document.getElementById("photo_bar");

first_call();

function first_call()
{
	title_plate.setAttribute("style", "transform: Scale(1)")
	des_plate.setAttribute("style", "transform:translate(0%,0%);")
	photo_bar.setAttribute("style", "transform:translate(0%,0%);")
}
