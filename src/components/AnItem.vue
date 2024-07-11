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
const props = defineProps<{
  name: string
  description: string
}>()
</script>

<template>
  <div class="flex flex-wrap items-center">
    <!-- <p class="text-white text-base font-bold mr-1 my-auto">$ cat {{ name }} - </p>
    <p class="text-white text-sm ml-2 my-auto">{{ description }}</p> -->
    <p class="text-white my-auto">
      <span class="font-bold text-base whitespace-nowrap">$ {{ name }} -&nbsp;&nbsp;&nbsp;</span
      ><span class="text-sm">{{ description }}</span>
    </p>
  </div>
</template>
