import { State } from 'types';


/**
 * Navbar Behavior
 */
const NAV = <HTMLElement>document.querySelector('#nav');

let state: State = {
  init: window.pageYOffset,
  navHeight: NAV.clientHeight,
  showing: NAV.classList.contains('__show'),
  get availHeight() {
    return document.documentElement.scrollHeight - window.innerHeight;
  },
};

const toggleNav = (): void => {
  const update: number = window.pageYOffset;

  if (update > state.navHeight) {
    NAV.classList.add('__fixed');
    NAV.classList.add('__time');

    if (state.init > -1 && state.availHeight > update) {
      if (update > state.init && state.showing) {
        NAV.classList.remove('__show');
        state.showing = false;

      } else if (update < state.init && !state.showing) {
        NAV.classList.add('__show');
        state.showing = true;
      }
    }

  } else if (update === 0) {
    NAV.classList.remove('__fixed');
    NAV.classList.remove('__show');

  } else {
    NAV.classList.remove('__time');
  }

  state.init = update;
};

addEventListener('scroll', toggleNav, { passive: true });
