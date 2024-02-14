export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "v-4ec95bbd" */"/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Anasayfa"} }],
  ["/hakkinda.html", { loader: () => import(/* webpackChunkName: "v-4487a988" */"/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/hakkinda.html.js"), meta: {"title":""} }],
  ["/rehber.html", { loader: () => import(/* webpackChunkName: "v-65fbd0ee" */"/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/rehber.html.js"), meta: {"title":"Get Started"} }],
  ["/icerikler/", { loader: () => import(/* webpackChunkName: "v-07c7e648" */"/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/icerikler/index.html.js"), meta: {"title":"İçerik"} }],
  ["/icerikler/liste.html", { loader: () => import(/* webpackChunkName: "v-02e53b47" */"/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/icerikler/liste.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "v-8fe89ed2" */"/Users/ramazandogan/Github/dokumantasyon/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
