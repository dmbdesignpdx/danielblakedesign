// Mark
performance.mark("initial")

// SmoothScroll needs a require
const smoothScroll = require("./plugins/smooth-scroll")

import navScroll from "./nav"
import $ from "./plugins/Query"


/**
 * Listens for page to finish loading to invoke local functions
 */
window.addEventListener("load", () => {
  const ICON = $("#arrow")
  const FORM = document.drop
  let breakPoint = 0
  let scrolling = false


  /**
   * Adds the "js-sub" class if form exists
   */
  if (FORM) {
    FORM.send.addEventListener("click", () => {
      FORM.classList.add("js-sub")
    })
  }


  /**
   * Updates breakpoint to a third of the window's height
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
   * Adds or removes the "js-fade" class
   */
  function arrowFade() {
    if (window.scrollY > breakPoint) {
      if (!ICON.classList.contains("js-fade")) {
        ICON.classList.add("js-fade")
      }
    } else {
      if (ICON.classList.contains("js-fade")) {
        ICON.classList.remove("js-fade")
      }
    }

    scrolling = false
  }


  /**
   * Requests animation frames for arrowFade
   */
  window.addEventListener("scroll", () => {
    if (!scrolling) window.requestAnimationFrame(arrowFade)
    scrolling = true
  }, { passive: true })

  navScroll()
  smoothScroll("a[href*='#']")

  // Mark and Measure
  performance.mark("page_loaded")
  performance.measure("script_loaded", "initial", "page_loaded")
}, { once: true })
