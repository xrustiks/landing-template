gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo('.hero-section', { opacity: 1 }, { 
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: '0%',
      end: '70%',
      scrub: true,
    }
  })

  /* Animation for left gallery items */
  const itemsL = document.querySelectorAll('.gallery__left .gallery__item');

  itemsL.forEach(item => {
    gsap.fromTo(item, { x: -60, opacity: 0, scale: 0.9 }, {
      opacity: 1, x: 0, scale: 1,
      scrollTrigger: {
        trigger: item,
        scrub: true,
      }
    })
  })

  /* Animation for right gallery items */
  const itemsR = document.querySelectorAll('.gallery__right .gallery__item');

  itemsR.forEach(item => {
    gsap.fromTo(item, { x: 60, opacity: 0, scale: 0.9 }, {
      opacity: 1, x: 0, scale: 1,
      scrollTrigger: {
        trigger: item,
        scrub: true,
      }
    })
  })
}