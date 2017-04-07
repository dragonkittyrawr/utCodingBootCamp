// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 5 (the number of facts in the booFactsArray)
	var number = Math.floor((Math.random() * booFacts.length));
	// We display the fact from the booFactsArray that is in the random position we just generated.s
	$("#factText").text(booFacts[number])
})

// This array holds all of our Boo facts!
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})