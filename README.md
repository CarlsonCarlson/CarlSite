# carlSite

## Versions
### each version will be stored on a branch, master is the deployed version
- v0.0 (12-28-23)
   - (deployed on internet and works)
- v0.1 (12-29-23)
   - ui changes
      - make it scroll down normally [DONE]
      - button to indicate scroll down that you can also click [DONE]
      - got mobile scroll to work [DONE]
   - change meta tags
      - change title [DONE]
      - change description [DONE]
      - change favicon [DONE]
   - make browser recognize it as dark background [DONE]
      - tried making body background black to do this
   - changed fps to 30 from 60 to run on lower end devices [DONE]
- v0.2 (working)
   - make it responsive to all screen sizes
      - title screen [DONE]
      - about me [DONE]

Binary rain is in website!!!

notes:

- all assets and icons should be made into components so they can be easily manipulated
- They made a component for a list of items
- each item has its own component (standard format)
- if you want a part of the page to not change ever, make it its own view and embed in header of App.vue
- if you want a part of the page to change, that is the routerView in App.vue

- during build src gets bundled and the dist folder is built initializing with public.

### Stack:

- composition API
- vite
- volar (vscode extension)
- typescript
- tailwindcss
- vue testing library to test individual components (never actually needed it)

### sites that look dope

1. cyperpunk.net header bar is really nice + glitch effect on picture
   - a bit of text to show my personality would be good just like (https://www.cyberpunk.net/us/en/cyberpunk-2077)

### Main TODOs
- TODO: arrow to indicate scroll up
- TODO: make it not lag
- TODO: make scroll work on mobile

### Extra
- TODO: put chinese name
- TODO: incorporate code_toad username
- TODO: link to other socials and sites

https://tailwindcss.com/docs/guides/vite#vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
