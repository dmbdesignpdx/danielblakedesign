var SmoothScroll = require("./smooth-scroll")

function $(el = "window") {
   el = "window" === el ? [window] : "body" === el ? [document.body] : "html" === el ? [document.documentElement] : "head" === el ? [document.head] : [].slice.call(document.querySelectorAll(el))
   return 1 < el.length ? el : el[0]
}

function addTo(el, evt, func, opt = null) {
   !Array.isArray($(el)) && (el = [$(el)])
   el.map(elm => {elm.addEventListener(evt, func, opt)})
}

function rmvFrom(el, evt, func, opt = null) {
   !Array.isArray($(el)) && (el = [$(el)])
   el.map(elm => {elm.removeEventListener(evt, func, opt)})
}

// -- Vars -- //

var
icon = $("body > header svg"),
nav = $("#nav"),
scroll = SmoothScroll('a[href*="#"]'),
original = $().pageYOffset,
check = 0,
max = 0,
bounce



// -- Functions -- //

// Page

function page(cls) {
	return cls === $("body").className
}

function wh() {
   return Math.round($().innerHeight * 0.33)
}


// Arrow Fade on Scroll

function arrowFade() {
	if ($().scrollY > wh() && !check) {
		icon.classList.add("fade")
		check = 1
	} else if ($().scrollY < wh() && check) {
		icon.classList.remove("fade")
		check = 0
	}
}


// Nav Scroll Action

function navScroll() {
	const update = $().pageYOffset,
	nh = parseInt($().getComputedStyle(nav).height)

	// Check scroll position
	if ($().pageYOffset > nh) {
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
	} else if (0 === $().pageYOffset) {
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
	const full = $("html").scrollHeight,
	height = $().innerHeight
	max = full - height
}



// -- Invoke -- //

addTo("window", "load", function ready() {
	addTo("window", "resize", size)
	addTo("window", "scroll", () => {
		navScroll()
		arrowFade()
	})

   // Hero underline animations
   var span = $("h1 span")
	if (Array.isArray(span)) {
      span.map(item => {
         item.classList.add("underline")
      })
   } else {
      span.classList.add("underline")
   }
	
	navScroll()
   size()
}, {once: true})
