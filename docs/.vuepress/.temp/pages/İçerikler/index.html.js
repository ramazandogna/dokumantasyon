import comp from "/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/İçerikler/index.html.vue"
const data = JSON.parse("{\"path\":\"/%C4%B0%C3%A7erikler/\",\"title\":\"\",\"lang\":\"tr-TR\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"İlk içerik\",\"slug\":\"ilk-icerik\",\"link\":\"#ilk-icerik\",\"children\":[]},{\"level\":2,\"title\":\"İkinci içerik\",\"slug\":\"ikinci-icerik\",\"link\":\"#ikinci-icerik\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"İçerikler/README.md\"}")
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
