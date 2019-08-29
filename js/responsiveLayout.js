window.onload = function() {
	//Formatting responsive navigation menu
	var navbar = document.getElementById("navbar");
	var checkbox = document.getElementById("check");
	var parallax = document.getElementById("parallax");
	var	upScroll = document.getElementById("top-scroll");

	navbar.style.display = (document.documentElement.clientWidth > 770) ? "block" : "none";

	checkbox.addEventListener("change", function () {
		navbar.style.height = (this.checked) ? "auto" : "0";
		navbar.style.display = (this.checked) ? "block" : "none";
	}, false)

	window.onresize = function () {
		navbar.style.top = (window.innerWidth <= 770) ? parallax.scrollTop + 50 + "px" : parallax.scrollTop + "px";
		navbar.style.height = (document.documentElement.clientWidth > 770) ? "auto" : (checkbox.checked) ? "auto" : "0";
		navbar.style.display = (document.documentElement.clientWidth > 770) ? "block" : (checkbox.checked) ? "block" : "none";
	}

	//Formatting scroll-to-top button
	upScroll.style.visibility = "hidden";
	parallax.onscroll = function() {
		//Two-liner to fix header position to the top of the window without overlapping the scroll bar
		navbar.style.top = (window.innerWidth <= 770) ? parallax.scrollTop + 50 + "px" : parallax.scrollTop + "px";
		document.getElementById("shrunken-menu").style.top = (parallax.scrollTop + 10) + "px"; 

		var timer;
		if (parallax.scrollTop < 300) {
			upScroll.style.opacity = "0";
			timer = setTimeout(function() {
				if (parallax.scrollTop < 300) {
					upScroll.style.visibility = "hidden";
				}
			}, 500)
		}
		else {
			upScroll.style.visibility = "visible";
			upScroll.style.opacity = "1";
		}
	}

	//Adding smooth scrolling to anchors
	var anchors = document.getElementsByClassName("smooth-scroll")
	Array.prototype.forEach.call(anchors, function(a) {
		var el = document.getElementById(a.href.match(/#.*$/)[0].substring(1));
		a.addEventListener("click", function(event) {
			event.preventDefault();
			el.scrollIntoView({
				behavior: "smooth"
			});
		})
	})

	//Formatting navigation buttons to stay highlighted after clicking
	var buttons = document.getElementsByClassName("nav-btn");
	var focused = "#994f33";
	var unfocused = "#7d4434";
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