import comp from "/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/.vuepress/basla.html.vue"
const data = JSON.parse("{\"path\":\"/.vuepress/basla.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Sayfalar\",\"slug\":\"sayfalar\",\"link\":\"#sayfalar\",\"children\":[]},{\"level\":2,\"title\":\"İçerik\",\"slug\":\"icerik\",\"link\":\"#icerik\",\"children\":[{\"level\":3,\"title\":\"Test İçerik\",\"slug\":\"test-icerik\",\"link\":\"#test-icerik\",\"children\":[]}]},{\"level\":2,\"title\":\"Yapılandırma\",\"slug\":\"yapılandırma\",\"link\":\"#yapılandırma\",\"children\":[]},{\"level\":2,\"title\":\"Düzen ve Özelleştirme\",\"slug\":\"duzen-ve-ozellestirme\",\"link\":\"#duzen-ve-ozellestirme\",\"children\":[]}],\"git\":{},\"filePathRelative\":\".vuepress/basla.md\"}")
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
