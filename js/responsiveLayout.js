window.onload = function() {
	var hamburger = document.getElementById("hamburger");
	var navbar = document.getElementById("navbar");
	navbar.style.display = "block";
	hamburger.addEventListener("click", function (e) {
		console.log(navbar.style.display)
		if (navbar.style.display === "block") {
			navbar.style.display = "none";
		} else if (navbar.style.display === "none") {
			navbar.style.display = "block";
		}

	}, false)
}



/*
document.getElementById("hamburger").addEventListener("click", function (e) {
		console.log(e.target);
		var hamburger = document.querySelector("[id=homepage-btn]")
		console.log(hamburger)
		//e.target.setAttribute("href", "javascript: void(0)")
		hamburger.style.display = "block"
		console.log(hamburger.style.display);
}, false)
*/