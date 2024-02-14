import comp from "/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/.vuepress/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/.vuepress/guide/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"hello world\",\"slug\":\"hello-world\",\"link\":\"#hello-world\",\"children\":[]}],\"git\":{},\"filePathRelative\":\".vuepress/guide/readme.md\"}")
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
