// SmoothScroll needs a require
const smoothScroll = require(`./plugins/smooth-scroll`);

import {
  IO,
  IOE,
  IOC,
  IOI
} from './types';
import navScroll from './nav';


addEventListener(`DOMContentLoaded`, (): void => {
  const ICON: SVGSVGElement = document.querySelector(`.Arrow`);
  const FORM: HTMLFormElement = document.querySelector(`#form`);
  const LANG: HTMLSelectElement = document.querySelector(`#lang`);

  const prefersRM: boolean = window.matchMedia('(prefers-reduced-motion)').matches;
  const hasIO: boolean = 'IntersectionObserver' in window;

  /**
   * Scroll Into View
   */
  if (hasIO && !prefersRM) {
    const collection: Array<Element> = [
      ...document.querySelectorAll(`.Thumb`),
    ];


    const callback:
    IOC = (entries: Array<IOE>): void => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add(`play`);
          observer.unobserve(entry.target);
        }
      });
    }

    const settings: IOI = {
      threshold: 0.5,
    }
    const observer: IO = new IntersectionObserver(callback, settings);

    collection.forEach((item: Element) => {
      item.classList.add(`animation`);
      observer.observe(item);
    });
  }

  /**
   * Adds the '__sub' class if form exists
   */
  if (FORM) {
    FORM.send.addEventListener(`click`, () => {
      FORM.classList.add(`__sub`);
    })
  }


  /**
   * Updates breakpoint for arrow
   */
  const breakpoint = (): number => Math.round(window.innerHeight * 0.33);


  /**
   * Adds or removes the '__fade' class
  */
  const arrowFade = (): void => {
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
  // interface Test {
  //   target: HTMLSelectElement;
  // }
  LANG.addEventListener(`change`, (event: InputEvent) => {
    const target = event.target as HTMLSelectElement;
    window.location.href = target.value;
  });


  addEventListener(`scroll`, arrowFade, { passive: true });

  navScroll();
  smoothScroll(`a[href*='#']`);

}, { once: true });
