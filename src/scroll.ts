import {
  IO,
  IOE,
  IOC,
  IOI,
} from './types';


/**
 * Scroll Into View
 */
const scrollIntoView:
Function = (): void => {
  const hasIO: boolean = 'IntersectionObserver' in window;
  const threshold: number = 0.7;
  
  if (hasIO) {
    const collection: Array<Element> = [
      ...document.querySelectorAll(`.Thumb`),
    ];
  
    // IO Callback
    const callback:
    IOC = (entries: Array<IOE>): void => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > threshold) {
          entry.target.classList.add(`play`);
          observer.unobserve(entry.target);
        }
      });
    }
  
    // IO Settings
    const settings: IOI = {
      threshold,
    }
    
    // IO
    const observer: IO = new IntersectionObserver(callback, settings);
  
    collection.forEach((item: Element): void => {
      item.classList.add(`animation`);
      observer.observe(item);
    });
  }
}


export default scrollIntoView;
