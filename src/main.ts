const smoothScroll = require('smooth-scroll');

import './nav';
import scrollIntoView from './scroll';


/**
 * DOM Loaded
 */
addEventListener('DOMContentLoaded', (): void => {
  const ICON: SVGSVGElement = document.querySelector('.Arrow');
  const FORM: HTMLFormElement = document.querySelector('#form');
  const LANG: HTMLSelectElement = document.querySelector('#lang');
  const prefersRM: boolean = window.matchMedia('(prefers-reduced-motion)').matches;


  // Adds the '__sub' class if form exists
  if (FORM) {
    FORM.send.addEventListener('click', (): void => {
      FORM.classList.add('__sub');
    });
  }

  // Updates breakpoint for arrow
  const breakpoint:
  Function = (): number => Math.round(window.innerHeight * 0.33);

  // Adds or removes the '__fade' class
  const arrowFade:
  EventListener = (): void => {
    if (window.scrollY > breakpoint()) {
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
  LANG.addEventListener('change', (event: InputEvent) => {
    const target = event.target as HTMLSelectElement;
    window.location.href = target.value;
  });

  if (!prefersRM) {
    scrollIntoView();
    smoothScroll('a[href*=\'#\']');
  }

  addEventListener('scroll', arrowFade, { passive: true });
}, { once: true });
