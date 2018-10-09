"use strict"

// === Vars === //

const nav = document.querySelector("#nav")
var
original = window.pageYOffset,
viewMax = 0,
bounce = 0



// === Functions === //

// -- Touch Screen check

function touch() {
   return "ontouchstart" in window || navigator.MaxTouchPoints > 0
}


// -- Find available viewing height

function availHeight() {
	const full = document.documentElement.scrollHeight,
	height = window.innerHeight
	viewMax = full - height
}


// -- Show/Hide Nav

function decide(update) {

   // Scrolling down (Hide)
   // And bottom bounce check
   if (update > original && !bounce) {
      nav.classList.remove("show")	
      bounce = 1

   // Or scrolling up (Show)
   } else if (original > update) {
      nav.classList.add("show")
      bounce = 0
   }
}


// -- Page scroll update

function pageScroll() {
	const update = window.pageYOffset,
   nh = nav.clientHeight

	// Check scroll position
	if (window.pageYOffset > nh) {
		nav.classList.add("fixed")
		nav.classList.add("time")

		// Available scroll height check (top and bottom)
		if (original > -1 && viewMax > update) {

         // Show/Hide Nav
         if (touch()) {
            window.addEventListener("touchend", function touchDecide(){
               decide(update)
            })
         } else {
            decide(update)
         }
		}

	// Or reset all at top
	} else if (0 === window.pageYOffset) {
		nav.classList.remove("fixed")
      nav.classList.remove("show")
   
   // Or remove transition in Nav height area
	} else {
		nav.classList.remove("time")
	}

	// Update scroll position
	original = update
}



// === Export === //

export default function navExport() {
   window.addEventListener("load", function navReady(){
      window.addEventListener("resize", availHeight)

      if (touch()) window.addEventListener("touchstart", pageScroll)
      else window.addEventListener("scroll", pageScroll)
      
      pageScroll()
      availHeight()
   }, {once: true})
}
