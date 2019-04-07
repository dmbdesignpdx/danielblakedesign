// Mark
performance.mark(`initial`)

// SmoothScroll needs a require
const smoothScroll = require(`./plugins/smooth-scroll`)

import $ from './plugins/Query'
import navScroll from './nav'


window.addEventListener(`load`, () => {
  const ICON = $(`#arrow`)
  const FORM = document.drop
  let scrolling = false

  /**
   * Adds the 'js-sub' class if form exists
   */
  if (FORM) {
    FORM.send.addEventListener(`click`, () => {
      FORM.classList.add(`js-sub`)
    })
  }


  /**
   * Updates breakpoint for arrow
   * @returns {number} Third of the window's height
   *
   */
  const breakpoint = () => Math.round(window.innerHeight * 0.33)


  /**
   * Adds or removes the 'js-fade' class
   * @returns {undefined}
   *
  */
  const arrowFade = () => {
    if (window.scrollY > breakpoint()) {
      if (!ICON.classList.contains(`js-fade`)) {
        ICON.classList.add(`js-fade`)
      }
    } else {
      if (ICON.classList.contains(`js-fade`)) {
        ICON.classList.remove(`js-fade`)
      }
    }

    scrolling = false
  }


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
