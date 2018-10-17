/**
 * @file Module for navigation behavior
 */



//
// Variables
//


const nav = document.querySelector("#nav")

let
original = window.pageYOffset,
viewMax = 0,
bounce = 0



//
// Functions
//


/**
 * @name availHeight
 * @description Finds the available view height
 * @returns {undefined} viewMax gets updated
 */
function availHeight() {
   const
   full = document.documentElement.scrollHeight,
	height = window.innerHeight

   viewMax = full - height
}


/**
 * @name showHide
 * @description Show or Hide Nav
 * @param {number} update - Last scroll position
 * @returns {undefined} Adds or removes "js-show" class
 */
function showHide(update) {
   // Scrolling down (Hide) and bottom bounce check
   if (update > original && !bounce) {
      nav.classList.remove("js-show")
      bounce = 1

   // Or scrolling up (Show)
   } else if (original > update) {
      nav.classList.add("js-show")
      bounce = 0
   }
}


/**
 * @name pageScroll
 * @description Detects page scroll position
 * @returns {undefined} Updates page scroll position
 */
function pageScroll() {
   const
   update = window.pageYOffset,
   nh = nav.clientHeight

	// Check scroll position
	if (window.pageYOffset > nh) {
		nav.classList.add("js-fixed")
		nav.classList.add("js-time")

		// Available scroll height check (top and bottom)
		if (-1 < original && viewMax > update) {

         // call: showHide
         showHide(update)
		}

	// Or reset all at top
	} else if (0 === window.pageYOffset) {
		nav.classList.remove("js-fixed")
      nav.classList.remove("js-show")

   // Or remove transition in Nav height area
	} else {
		nav.classList.remove("js-time")
	}

	// Update scroll position
	original = update
}



//
// Export
//


/**
 * @name export
 * @description Exports this file
 * @returns {undefined}
 */
export default window.addEventListener("load", function() {
   // listen: availHeight
   window.addEventListener("resize", availHeight)
   // listen: pageScroll
   window.addEventListener("scroll", pageScroll)

   // call: pageScroll
   pageScroll()
   // call: availHeight
   availHeight()

}, { once: true })
