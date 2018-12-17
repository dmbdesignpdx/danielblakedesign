/**
 *  @file Main
 *  @desc Root script for danielblake.design
 */



// Mark
performance.mark("initial")



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
 *  @name isOnline
 *  @global
 *  @desc Detects if the user is offline, disables form button if so
 *  @returns {undefined}
 *
 */
function isOnline() {
   const btn = document.drop.send

   if (!navigator.onLine) {
      btn.disabled = true
      btn.innerText = "Offline"
   
   } else {
      btn.disabled = false
      btn.innerText = "Send"
   }
}



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
addEventListener("load", function pageLoad() {
   const icon = document.querySelector("#arrow")

   let breakPoint = 0

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
    *  @name thirdOfWindow
    *  @memberof pageLoad
    *  @desc Updates breakpoint to a third of the window's height
    *  @returns {undefined}
    *
    */
   !function thirdOfWindow() {
      
      // Add a listener for itself just once
      if (0 === breakPoint) addEventListener("resize", thirdOfWindow)
      
      // Update
      breakPoint = Math.round(window.innerHeight * 0.33)
   }()
   
   
   /**
    *  @name arrowFade
    *  @memberof pageLoad
    *  @desc Adds or removes the "js-fade" class
    *  @returns {undefined}
    *
    */
   addEventListener("scroll", function arrowFade() {
      const windowScroll = window.scrollY

      if (windowScroll > breakPoint) {

         if (!icon.classList.contains("js-fade")) {
            icon.classList.add("js-fade")
         }

      } else {

         if (icon.classList.contains("js-fade")) {
            icon.classList.remove("js-fade")
         }
      }
   })
   

   /** @external */
   navScroll()
   smoothScroll("a[href*='#']")

   // Mark and Measure
   performance.mark("page_loaded")
   performance.measure("script_loaded", "initial", "page_loaded")

}, { once: true })

addEventListener("online", isOnline)
addEventListener("offline", isOnline)
isOnline()
