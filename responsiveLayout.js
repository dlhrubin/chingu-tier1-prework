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
		var timer;
		if (parallax.scrollTop >= 300) {
			upScroll.style.visibility = "visible";
			upScroll.style.opacity = "1";
		}
		else {
			upScroll.style.opacity = "0";
			timer = setTimeout(function() {
				upScroll.style.visibility = "hidden";
			}, 500)
			window.clearTimeout(timer);
		}
	}

	//Adding smooth scrolling to anchors
	var anchors = document.getElementsByClassName("smooth-scroll")
	Array.prototype.forEach.call(anchors, function(a) {
		a.addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById(a.href.match(/#.*$/)[0].substring(1)).scrollIntoView({
				behavior: "smooth"
			});
		})
	})

	//Formatting navigation buttons to stay highlighted after clicking
	var buttons = document.getElementsByClassName("nav-btn");
	var unfocused = "#7d4434"
	var focused = "#994f33"
	Array.prototype.forEach.call(buttons, function(currentBtn) {
		currentBtn.addEventListener("click", function() {
			currentBtn.style.backgroundColor = focused;
			Array.prototype.forEach.call(buttons, function(btn) {
				if (btn !== currentBtn) {
					btn.style.backgroundColor = unfocused;
				}
			})
		})
	})
}