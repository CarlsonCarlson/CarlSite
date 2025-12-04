<script setup lang="ts">
import MatrixBackground from './components/MatrixBackground.vue'
import Title from './components/TheTitle.vue'
import ItemList from './components/ItemList.vue'
import LinksList from './components/LinksList.vue'
import TmuxBar from './components/TmuxBar.vue'
import IconArrow from './components/icons/IconArrow.vue'
import { onMounted } from 'vue'

// for if you ever want to make the page start at the bottom
// onMounted(() => {
//   window.scrollTo(0, document.body.scrollHeight);
// });

function scrollToBottom() {
  const meSection = document.getElementById('me');
  if (meSection) {
    meSection.scrollIntoView({ behavior: 'smooth' });
  }
}

onMounted(() => {
  // Prevent default hash scroll behavior
  if (window.location.hash === '#links') {
    // Remove hash temporarily to prevent browser default jump
    const hash = window.location.hash
    history.replaceState(null, '', window.location.pathname)

    // Start at top
    window.scrollTo(0, 0)

    // Restore hash and smooth scroll after page is fully loaded
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        history.replaceState(null, '', hash)
        const linksSection = document.getElementById('links')
        if (linksSection) {
          linksSection.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }
})

</script>

<template>
  <header>
    <MatrixBackground />
  </header>
  <div>
    <div id="entrance" class="flex justify-center items-center h-screen w-full relative">
      <Title />
      <div class="absolute bottom-10vh flex flex-col items-center" @click="scrollToBottom">
        <p class="text-white text-xs md:text-sm mb-4">enter</p>
        <IconArrow class="h-6 md:h-10"/>
      </div>
    </div>
    <div id="me" class="flex justify-center items-center h-screen">
      <div class="flex justify-center items-center h-screen w-5/6">
        <ItemList />
      </div>
    </div>
    <div id="links" class="flex justify-center items-center h-screen">
      <div class="flex justify-center items-center h-screen w-5/6">
        <LinksList />
      </div>
    </div>
  </div>
  <TmuxBar />
</template>