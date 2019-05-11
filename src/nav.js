import $ from './plugins/Query'


/**
 * Controls when the Nav is visibile or hidden on scroll
 * @returns {undefined}
 *
 */
const navScroll = () => {
  const NAV = $(`.Nav`)
  const navHeight = NAV.clientHeight
  let original = window.pageYOffset
  let isShowing = NAV.classList.contains(`__show`)
  let scrolling = false


  /**
   * Upates availHeight by subtracting viewport height from html height
   * @returns {number} Height of viewable html
   *
   */
  const availHeight = () => $(`html`).scrollHeight - window.innerHeight


  /**
   * Determines whether to show or hide the Nav based on scroll
   * @returns {undefined}
   *
   */
  const toggleNav = () => {
    const update = window.pageYOffset

    // 1.a. Check scroll position
    if (update > navHeight) {
      NAV.classList.add(`__fixed`)
      NAV.classList.add(`__time`)

      // 2. Check Available scroll height (top and bottom)
      if (original > -1 && availHeight() > update) {
        // 3. Decide nav visibility
        // Scrolling down and is visible (Hide)
        if (update > original && isShowing) {
          NAV.classList.remove(`__show`)
          isShowing = false

        // Or scrolling up and is not visible (Show)
        } else if (update < original && !isShowing) {
          NAV.classList.add(`__show`)
          isShowing = true
        }
      }

    // 1.b. Or reset all at top
    } else if (update === 0) {
      NAV.classList.remove(`__fixed`)
      NAV.classList.remove(`__show`)

    // 1.c. Or remove transition in Nav height area
    } else {
      NAV.classList.remove(`__time`)
    }

    // Update scroll position
    original = update

    // Reset scroll
    scrolling = false
  }


  window.addEventListener(`scroll`, () => {
    if (!scrolling) window.requestAnimationFrame(toggleNav)
    scrolling = true
  }, { passive: true })
}


export default navScroll
