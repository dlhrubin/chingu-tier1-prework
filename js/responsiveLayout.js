window.onload = function() {
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
}


