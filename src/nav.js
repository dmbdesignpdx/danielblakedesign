/**
 *  @file Nav
 *  @module
 *  @description Script for navigation behavior
 */



//
// Variables
//

const nav = document.querySelector("#nav")

let
original = window.pageYOffset,
bounce



//
// Functions
//


/**
 *  @name availHeight
 *  @description Finds the available view height
 *  @returns {number}
 *
 */
function availHeight() {
   return (
      document.documentElement.scrollHeight - window.innerHeight
   )
}


/**
 *  @name showHide
 *  @description Adds or removes "js-show" class
 *  @param {number} update - Last scroll position
 *  @returns {undefined}
 *
 */
function showHide(update) {

   // Scrolling down (Hide) and bottom bounce check
   if (update > original && !bounce) {
      nav.classList.remove("js-show")
      bounce = true

   // Or scrolling up (Show)
   } else if (original > update) {
      nav.classList.add("js-show")
      bounce = false
   }
}


/**
 *  @name pageScroll
 *  @description Detects page scroll position
 *  @returns {undefined}
 *
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
		if (-1 < original && availHeight() > update) {

         // Call: showHide
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
// Exports
//


/**
 *  @name navScroll
 *  @description Controls the
 *  @returns {undefined}
 *
 */
export default function navScroll() {

   // Listen: pageScroll
   window.addEventListener("scroll", pageScroll)

   // Call: pageScroll
   pageScroll()
}
