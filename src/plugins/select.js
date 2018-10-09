"use strict"

function $(el) {
   el = "window" === el ? [window] : "body" === el ? [document.body] : "html" === el ? [document.documentElement] : "head" === el ? [document.head] : [].slice.call(document.querySelectorAll(el))
   return 1 < el.length ? el : el[0]
}

function addTo(el, evt, func, opt = null) {
   !Array.isArray($(el)) && (el = [$(el)])
   el.map(elm => {elm.addEventListener(evt, func, opt)})
}

function rmvFrom(el, evt, func, opt = null) {
   !Array.isArray($(el)) && (el = [$(el)])
   el.map(elm => {elm.removeEventListener(evt, func, opt)})
}

export { $, addTo, rmvFrom }
