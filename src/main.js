

// -- Vars -- //

var
icon = document.querySelector("body > header svg"),
nav = document.querySelector("#nav"),
scroll = new SmoothScroll('a[href*="#"]')

let
check = 0,
original = window.pageYOffset,
max = 0,
bounce



// -- Functions -- //

// Page

function page(cls) {
	return cls === document.body.className
}

function wh() {
   return Math.round(window.innerHeight * 0.33)
}


// Arrow Fade on Scroll

function arrowFade() {
	if (window.scrollY > wh() && !check) {
		icon.classList.add("fade")
		check = 1
	} else if (window.scrollY < wh() && check) {
		icon.classList.remove("fade")
		check = 0
	}
}


// Nav Scroll Action

function navScroll() {
	const update = window.pageYOffset,
	nh = parseInt(window.getComputedStyle(nav).height)

	// Check scroll position
	if (window.pageYOffset > nh) {
		nav.classList.add("fixed")
		nav.classList.add("time")

		// Scroll bounce check
		if (original > -1 && max > update) {

			// Show or hide nav based on all checks
			if (update > original && !bounce) {
				nav.classList.remove("show")	
				bounce = 1
			} else if (original > (update + 2)) {
				nav.classList.add("show")
				bounce = 0
			}

		}

	// Reset
	} else if (0 === window.pageYOffset) {
		nav.classList.remove("fixed")
		nav.classList.remove("show")	
	} else {
		nav.classList.remove("time")
	}

	// Update scroll position
	original = update
}


// Check Window Size

function size() {
	const full = document.documentElement.scrollHeight,
	height = window.innerHeight
	max = full - height
}



// -- Invoke -- //

window.addEventListener("load", function ready() {
	window.removeEventListener("load", ready)
	window.addEventListener("resize", size)
	window.addEventListener("scroll", () => {
		navScroll()
		arrowFade()
	})

	// Hero underline animations
	document.querySelectorAll("h1 span").forEach(item => {
		item.classList.add("underline")
	})
	
	navScroll()
   size()
})
