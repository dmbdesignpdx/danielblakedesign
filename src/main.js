/**
 * @file Main script for danielblake.design
 */



//
// Imports
//


// Vendor
const smoothScroll = require("./plugins/smooth-scroll")

// Ours
import "./nav"



//
// Variables
//


const icon = document.querySelector("body > header svg")

let check = 0



//
// Functions
//


/**
 * @name page
 * @description Checks which page is being viewed
 * @param {string} cls - class name to check
 * @returns {boolean} Yea or Nay
 */
function page(cls) {
   return cls === document.body.className
}


/**
 * @name underline
 * @description Draws a line under the span(s) in the h1
 * @returns {undefined} Adds the class "js-underline"
 */
function underline() {
   const span = document.querySelectorAll("h1 span")

   span.forEach(item => {
      item.classList.add("js-underline")
   })
}


/**
 * @name arrowFade
 * @description Fades the arrow as the page scrolls down
 * @returns {undefined} Adds or removes the "js-fade" class
 */
function arrowFade() {
   const
   wh = Math.round(window.innerHeight * 0.33),
   ws = window.scrollY

	if (ws > wh && !check) {
		icon.classList.add("js-fade")
		check = 1
	} else if (ws < wh && check) {
		icon.classList.remove("js-fade")
		check = 0
	}
}


/**
 * @name validate
 * @description Validates the form
 * @returns {undefined} Adds the "js-sub" class
 */
function validate() {
   document.drop.classList.add("js-sub")
}



//
// Invoke
//


window.addEventListener("load", () => {
   // arrowFade
   window.addEventListener("scroll", arrowFade)

   // validate
   if (page("home")) {
      document.drop.send.addEventListener("click", validate)
   }

   // underline
   underline()
}, { once: true })

smoothScroll("a[href*='#']")
