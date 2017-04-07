// Grow Button
$("#button1").on("click", function() {
	// Increase size of box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// Skrink Button
$("#button2").on("click", function() {
	// Decrease size of box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

// Blue Button
$("#button3").on("click", function() {
	// Make box blue.
	$("#box").css("background-color", "blue");
})

// Fade Button
$("#button4").on("click", function() {
	// Decrease opacity.
	$("#box").animate({opacity:"-=0.1"}, "fast");
})

// Reset Button
$("#button5").on("click", function() {
	// Return box to starting color, opacity, and size.
	$("#box").animate({height:"150px", width:"150px", opacity:"1.0"}, "fast");
	$("#box").css("background-color", "orange");
})