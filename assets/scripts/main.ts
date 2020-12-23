import 'nav';
import lazyLoad from './lazy';
import SmoothScroll from 'smooth-scroll';


/**
 * DOM Loaded
 */
const ICON = <SVGSVGElement>document.querySelector('.Arrow');
const LANG = <HTMLSelectElement>document.querySelector('#lang');
const prefersRM: boolean = window.matchMedia('(prefers-reduced-motion)').matches;

// Adds or removes the '__fade' class
const arrowFade = (): void => {
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
LANG.addEventListener('change', ({ target }: Event): void => {
  window.location.href = (target as HTMLSelectElement).value;
});

if (!prefersRM) {
  const smooth = new SmoothScroll('a[href*=\'#\']');

  lazyLoad();
  smooth.init;
}

addEventListener('scroll', arrowFade, { passive: true });
