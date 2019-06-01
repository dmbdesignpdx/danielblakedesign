// Mark
performance.mark(`initial`)

// SmoothScroll needs a require
const smoothScroll = require(`./plugins/smooth-scroll`)

import $ from './plugins/Query'
import navScroll from './nav'


window.addEventListener(`load`, () => {
  const ICON = $(`.Arrow`)
  const FORM = document.drop
  const LANG = $(`#lang`)
  let scrolling = false

  /**
   * Adds the '__sub' class if form exists
   */
  if (FORM) {
    FORM.send.addEventListener(`click`, () => {
      FORM.classList.add(`__sub`)
    })
  }


  /**
   * Updates breakpoint for arrow
   * @returns {number} Third of the window's height
   *
   */
  const breakpoint = () => Math.round(window.innerHeight * 0.33)


  /**
   * Adds or removes the '__fade' class
   * @returns {undefined}
   *
  */
  const arrowFade = () => {
    if (window.scrollY > breakpoint()) {
      if (!ICON.classList.contains(`__fade`)) {
        ICON.classList.add(`__fade`)
      }
    } else {
      if (ICON.classList.contains(`__fade`)) {
        ICON.classList.remove(`__fade`)
      }
    }

    scrolling = false
  }


  /**
   * Changes location based on language selection
   * @returns {undefined}
   *
   */
  LANG.addEventListener(`change`, event => {
    window.location = event.target.value
  })


  window.addEventListener(`scroll`, () => {
    if (!scrolling) window.requestAnimationFrame(arrowFade)
    scrolling = true
  }, { passive: true })

  navScroll()
  smoothScroll(`a[href*='#']`)

  // Mark and Measure
  performance.mark(`page_loaded`)
  performance.measure(`script_loaded`, `initial`, `page_loaded`)
}, { once: true })
