import {
  IO,
  IOE,
  IOC,
  IOI,
} from './types';


const addPrefetch = (href: string): void => {
  const link = document.createElement('link');

  link.setAttribute('rel', 'prefetch');
  link.setAttribute('href', href);
  link.setAttribute('as', 'document');

  document.head.appendChild(link);
};

/**
 * Scroll Into View
 */
export default (): void => {
  const hasIO: boolean = 'IntersectionObserver' in window;
  const threshold = 0.7;
  let observer: IO;

  if (hasIO) {
    const collection: Array<Element> = [...document.querySelectorAll('.Thumb')];

    const callback:
    IOC = (entries: Array<IOE>): void => {
      entries.forEach(({ target, intersectionRatio }) => {
        if (intersectionRatio > threshold) {
          const preview = <HTMLAnchorElement>target.querySelector('.--primary');

          target.classList.add('play');
          addPrefetch(preview.href);

          observer.unobserve(target);
        }
      });
    };

    const settings: IOI = { threshold };

    observer = new IntersectionObserver(callback, settings);

    collection.forEach((item: Element): void => {
      item.classList.add('animation');
      observer.observe(item);
    });
  }
};
