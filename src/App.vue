<script setup lang="ts">
import MatrixBackground from './components/MatrixBackground.vue'
import Title from './components/TheTitle.vue'
import ItemList from './components/ItemList.vue'
import IconArrow from './components/icons/IconArrow.vue'

// import { onMounted } from 'vue';

// for if you ever want to make the page start at the bottom
// onMounted(() => {
//   window.scrollTo(0, document.body.scrollHeight);
// });

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

</script>

<template>
  <header>
    <MatrixBackground />
  </header>
  <div>
    <div class="flex justify-center items-center h-screen w-full relative">
      <Title />
      <div class="absolute bottom-10vh flex flex-col items-center" @click="scrollToBottom">
        <p class="text-white text-xs md:text-sm mb-4">enter</p>
        <IconArrow class="h-6 md:h-10"/>
      </div>
    </div>
    <div class="flex justify-center items-center h-screen">
      <div class="flex justify-center items-center h-screen w-5/6">
        <ItemList />
      </div>
    </div>
  </div>
</template>