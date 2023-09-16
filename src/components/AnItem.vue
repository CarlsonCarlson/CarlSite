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
  name: string,
  description: string
}>();
</script>

<template>
  <div class="flex items-center">
    <h4 class="text-white text-base font-bold mr-1 my-auto">$ cat {{ name }} - </h4>
    <p class="text-white text-sm ml-2 my-auto">{{ description }}</p>
  </div>
</template>
