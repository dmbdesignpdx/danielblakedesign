/**
 *  @file Query
 *  @module
 *  @desc A querySelectors shorthand for DOM elements
 *  @exports $
 */



/**
 *  @name $
 *  @export
 *  @desc Decides which element(s) to select based on a selector
 *  @param {String} el - Selector to be used
 *  @returns {Array, Object} An array of elements or a single element
 *
 */
function $(el) {
  let query = []

  if (el === "body") query = [window.document.body]
  else if (el === "html") query = [window.document.documentElement]
  else if (el === "head") query = [window.document.head]
  else query = [...window.document.querySelectorAll(el)]

  if (query.length > 1) return query
  return query[0]
}



//
//  Export(s)
//

export default $
