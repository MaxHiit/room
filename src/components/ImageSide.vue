<template>
  <div class="image-wrapper image-side" ref="imageContainerRef">
    <div class="image-mask" ref="imageMaskRef">
      <img
        v-if="side == 'left'"
        src="../assets/images/image-about-dark.jpg"
        alt=""
        :ref="imageRef"
      />
      <img
        v-if="side == 'right'"
        src="../assets/images/image-about-light.jpg"
        alt=""
        :ref="imageRef"
      />
    </div>
  </div>
</template>

<script>
import useAnimation from '../composables/useAnimation.js';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

export default {
  name: 'ImageLeft',
  props: {
    side: String
  },
  setup() {
    let imageMaskRef = CSSRulePlugin.getRule('.image-mask:after');
    const { imageContainerRef, imageRef, imageSideAnimation } = useAnimation();

    return {
      imageMaskRef,
      imageContainerRef,
      imageRef
    };
  }
};
</script>

<style scoped>
.image-side {
  width: 30%;
  height: 100%;
}
</style>
