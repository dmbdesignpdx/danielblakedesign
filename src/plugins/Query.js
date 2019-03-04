// A querySelectors shorthand for DOM elements


/**
 *  Decides which element(s) to select based on a selector
 */
function $(element) {
  let query = []

  if (element === "body") query = [window.document.body]
  else if (element === "html") query = [window.document.documentElement]
  else if (element === "head") query = [window.document.head]
  else query = [...window.document.querySelectorAll(element)]

  if (query.length > 1) return query
  return query[0]
}


export default $
