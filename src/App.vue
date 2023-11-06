<script setup>
import Navbar from './components/Navbar.vue';
import Slider from './components/Slider.vue';
import ImageSide from './components/ImageSide.vue';

import './styles/style.css';
</script>

<template>
  <Navbar />
  <Slider />
  <section class="section-about">
    <ImageSide side="left" />
    <div class="main-secondary-content">
      <h2 class="main-secondary-title">About our furniture</h2>
      <p>
        Our multifunctional colelction blends design and function to suit your
        individual taste. Make each room uniqu, or pick a cohesive theme that
        best express you insterests and what inspires you. Find the furniture
        pieces you nedd, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </div>
    <ImageSide side="right" />
  </section>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}

.section-about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 30vh;
}

.main-secondary-content {
  width: 40%;
  padding: 0 5rem;
}

.main-secondary-title {
  padding-bottom: 1rem;
}
</style>
