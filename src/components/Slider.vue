<script>
import { ref, reactive, onMounted, onUpdated } from 'vue';
import { sliderData } from '../utils/data';
import useAnimation from '../composables/useAnimation.js';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

export default {
  setup() {
    const {
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
    } = useAnimation();

    let imageMaskRef = CSSRulePlugin.getRule('.image-mask:after');

    let currentIndex = ref(0);
    const currentSlide = reactive({
      imageSrc: sliderData[currentIndex.value].imageSrc,
      title: sliderData[currentIndex.value].title,
      desc: sliderData[currentIndex.value].desc
    });

    const restart = () => {
      tlAnimation.restart();
      tlAnimation2.restart();
    };

    const updatedCurrentSlide = (index) => {
      currentSlide.imageSrc = sliderData[index.value].imageSrc;
      currentSlide.title = sliderData[index.value].title;
      currentSlide.desc = sliderData[index.value].desc;
    };

    const handlePrevSlide = () => {
      currentIndex.value--;
      if (currentIndex.value < 0) {
        currentIndex.value = sliderData.length - 1;
      }
      updatedCurrentSlide(currentIndex);
    };

    const handleNextSlide = () => {
      currentIndex.value++;
      if (currentIndex.value > sliderData.length - 1) {
        currentIndex.value = 0;
      }
      updatedCurrentSlide(currentIndex);
    };

    onMounted(() => {
      imageAnimation(imageMaskRef);
      textAnimation();
      btnAnimation();
    });

    onUpdated(() => {
      restart();
    });

    return {
      imageContainerRef,
      imageMaskRef,
      imageRef,
      textRef,
      descRef,
      btnArrowRef,
      btnTextMaskRef,
      currentIndex,
      currentSlide,
      sliderData,
      handlePrevSlide,
      handleNextSlide
    };
  }
};
</script>

<template>
  <section class="section-slider slider">
    <div class="slider-image-wrapper" ref="imageContainerRef">
      <div class="image-mask" ref="imageMaskRef">
        <img
          class="slider-image"
          alt=""
          :ref="imageRef"
          :src="currentSlide.imageSrc"
        />
      </div>
    </div>

    <div class="slider-content-wrapper">
      <div class="slider-content">
        <div class="slider-title-mask">
          <h1 class="slider-title" ref="textRef">{{ currentSlide.title }}</h1>
        </div>
        <p ref="descRef">
          {{ currentSlide.desc }}
        </p>
        <a href="#" class="btn">
          <p class="btn-text" ref="btnTextMaskRef">Shop now</p>
          <div class="btn-image" ref="btnArrowRef">
            <svg width="50" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </a>
      </div>
      <div class="slider-btn-wrapper">
        <button class="slider-btn slider-btn--prev" @click="handlePrevSlide">
          <img src="../assets/images/icon-angle-left.svg" alt="" />
        </button>
        <button class="slider-btn slider-btn--right" @click="handleNextSlide">
          <img src="../assets/images/icon-angle-right.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.section-slider {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 70vh;
}

.slider-image-wrapper {
  max-width: 55%;
  width: 55%;
  height: 100%;
  position: relative;
}

.image-mask {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.image-mask:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  right: 0;
}

.slider-content-wrapper {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.slider-content {
  padding: 0 5.7rem;
  margin: auto;
}

.slider-title {
  font-size: 3.7vw;
  font-weight: 700;
  position: absolute;
}

.slider-title-mask {
  overflow: hidden;
  position: relative;
  height: 20vh;
  padding-bottom: 1rem;
}

.slider-btn-wrapper {
  margin-top: auto;
  display: flex;
  align-items: center;
}

.slider-btn {
  background: var(--Black);
  padding: 1.5rem 2rem;
  outline: none;
  border: none;
}

.slider-btn:hover {
  background: var(--VeryDarkGray);
}

.slider-length {
  display: inline-block;
  margin-left: auto;
  padding-right: 1rem;
  font-size: 4rem;
}
</style>
