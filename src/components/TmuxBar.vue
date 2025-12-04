<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showBar = ref(true)
const activeSection = ref('entrance')
const currentTime = ref('')
const currentDate = ref('')
const scrollPercentage = ref(0)

function updateTime() {
  const now = new Date()

  // Format time as 12-hour with AM/PM in Pacific Time
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/Los_Angeles'
  }) + ' PT'

  // Format date as DD-MMM (e.g., "03-Dec")
  currentDate.value = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    timeZone: 'America/Los_Angeles'
  })
}

function calculateScrollPercentage() {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY

  // Calculate percentage
  const maxScroll = documentHeight - windowHeight
  const percentage = Math.round((scrollTop / maxScroll) * 100)

  scrollPercentage.value = Math.min(100, Math.max(0, percentage))
}

function handleScroll() {
  // Detect active section based on scroll position
  const entranceSection = document.getElementById('entrance')
  const meSection = document.getElementById('me')
  const linksSection = document.getElementById('links')

  if (entranceSection && meSection && linksSection) {
    const entranceSectionTop = entranceSection.offsetTop
    const meSectionTop = meSection.offsetTop
    const linksSectionTop = linksSection.offsetTop
    const scrollPosition = window.scrollY + window.innerHeight / 2

    if (scrollPosition < meSectionTop) {
      activeSection.value = 'entrance'
    } else if (scrollPosition < linksSectionTop) {
      activeSection.value = 'me'
    } else {
      activeSection.value = 'links'
    }
  }

  // Update scroll percentage
  calculateScrollPercentage()
}

function goToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

let timeInterval: number | undefined

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
  updateTime() // Initial time
  timeInterval = setInterval(updateTime, 60000) // Update every minute
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (timeInterval) clearInterval(timeInterval)
})
</script>

<template>
  <div
    v-show="showBar"
    class="fixed bottom-0 left-0 right-0 bg-[#0c1014] border-t border-[#245361] py-2 px-4 md:py-3 md:px-6 z-50 transition-all duration-300 font-mono text-sm md:text-base"
  >
    <!-- Mobile: Stacked layout -->
    <div class="md:hidden flex flex-col gap-1 w-full">
      <!-- Line 0: Sections (left aligned) -->
      <div class="flex gap-2 justify-start">
        <button
          @click="goToSection('entrance')"
          class="transition-colors cursor-pointer"
          :class="activeSection === 'entrance' ? 'text-[#d26937] font-bold' : 'text-[#599cab] hover:text-[#d3ebe9]'"
        >
          [零:entrance{{ activeSection === 'entrance' ? '*' : '' }}]
        </button>
        <button
          @click="goToSection('me')"
          class="transition-colors cursor-pointer"
          :class="activeSection === 'me' ? 'text-[#d26937] font-bold' : 'text-[#599cab] hover:text-[#d3ebe9]'"
        >
          [一:me{{ activeSection === 'me' ? '*' : '' }}]
        </button>
        <button
          @click="goToSection('links')"
          class="transition-colors cursor-pointer"
          :class="activeSection === 'links' ? 'text-[#d26937] font-bold' : 'text-[#599cab] hover:text-[#d3ebe9]'"
        >
          [二:links{{ activeSection === 'links' ? '*' : '' }}]
        </button>
      </div>

      <!-- Line 1: Scroll, Time and Date (right aligned) -->
      <div class="flex gap-2 text-xs whitespace-nowrap justify-end">
        <span class="text-[#edb443]">{{ scrollPercentage }}% ↓</span>
        <span class="text-[#99d1ce]">"carlsoncheng.dev"</span>
        <span class="text-[#888ca6]">{{ currentDate }}</span>
        <span class="text-[#c23127]">{{ currentTime }}</span>
      </div>
    </div>

    <!-- Desktop: Single line layout -->
    <div class="hidden md:flex justify-between items-center w-full">
      <!-- Left: Windows -->
      <div class="flex gap-4">
        <button
          @click="goToSection('entrance')"
          class="transition-colors cursor-pointer"
          :class="activeSection === 'entrance' ? 'text-[#d26937] font-bold' : 'text-[#599cab] hover:text-[#d3ebe9]'"
        >
          [零:entrance{{ activeSection === 'entrance' ? '*' : '' }}]
        </button>
        <button
          @click="goToSection('me')"
          class="transition-colors cursor-pointer"
          :class="activeSection === 'me' ? 'text-[#d26937] font-bold' : 'text-[#599cab] hover:text-[#d3ebe9]'"
        >
          [一:me{{ activeSection === 'me' ? '*' : '' }}]
        </button>
        <button
          @click="goToSection('links')"
          class="transition-colors cursor-pointer"
          :class="activeSection === 'links' ? 'text-[#d26937] font-bold' : 'text-[#599cab] hover:text-[#d3ebe9]'"
        >
          [二:links{{ activeSection === 'links' ? '*' : '' }}]
        </button>
      </div>

      <!-- Right: Scroll %, Session, Date, Time -->
      <div class="flex gap-3 text-sm whitespace-nowrap">
        <span class="text-[#edb443]">{{ scrollPercentage }}% ↓</span>
        <span class="text-[#99d1ce]">"carlsoncheng.dev"</span>
        <span class="text-[#888ca6]">{{ currentDate }}</span>
        <span class="text-[#c23127]">{{ currentTime }}</span>
      </div>
    </div>
  </div>
</template>
