import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Maeva Norris",
  description: "My cool website 😺",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      {
        text: 'Maeva Norris',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Projects', link: '/projects' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maevanorris' }
    ]
  }
})
