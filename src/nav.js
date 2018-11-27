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
   const nav = document.querySelector("#nav")

   let original = window.pageYOffset


   /**
    *  @name pageScroll
    *  @memberof navScroll
    *  @desc Detects page scroll position
    *  @returns {undefined}
    *
    */
   window.addEventListener("scroll", function pageScroll() {
      const
      update = window.pageYOffset,
      navHeight = nav.clientHeight

      let
      availHeight = document.documentElement.scrollHeight - window.innerHeight,
      navShowing = nav.classList.contains("js-show")

      // 1.a. Check scroll position
      if (window.pageYOffset > navHeight) {
         nav.classList.add("js-fixed")
         nav.classList.add("js-time")

         // 2. Check Available scroll height (top and bottom)
         if (-1 < original && availHeight > update) {

            // 3. Decide nav visibility
            
            // Scrolling down (Hide)
            if (update > original) {

               if (navShowing) {
                  nav.classList.remove("js-show")
               }

            // Or scrolling up (Show)
            } else {

               if (!navShowing) {
                  nav.classList.add("js-show")
               }
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
   })
}
