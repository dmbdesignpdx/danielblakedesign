const NAV: HTMLElement = document.querySelector('#nav');
const navHeight: number = NAV.clientHeight;

type State = {
  init: number;
  showing: boolean;
  availHeight: number;
}

let state: State = {
  init: window.pageYOffset,
  showing: NAV.classList.contains('__show'),
  get availHeight() {
    return document.querySelector('html').scrollHeight - window.innerHeight;
  },
};

/**
 * Navbar Behavior
 */
const toggleNav:
EventListener = (): void => {
  const update: number = window.pageYOffset;

  // 1.a. Check scroll position
  if (update > navHeight) {
    NAV.classList.add('__fixed');
    NAV.classList.add('__time');

    // 2. Check Available scroll height (top and bottom)
    if (state.init > -1 && state.availHeight > update) {
      // 3. Decide nav visibility
      // Scrolling down and is visible (Hide)
      if (update > state.init && state.showing) {
        NAV.classList.remove('__show');
        state.showing = false;

      // Or scrolling up and is not visible (Show)
      } else if (update < state.init && !state.showing) {
        NAV.classList.add('__show');
        state.showing = true;
      }
    }

  // 1.b. Or reset all at top
  } else if (update === 0) {
    NAV.classList.remove('__fixed');
    NAV.classList.remove('__show');

  // 1.c. Or remove transition in Nav height area
  } else {
    NAV.classList.remove('__time');
  }

  // Update scroll position
  state.init = update;
};

addEventListener('scroll', toggleNav, { passive: true });
