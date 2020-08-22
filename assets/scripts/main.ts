const smoothScroll = require('smooth-scroll');

import navBehavior from './nav';
import scrollIntoView from './scroll';


/**
 * DOM Loaded
 */
addEventListener('load', (): void => {
  const ICON = <SVGSVGElement>document.querySelector('.Arrow');
  const LANG = <HTMLSelectElement>document.querySelector('#lang');
  const NAV = <HTMLElement>document.querySelector('#nav');
  const prefersRM: boolean = window.matchMedia('(prefers-reduced-motion)').matches;

  // Adds or removes the '__fade' class
  const arrowFade = (): void => {
    if (ICON === null) return;

    const breakpoint: number = Math.round(window.innerHeight * 0.33);

    if (window.scrollY > breakpoint) {
      if (!ICON.classList.contains('__fade')) {
        ICON.classList.add('__fade');
      }
    } else {
      if (ICON.classList.contains('__fade')) {
        ICON.classList.remove('__fade');
      }
    }
  };

  // Changes location based on language selection
  if (LANG) {
    LANG.addEventListener('change', ({ target }: Event): void => {
      window.location.href = (target as HTMLSelectElement).value;
    });
  }

  if (!prefersRM) {
    scrollIntoView();
    smoothScroll('a[href*=\'#\']');
  }

  navBehavior(NAV);

  addEventListener('scroll', arrowFade, { passive: true });
}, { once: true });
