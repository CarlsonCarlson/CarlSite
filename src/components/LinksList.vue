<script setup lang="ts">
import Item from './AnItem.vue'
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-3">
    <div class="flex flex-wrap items-center">
      <p class="text-white my-auto">
        <span class="font-bold text-base">$ <a href="https://twitter.com/carlsoncheng_" target="_blank" rel="noopener noreferrer" class="link-text">twitter</a></span>
      </p>
    </div>
    <div class="flex flex-wrap items-center">
      <p class="text-white my-auto">
        <span class="font-bold text-base">$ <a href="https://linkedin.com/in/carlsoncheng" target="_blank" rel="noopener noreferrer" class="link-text">linkedin</a></span>
      </p>
    </div>
    <div class="flex flex-wrap items-center">
      <p class="text-white my-auto">
        <span class="font-bold text-base">$ <a href="https://github.com/CarlsonCarlson" target="_blank" rel="noopener noreferrer" class="link-text">github</a></span>
      </p>
    </div>
    <div class="flex flex-wrap items-center">
      <p class="text-white my-auto">
        <span class="font-bold text-base">$ <a href="https://calendly.com/carlsoncheng" target="_blank" rel="noopener noreferrer" class="link-text">calendly</a></span>
      </p>
    </div>
    <div class="flex flex-wrap items-center">
      <p class="text-white my-auto">
        <span class="font-bold text-base">$ <a href="https://scholar.google.com/citations?user=pxlCRGAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" class="link-text">google scholar</a></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.link-text {
  text-decoration: underline;
}
</style>
