# carlSite

Binary rain is in website!!!

notes:

- all assets and icons should be made into components so they can be easily manipulated
- They made a component for a list of items
- each item has its own component (standard format)
- if you want a part of the page to not change ever, make it its own view and embed in header of App.vue
- if you want a part of the page to change, that is the routerView in App.vue


- Problem is that /src/matrix directory is not being bundled
- so when we build, /matrix/js/regl/main.js runs

- but actually /matrix/js/regl/main.js runs from MatrixBackground meaning...
- find out what is actually going on during build
- after putting file.js in public, it was seen in build
- meaning durng build if its not in public it can't be accessed?

- but i was able to run /src/matrix/js/regl/main.js?

- seems like import works in build
- but loadJS does not work on build

- it might be that wherever the script tag is being built, its not able to see anything in src from there
- I need to make the script tage be already in the index.html, hopefully this will tell the bundler to bundle the files i want

- I started putting things that need to be accessed on build in public. I think I can use just the main.js and possibly config.js in src
- everything else that gets referenced by those can be in public?

### Stack:

- composition API
- vite
- vue testing library to test individual components
- volar (vscode extension)
- typescript
- tailwindcss

### sites that look dope

hyperscience.com

TODO: arrow to indicate scroll up
TODO: glitch effect on text
TODO: put chinese name
TODO: incorporate code_toad username
TODO: link to other socials and sites

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
