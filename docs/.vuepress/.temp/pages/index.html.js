import comp from "/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Anasayfa\",\"lang\":\"tr-TR\",\"frontmatter\":{\"home\":true,\"title\":\"Anasayfa\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Rehber\",\"link\":\"/rehber.html\",\"type\":\"primary\"},{\"text\":\"Github\",\"link\":\"https://github.com/ramazandogna\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"Minimal setup with markdown-centered project structure helps you focus on writing.\"},{\"title\":\"Vue-Powered\",\"details\":\"Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.\"},{\"title\":\"Performant\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"},{\"title\":\"Themes\",\"details\":\"Providing a default theme out of the box. You can also choose a community theme or create your own one.\"},{\"title\":\"Plugins\",\"details\":\"Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.\"},{\"title\":\"Bundlers\",\"details\":\"Default bundler is Vite, while Webpack is also supported. Choose the one you like!\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present Ramazan Doğan\"},\"headers\":[],\"git\":{\"updatedTime\":1707942882000,\"contributors\":[{\"name\":\"RAMAZAN DOGAN\",\"email\":\"doganrmzn40@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
