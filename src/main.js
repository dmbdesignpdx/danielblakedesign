/**
 *  @file Main
 *  @desc Root script for danielblake.design
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
//  Global Functions
//


/**
 *  @name pageIs
 *  @global
 *  @desc Checks which page is being viewed
 *  @param {string} cls - class name
 *  @returns {boolean} Yay or nay
 *
 */
function pageIs(cls) {
   return cls === document.body.className
}


/**
 *  @name fontLoad
 *  @global
 *  @desc Listens for fonts to finish loading for intro
 *  @returns {undefined}
 *
 */
(function fontLoad() {


   /**
    *  @name animateIntro
    *  @memberof fontLoad
    *  @desc Removes and adds classes to utilize CSS transition
    *  @returns {undefined}
    *
    */
   function animateIntro() {
      const spans = document.querySelectorAll("h1 span")

      document.querySelector("body > header").classList.remove("js-intro")

      spans.forEach(span => {
         span.classList.add("js-underline")
      })
   }

   // Tries fonts.ready first
   try {
      document.fonts.ready.then(animateIntro)

   // Else wait for DOM to load
   } catch (err) {
      window.addEventListener("DOMContentLoaded", animateIntro, { once: true })
   }
})()



//
//  Invoke
//


/**
 *  @name pageLoad
 *  @global
 *  @desc Listens for page to finish to loading to invoke local functions
 *  @returns {undefined}
 *
 */
window.addEventListener("load", function pageLoad() {

   if (pageIs("home")) {


      /**
       *  @name validate
       *  @memberof pageLoad
       *  @desc Adds the "js-sub" class
       *  @returns {undefined}
       *
       */
      document.drop.send.addEventListener("click", function validate() {
         document.drop.classList.add("js-sub")
      })
   }


   /**
    *  @name arrowFade
    *  @memberof pageLoad
    *  @desc Adds or removes the "js-fade" class
    *  @returns {undefined}
    *
    */
   window.addEventListener("scroll", function arrowFade() {
      const
      icon = document.querySelector("#arrow"),
      windowHeight = Math.round(window.innerHeight * 0.33),
      windowScroll = window.scrollY

      let iconFaded = icon.classList.contains("js-fade")

      if (windowScroll > windowHeight) {

         if (!iconFaded) {
            icon.classList.add("js-fade")
         }

      } else {

         if (iconFaded) {
            icon.classList.remove("js-fade")
         }
      }
   })

   /** @external */
   navScroll()
   smoothScroll("a[href*='#']")

   // Mark and Measure
   window.performance.mark("page_loaded")
   window.performance.measure("script_loaded", "initial", "page_loaded")

}, { once: true })
