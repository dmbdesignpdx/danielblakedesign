/**
 *  @file Nav
 *  @module
 *  @desc Script for navigation behavior
 *  @exports navScroll()
 */



/**
 *  @name navScroll
 *  @global
 *  @desc Controls when the Nav is visibile or hidden on scroll
 *  @returns {undefined}
 *
 */
export default function navScroll() {
   const
   nav = document.querySelector("#nav"),
   navHeight = nav.clientHeight

   let
   original = window.pageYOffset,
   availHeight = 0,
   isShowing = nav.classList.contains("js-show"),
   scrolling = false


   /**
    *  @name findHeight
    *  @desc Upates availHeight by subtracting viewport height from html height
    *  @returns {undefined}
    *
    */
   function findHeight() {
      availHeight = document.documentElement.scrollHeight - window.innerHeight
   }


   /**
    *  @name toggleNav
    *  @desc Determines whether to show or hide the Nav based on scroll
    *  @returns {undefined}
    *
    */
   function toggleNav() {
      const update = window.pageYOffset

      // 1.a. Check scroll position
      if (window.pageYOffset > navHeight) {
         nav.classList.add("js-fixed")
         nav.classList.add("js-time")

         // 2. Check Available scroll height (top and bottom)
         if (-1 < original && availHeight > update) {

            // 3. Decide nav visibility

            // Scrolling down and is visible (Hide)
            if (update > original && isShowing) {
               nav.classList.remove("js-show")
               isShowing = false

            // Or scrolling up and is not visible (Show)
            } else if (update < original && !isShowing) {
               nav.classList.add("js-show")
               isShowing = true
            }
         }

      // 1.b. Or reset all at top
      } else if (0 === window.pageYOffset) {
         nav.classList.remove("js-fixed")
         nav.classList.remove("js-show")

      // 1.c. Or remove transition in Nav height area
      } else {
         nav.classList.remove("js-time")
      }

      // Update scroll position
      original = update

      // Reset scroll
      scrolling = false
   }


   /**
    *  @name onScroll
    *  @memberof navScroll
    *  @desc Detects page scroll position
    *  @returns {undefined}
    *
    */
   addEventListener("scroll", function onScroll() {
      if (!scrolling) requestAnimationFrame(toggleNav)
      scrolling = true
   }, { passive: true })

   findHeight()
   addEventListener("resize", findHeight, { passive: true })
}
