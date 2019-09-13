var image = document.getElementById("moon");
var image_tracker = "m";
function change(){
    if(image_tracker=="m")
    {
        image.src="sun.jpg";
        image_tracker="s";        
    }
    else{
        image.src="moon.jpg";
        image_tracker="m";
    }
}
