/**
 *  @file Main
 *  @description Root script for danielblake.design
 */



// Mark
window.performance.mark("initial")



//
//  Imports
//

// Vendor
const smoothScroll = require("./plugins/smooth-scroll")

// Ours
import navScroll from "./nav"



//
//  Variables
//

const icon = document.querySelector("body > header svg")

let check



//
//  Functions
//


/**
 *  @name page
 *  @description Checks which page is being viewed
 *  @param {string} cls - class name
 *  @returns {boolean}
 *
 */
function page(cls) {
   return cls === document.body.className
}


/**
 *  @name underline
 *  @description Adds the class "js-underline" to the h1 span
 *  @returns {undefined}
 *
 */
function underline() {
   const span = document.querySelectorAll("h1 span")

   span.forEach(item => {
      item.classList.add("js-underline")
   })
}


/**
 *  @name arrowFade
 *  @description Adds or removes the "js-fade" class
 *  @returns {undefined}
 *
 */
function arrowFade() {
   const
   wh = Math.round(window.innerHeight * 0.33),
   ws = window.scrollY

	if (ws > wh && !check) {
      icon.classList.add("js-fade")
      check = true

	} else if (ws < wh && check) {
      icon.classList.remove("js-fade")
		check = false
   }
}


/**
 *  @name validate
 *  @description Adds the "js-sub" class
 *  @returns {undefined}
 *
 */
function validate() {
   document.drop.classList.add("js-sub")
}



//
//  Invoke
//


/**
 *  @name pageLoad
 *  @description Listens for page to finish loading
 *  @returns {undefined} Runs several tasks when page fully loads
 *
 */
window.addEventListener("load", function pageLoad() {

   // Listen: arrowFade
   window.addEventListener("scroll", arrowFade)

   // Listen: validate
   if (page("home")) {
      document.drop.send.addEventListener("click", validate)
   }

   // Call: navScroll
   navScroll()

   // Call: underline
   underline()

   // Mark and Measure
   window.performance.mark("page_loaded")
   window.performance.measure("script_loaded", "initial", "page_loaded")

}, { once: true })

// Call: smoothScroll
smoothScroll("a[href*='#']")
