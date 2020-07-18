const smoothScroll = require('smooth-scroll');

import navBehavior from './nav';
import scrollIntoView from './scroll';


/**
 * DOM Loaded
 */
addEventListener('DOMContentLoaded', (): void => {
  const ICON: SVGSVGElement | null = document.querySelector('.Arrow');
  const LANG: HTMLSelectElement | null = document.querySelector('#lang');
  const NAV: HTMLElement | null = document.querySelector('#nav');
  const prefersRM: boolean = window.matchMedia('(prefers-reduced-motion)').matches;

  if (NAV) {
    navBehavior(NAV);
  }

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

  addEventListener('scroll', arrowFade, { passive: true });
}, { once: true });
