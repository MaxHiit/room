import { ref } from 'vue';
import gsap from 'gsap';

const imageContainerRef = ref();
const imageRef = ref();

const textRef = ref();
const descRef = ref();

const btnTextMaskRef = ref();
const btnArrowRef = ref();

const tlAnimation = gsap.timeline({
  defaults: { duration: 1, ease: 'power4.out' }
});
const tlAnimation2 = gsap.timeline({
  defaults: { duration: 1, ease: 'power4.out' }
});

const imageAnimation = (imageMaskRef) => {
  return tlAnimation
    .to(imageContainerRef.value, { css: { visibility: 'visible' } })
    .to(imageMaskRef, { width: '0%', ease: 'power1.inOut' }, 0)
    .from(imageRef.value, { scale: 1.6, ease: 'power1.inOut', delay: -1.4 });
};

const textAnimation = () => {
  return tlAnimation
    .fromTo(
      textRef.value,
      { y: '20vh' },
      {
        y: 0,
        ease: 'power1.out'
      }
    )
    .fromTo(
      descRef.value,
      { y: '20px', opacity: '0' },
      { duration: 0.5, y: 0, opacity: '1', ease: 'power1.inOut' },
      '<25%'
    );
};

const btnAnimation = () => {
  return tlAnimation2
    .fromTo(
      btnArrowRef.value,
      { x: '-100px', opacity: 0 },
      { duration: 1, x: 0, opacity: 1, ease: 'power1.inOut' }
    )
    .from(btnTextMaskRef.value, {
      opacity: 0,
      ease: 'power1.inOut'
    });
};

const useAnimation = () => {
  return {
    imageContainerRef,
    imageRef,
    textRef,
    descRef,
    btnTextMaskRef,
    btnArrowRef,
    imageAnimation,
    textAnimation,
    btnAnimation,
    tlAnimation,
    tlAnimation2
  };
};

export default useAnimation;
