

function imgSlider(value){
 var us_photos=document.getElementsByClassName("photo_us_slider");
 switch(value){
	 /*Переделать в нормальную функцию*/
	case '1':
	us_photos[0].classList.remove("left","right");
	us_photos[0].classList.add("center");
	us_photos[1].classList.remove("center", "left");
	us_photos[1].classList.add("right");
	us_photos[2].classList.remove("right", "center");
	us_photos[2].classList.add("left");
	break;
	case '2':
	us_photos[0].classList.remove("center", "right");
	us_photos[0].classList.add("left");
	us_photos[1].classList.remove("right", "left");
	us_photos[1].classList.add("center");
	us_photos[2].classList.remove("center", "left");
	us_photos[2].classList.add("right");
	break;
	case '3':
	us_photos[0].classList.remove("left", "center");
	us_photos[0].classList.add("right");
	us_photos[1].classList.remove("center","right");
	us_photos[1].classList.add("left");
	us_photos[2].classList.remove("right", "left");
	us_photos[2].classList.add("center");
	break;
	
					}
 
 };
 
 /*function imgSlider()
 {
	 
 }*/