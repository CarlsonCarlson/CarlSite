<template>
  <div>
    hello
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts" allowJS="true">
import { onMounted, ref } from 'vue'
import makeConfig from '../matrix/js/config.js'

const canvas = ref(null)

onMounted(async () => {
  document.addEventListener('touchmove', (e) => e.preventDefault(), {
    passive: false
  })

  const supportsWebGPU = async () => {
    return (
      window.GPUQueue != null &&
      navigator.gpu != null &&
      navigator.gpu.getPreferredCanvasFormat != null
    )
  }

  const isRunningSwiftShader = () => {
    const gl = canvas.value.getContext('webgl')
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    return renderer.toLowerCase().includes('swiftshader')
  }

  const urlParams = new URLSearchParams(window.location.search)
  const config = makeConfig(Object.fromEntries(urlParams.entries()))
  const useWebGPU = (await supportsWebGPU()) && ['webgpu'].includes(config.renderer?.toLowerCase())
  const solution = import(`../matrix/js/${useWebGPU ? 'webgpu' : 'regl'}/main.js`)

  if (isRunningSwiftShader() && !config.suppressWarnings) {
    // Add the notice logic here
  } else {
    ;(await solution).default(canvas.value, config)
  }
})
</script>

<style scoped>
@supports (padding-top: env(safe-area-inset-top)) {
  body {
    padding: 0;
    height: calc(100% + env(safe-area-inset-top));
  }
}
body {
  background: black;
  overflow: hidden;
  margin: 0;

  font-family: monospace;
  font-size: 2em;
  text-align: center;
}

canvas {
  width: 100vw;
  height: 100vh;
}

p {
  color: hsl(108, 90%, 70%);
  text-shadow: hsl(108, 90%, 40%) 1px 0 10px;
}

.notice {
  margin-top: 10em;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.pill {
  display: inline-block;
  background: gray;
  border: 0.3em solid lightgray;
  font-size: 1rem;
  font-family: monospace;
  color: white;
  padding: 0.5em 1em;
  border-radius: 2em;
  min-width: 6rem;
  margin: 3em;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

.blue {
  background: linear-gradient(skyblue, blue, black, black, darkblue);
  border-color: darkblue;
  color: lightblue;
}

.blue:hover {
  border-color: blue;
  color: white;
}

.red {
  background: linear-gradient(lightpink, crimson, black, black, darkred);
  border-color: darkred;
  color: lightpink;
}

.red:hover {
  border-color: crimson;
  color: white;
}
</style>
