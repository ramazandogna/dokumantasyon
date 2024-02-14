import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
   lang: 'tr-TR',

   title: 'Dökümantasyon Sitesi',
   description: 'Dökümantasyon sitesi açıklaması',

   theme: defaultTheme({
      // default theme config
      logo: 'https://vuepress.vuejs.org/hero.png',
      navbar: [
         {
            text: 'Ana Sayfa',
            link: '/',
         },
         {
            text: 'Rehber',
            link: '/rehber',
         },
         {
            text: 'İçerikler',
            link: '/icerikler/',
         },
         {
            text: 'Hakkında',
            link: '/hakkinda',
         },
      ],
   }),
   bundler: viteBundler(),
});
