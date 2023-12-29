<script setup lang="ts">
import MatrixBackground from './components/MatrixBackground.vue'
import Title from './components/TheTitle.vue'
import ItemList from './components/ItemList.vue'

// import { onMounted } from 'vue';

// for if you ever want to make the page start at the bottom
// onMounted(() => {
//   window.scrollTo(0, document.body.scrollHeight);
// });
</script>

<template>
  <header>
    <MatrixBackground />
  </header>
  <div>
    <div class="flex justify-center items-center h-screen w-full">
      <Title />
    </div>
    <div class="flex justify-center items-center h-screen w-full">
      <ItemList />
    </div>
  </div>
</template>