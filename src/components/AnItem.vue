<!-- <script setup lang="ts">
defineProps<{
  name: string,
  description: string
}>()
</script>

<template>
  <div class="flex flex-col items-center font-mono">
    <h4 class="text-white text-base font-bold mb-1">{{ name }}</h4>
    <p class="text-white text-sm mb-6">{{ description }}</p>
  </div>
</template> -->

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  description: string
}>()

// Extract URL from description if it exists
const urlMatch = props.description.match(/(https?:\/\/[^\s]+)/)
const url = urlMatch ? urlMatch[1] : null
const descriptionText = url ? props.description.replace(url, '').trim().replace(/\|\s*$/, '').trim() : props.description
</script>

<template>
  <div class="flex flex-wrap items-center">
    <!-- <p class="text-white text-base font-bold mr-1 my-auto">$ cat {{ name }} - </p>
    <p class="text-white text-sm ml-2 my-auto">{{ description }}</p> -->
    <p class="text-white my-auto">
      <span class="font-bold text-base">$ {{ name }} -&nbsp;&nbsp;&nbsp;</span
      ><span class="text-sm">{{ descriptionText }}</span
      ><span v-if="url" class="text-sm"> | <a :href="url" target="_blank" rel="noopener noreferrer" class="text-[#599cab] hover:text-[#d3ebe9] underline">{{ url }}</a></span>
    </p>
  </div>
</template>
