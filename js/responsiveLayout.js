window.onload = function() {
	//Formatting responsive navigation menu
	var navbar = document.getElementById("navbar");
	var checkbox = document.getElementById("check");

	navbar.style.display = (document.documentElement.clientWidth > 770) ? "block" : "none";

	checkbox.addEventListener("change", function () {
		navbar.style.height = (this.checked) ? "auto" : "0";
		navbar.style.display = (this.checked) ? "block" : "none";
	}, false)

	window.onresize = function () {
		navbar.style.height = (document.documentElement.clientWidth > 770) ? "auto" : (checkbox.checked) ? "auto" : "0";
		navbar.style.display = (document.documentElement.clientWidth > 770) ? "block" : (checkbox.checked) ? "block" : "none";
	}

	//Formatting scroll-to-top button
	var parallax = document.getElementById("parallax");
	var	upScroll = document.getElementById("top-scroll");
	upScroll.style.visibility = "hidden";

	parallax.onscroll = function() {
		if (parallax.scrollTop >= 300) {
			upScroll.style.visibility = "visible";
			upScroll.style.opacity = "1";
		}
		else {
			upScroll.style.opacity = "0";
			setTimeout(function() {
				upScroll.style.visibility = "hidden";
			}, 500)
		}
	}
}


