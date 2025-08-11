
export default {
   base : '/blog-demo/',
   styles: ['/blog-demo/styles/custom.css?v=1'],
   head: [
    ["link", { rel: "icon", href: "/my-blog/boke.ico" }],
  ],
  title: '是乐茵lin的知识库',
  description: '是乐茵lin用来写知识的地方',
   themeConfig: {
    logo: '/blog-demo/bcImgs.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      {
        text: 'golang后端',
        items: [
          { text: "go基础", link: "/golang/go基础/" },
          { text: "go进阶", link: "/golang/go进阶/" },
          { text: "go底层知识", link: "/golang/go底层知识/" },
          { text: "mysql", link: "/golang/mysql/" },
          { text: "计算机网络", link: "/golang/计算机网络/" },
        ]
      }
    ],
   sidebar: {
      '/golang/go基础/': [
        { text: '介绍', link: '/golang/go基础/' },
        { text: '切片', link: '/golang/go基础/切片' },
        { text: 'map', link: '/golang/go基础/map' },
      ],
      '/golang/go进阶/': [
        { text: '介绍', link: '/golang/go进阶/' },
        { text: 'go进阶1', link: '/golang/go进阶/go进阶1' },
        { text: 'go进阶2', link: '/golang/go进阶/go进阶2' },
      ],
      '/golang/go底层知识/': [
        { text: '介绍', link: '/golang/go底层知识/' },
        { text: '内存逃逸', link: '/golang/go底层知识/内存逃逸' },
        { text: 'GC', link: '/golang/go底层知识/GC' },
      ],
     '/golang/计算机网络/': [
        { text: '介绍', link: '/golang/计算机网络/' },
        { text: 'UDP详解', link: '/golang/计算机网络/UDP详解' },
      ],
     '/golang/mysql/': [
        { text: '介绍', link: '/golang/mysql/' },
        { text: 'mysql', link: '/golang/mysql/执行一条select语句的过程' },
      ],
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
   footer: {
      message: '版权所有 © 2025 是乐茵lin的知识库',
      copyright: 'Released under the MIT License'
    },
   hero: {
      name: '是乐茵lin的知识库',
      text: 'welcome to knowledge world.',
      tagline: '后端 知识体系地图',
      image: {
        src: '/blog-demo/bclmgs.png', 
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

