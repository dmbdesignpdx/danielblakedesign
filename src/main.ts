// SmoothScroll needs a require
const smoothScroll = require(`./plugins/smooth-scroll`);

import navScroll from './nav';
import scrollIntoView from './scroll';


addEventListener(`DOMContentLoaded`, (): void => {
  const ICON: SVGSVGElement = document.querySelector(`.Arrow`);
  const FORM: HTMLFormElement = document.querySelector(`#form`);
  const LANG: HTMLSelectElement = document.querySelector(`#lang`);


  /**
   * Adds the '__sub' class if form exists
   */
  if (FORM) {
    FORM.send.addEventListener(`click`, (): void => {
      FORM.classList.add(`__sub`);
    })
  }


  /**
   * Updates breakpoint for arrow
   */
  const breakpoint:
  Function = (): number => Math.round(window.innerHeight * 0.33);


  /**
   * Adds or removes the '__fade' class
  */
  const arrowFade:
  EventListener = (): void => {
    if (window.scrollY > breakpoint()) {
      if (!ICON.classList.contains(`__fade`)) {
        ICON.classList.add(`__fade`);
      }
    } else {
      if (ICON.classList.contains(`__fade`)) {
        ICON.classList.remove(`__fade`);
      }
    }
  }


  /**
   * Changes location based on language selection
   */
  LANG.addEventListener(`change`, (event: InputEvent) => {
    const target = event.target as HTMLSelectElement;
    window.location.href = target.value;
  });


  addEventListener(`scroll`, arrowFade, { passive: true });

  scrollIntoView();
  navScroll();
  smoothScroll(`a[href*='#']`);

}, { once: true });
