<script setup></script>

<template>
  <nav class="navbar">
    <img class="logo" src="../assets/images/logo.svg" alt="" />
    <ul nav>
      <li class="navbar_item">home</li>
      <li class="navbar_item">shop</li>
      <li class="navbar_item">about</li>
      <li class="navbar_item">contact</li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px;
  position: fixed;
  z-index: 2;
  top: 0;
  mix-blend-mode: difference;
  left: 0;
}

.navbar_item {
  color: #fff;
  font-size: 1.2rem;
}

ul,
li,
ol {
  list-style: none;
  display: flex;
  gap: 15px;
}
</style>
