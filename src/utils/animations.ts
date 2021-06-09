import gsap from 'gsap';

const fromLeftToRight = (target: HTMLElement, duration?: number): void => {
  gsap.fromTo(
    target,
    {
      x: '-=150',
      autoAlpha: 0,
    },
    {
      ease: 'power3.inOut',
      x: '0',
      autoAlpha: 1,
      duration,
    }
  );
};

const fromTopToBottom = (target: HTMLElement, duration?: number): void => {
  gsap.fromTo(
    target,
    {
      y: '-20',
      autoAlpha: 0,
    },
    {
      ease: 'power3.inOut',
      y: '0',
      autoAlpha: 1,
      duration,
      delay: 0.5,
    }
  );
};

export { fromLeftToRight, fromTopToBottom };
