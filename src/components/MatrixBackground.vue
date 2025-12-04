<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts" allowJS="true">
import { onMounted, ref } from 'vue'
import makeConfig from '../matrix/js/config.js'
// import makeConfig from '/matrix/js/config.js'
// const makeConfig = require('../matrix/js/config.js')

const canvas = ref(null)

onMounted(async () => {
  // document.addEventListener('touchmove', (e) => e.preventDefault(), {
  //   passive: false
  // })

  const supportsWebGPU = async () => {
    return (
      (window as any).GPUQueue != null &&
      (navigator as any).gpu != null &&
      (navigator as any).gpu.getPreferredCanvasFormat != null
    )
  }

  const isRunningSwiftShader = () => {
    const gl = (canvas.value as unknown as HTMLCanvasElement).getContext('webgl')

    if (!gl) return false
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')

    if (!debugInfo) return false;  // Add this line to check for null
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    return renderer.toLowerCase().includes('swiftshader')
  }

  // make fake urlPsudo apt updatearams that are actually just my settings
  const mySettings = {
    // "effect": "pride", // makes it have yellow for some reason
    // "effect": "plain",
    // "effect": "image", // multi color effect 
    // "version": "megacity",
    'cursorColor': "0.03135, 0.26865, 0.43135", // color of the drop itself (leading part)
    'cursorIntensity': "3.0",
    'width': '120',
    'slant': "180",
    'fallSpeed': "0.15",
    "bloomStrength": "0.1",
    // "animationSpeed": "any number"
    // "cycleSpeed": "any number"
    // "ditherMagnitude": "1", 
    "palette":
      "0.03135, 0.26865, 0.43135, 1," + // blue
      "0.03135, 0.26865, 0.43135, 0.5," + // blue
      "0, 0, 0, 0",

    // the gradient
    // the closer the number is to 0 the more promininent it is.
    // 0 -> 1
    // 0 is background 
    // 1 is text/foreground

    // "palette": "0.0627,0.5373,0.8627,0,0.2,0.5,0,0.5,1,0.7,0,1",
    // 3 colors, r,g,b and location on screen grandient
  }

  // const urlParams = new URLSearchParams(window.location.search)
  // const config = makeConfig(Object.fromEntries(urlParams.entries()))

  const config = makeConfig(mySettings)
  const useWebGPU = (await supportsWebGPU()) && ['webgpu'].includes(config.renderer?.toLowerCase())
  const solution = import(`../matrix/js/${useWebGPU ? 'webgpu' : 'regl'}/main.js`)
  // const solution = import(`/public/matrix/js/${useWebGPU ? 'webgpu' : 'regl'}/main.js`)

  if (isRunningSwiftShader() && !config.suppressWarnings) {
    // Add the notice logic here
  } else {
    ;(await solution).default(canvas.value, config)
  }
})
</script>

<style scoped>

canvas {
  width: 100vw;
  height: 300vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

@supports (padding-top: env(safe-area-inset-top)) {
  body {
    padding: 0;
    height: calc(100% + env(safe-area-inset-top));
  }
}
/* body {
  background: black;
  overflow: hidden;
  margin: 0;

  font-family: monospace;
  font-size: 2em;
  text-align: center;
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
} */
</style>
