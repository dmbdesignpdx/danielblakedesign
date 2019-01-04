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
import $ from "./plugins/Query"



const drop = document.drop


//
//  Global Function(s)
//


/**
 *  @name isOnline
 *  @global
 *  @desc Detects if the user is offline, disables form button if so
 *  @returns {undefined}
 *
 */
function isOnline() {
  const btn = drop.send

  if (navigator.onLine) {
    btn.disabled = false
    btn.innerText = "Send"
  } else {
    btn.disabled = true
    btn.innerText = "Offline"
  }
}



//
//  Invoke
//


/**
 *  @name pageLoad
 *  @global
 *  @desc Listens for page to finish to loading to invoke local functions     |
 *  @returns {undefined}
 *
 */
window.addEventListener("load", () => {
  const icon = $("#arrow")
  let breakPoint = 0
  let scrolling = false

  if (drop) {
    /**
     *  @name validate
     *  @memberof pageLoad
     *  @desc Adds the "js-sub" class
     *  @returns {undefined}
     *
     */
    drop.send.addEventListener("click", () => {
      drop.classList.add("js-sub")
    })

    window.addEventListener("online", isOnline)
    window.addEventListener("offline", isOnline)
    isOnline()
  }


  /**
   *  @name thirdOfWindow
   *  @memberof pageLoad
   *  @desc Updates breakpoint to a third of the window's height
   *  @returns {undefined}
   *
   */
  (function thirdOfWindow() {
    // Add a listener for itself just once
    if (breakPoint === 0) { 
      window.addEventListener("resize", thirdOfWindow, { passive: true })
    }

    // Update
    breakPoint = Math.round(window.innerHeight * 0.33)
  })()


  /**
   *  @name arrowFade
   *  @memberof pageLoad
   *  @desc Adds or removes the "js-fade" class
   *  @returns {undefined}
   *
   */
  function arrowFade() {
    if (window.scrollY > breakPoint) {
      if (!icon.classList.contains("js-fade")) {
        icon.classList.add("js-fade")
      }
    } else {
      if (icon.classList.contains("js-fade")) {
        icon.classList.remove("js-fade")
      }
    }

    scrolling = false
  }

  window.addEventListener("scroll", () => {
    if (!scrolling) window.requestAnimationFrame(arrowFade)
    scrolling = true
  }, { passive: true })


  // @external
  navScroll()
  smoothScroll("a[href*='#']")

  // Mark and Measure
  performance.mark("page_loaded")
  performance.measure("script_loaded", "initial", "page_loaded")
}, { once: true })
