const base = "/my-blog/"; 
export default {
   styles: ['/blog-demo/styles/custom.css?v=1'],
   head: [
    ["link", { rel: "icon", href: "/my-blog/boke.ico" }],
  ],
  title: '是乐茵lin的博客',
  description: '是乐茵lin用来写博客的地方',
   themeConfig: {
    logo: '/my-blog/bcImgs.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      {
        text: 'golang后端',
        items: [
          { text: "go基础", link: "/golang/go基础/" },
          { text: "go进阶", link: "/golang/go进阶/" },
          { text: "go底层知识", link: "/golang/go底层知识/" },
        ]
      }
    ],
   sidebar: {
      '/golang/go基础/': [
        { text: '介绍', link: '/golang/go基础/' },
        { text: 'go基础1', link: '/golang/go基础/go基础1' },
        { text: 'go基础2', link: '/golang/go基础/go基础2' },
      ],
      '/golang/go进阶/': [
        { text: '介绍', link: '/golang/go进阶/' },
        { text: 'go进阶1', link: '/golang/go进阶/go进阶1' },
        { text: 'go进阶2', link: '/golang/go进阶/go进阶2' },
      ],
      '/golang/go底层知识/': [
        { text: '介绍', link: '/golang/go底层知识/' },
        { text: 'go底层知识1', link: '/golang/go底层知识/go底层知识1' },
        { text: 'go底层知识2', link: '/golang/go底层知识/go底层知识2' },
      ]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
   footer: {
      message: '版权所有 © 2024 是乐茵lin的博客',
      copyright: 'Released under the MIT License'
    },
   hero: {
      name: '是乐茵lin的博客',
      text: 'awesome-front-end-world.',
      tagline: '前端 知识体系地图',
      image: {
        src: '/my-blog/bclmgs.png', 
        alt: 'Logo'
      },
      actions: [
        {
          theme: 'brand',
          text: 'Get Started',
          link: '/golang/go基础/'
        },
       {
          theme: 'alt',
          text: 'View on GitHub',
          link: 'https://github.com/82228/blog-demo'
        }
      ]
    }
  }
}

