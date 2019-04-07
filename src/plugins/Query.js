/**
 * Decides which element(s) to select based on a selector
 * @param {string} el - Selector to query
 * @returns {(array|element)} Either a single element or array of elements
 *
 */
export default el => {
  el = el === `body`
  ? [document.body]
  : el === `html`
  ? [document.documentElement]
  : el === `head`
  ? [document.head]
  : [...document.querySelectorAll(el)]

  return 1 < el.length ? el : el[0]
}
