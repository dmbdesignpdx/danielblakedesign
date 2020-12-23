import {
  IO,
  IOE,
  IOC,
  IOI,
} from './types';


const onLoad = (target: Element): void => {
  const prefetch = <HTMLAnchorElement>target.querySelector('.lazy-prefetch');
  const image = <HTMLImageElement>target.querySelector('img');
  const sources =
    <Array<HTMLSourceElement>>[...target.querySelectorAll('source')];

  if (image.src === '') {
    image.setAttribute('src', image.dataset.src as string);

    sources.forEach(source => {
      source.setAttribute('srcset', source.dataset.srcset as string);
    });
  }

  if (prefetch) {
    const link = document.createElement('link');

    link.setAttribute('rel', 'prefetch');
    link.setAttribute('href', prefetch.href);
    link.setAttribute('as', 'document');

    document.head.appendChild(link);
  }
};

const onPlay = (target: Element, observer: IO): void => {
  target.classList.add('lazy-play');
  observer.unobserve(target);
};

const lazy = (): void => {
  const settings: IOI = {
    threshold: [0, 0.7],
    rootMargin: '200px',
  };
  const collection =
    <Array<HTMLElement>>[...document.querySelectorAll('.lazy-load')];

  let observer: IO;

  if ('IntersectionObserver' in window) {
    const callback: IOC = (entries: Array<IOE>) => {
      const [load, play] = settings.threshold as Array<number>;

      entries.forEach(({ target, intersectionRatio }) => {
        if (intersectionRatio > load) onLoad(target);

        if (intersectionRatio > play) {
          requestAnimationFrame((): void => onPlay(target, observer));
        }
      });
    };

    observer = new IntersectionObserver(callback, settings);

    collection.forEach((item: Element): void => {
      item.classList.add('lazy-animate');
      observer.observe(item);
    });
  } else {
    collection.forEach(target => {
      onLoad(target);
    });
  }
};

export default lazy;
