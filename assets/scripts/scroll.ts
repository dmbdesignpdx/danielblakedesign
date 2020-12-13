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
  const threshold = [0, 0.7];
  let observer: IO;

  const animate = (target: Element): void => {
    const preview = <HTMLAnchorElement>target.querySelector('.--primary');

    target.classList.add('play');
    addPrefetch(preview.href);
    observer.unobserve(target);
  };

  if ('IntersectionObserver' in window) {
    const collection =
      <Array<HTMLElement>>[...document.querySelectorAll('.Thumb')];

    const callback:
    IOC = (entries: Array<IOE>): void => {
      const [load, play] = threshold;

      for (const { target, intersectionRatio } of entries) {
        if (intersectionRatio > load) {
          const image = <HTMLImageElement>target.querySelector('img');
          const sources =
            <Array<HTMLSourceElement>>[...target.querySelectorAll('source')];

          if (image.src === '') {
            image.setAttribute('src', image.dataset.src as string);

            sources.forEach(source => {
              source.setAttribute('srcset', source.dataset.srcset as string);
            });
          }
        }

        if (intersectionRatio > play) {
          requestAnimationFrame((): void => animate(target));
        }
      }
    };

    const settings: IOI = { threshold, rootMargin: '200px' };

    observer = new IntersectionObserver(callback, settings);

    collection.forEach((item: Element): void => {
      item.classList.add('animation');
      observer.observe(item);
    });
  }
};
