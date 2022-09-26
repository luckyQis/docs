const moment = require('moment');
module.exports = {
    base: '/docs/',
    title: "这是一个title标题",
    description: '这是一个description',
    head:[
        ['link',{rel: 'icon',href: '/assets/img/favicon.ico'}],
        ['meta',{name: 'keywords', content: 'vuepress介绍，vuepress说明'}],
        ['meta',{name: 'author', content: '作者'}],
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            return moment(timestamp).format("LLLL");
          }
        }
      ]
    ],
    // logo图标
    themeConfig: {
        // activeHeaderLinks: false, 
        // displayAllHeaders: true, // 默认值：false,
        logo: '/assets/img/logo.png',
        lastUpdated: '更新时间', // string | boolean
        // 导航栏
        nav: [
            // { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            { text: '祁子川', link: 'http://goodluckweb.top' },
        ],
        // 侧边栏
        sidebar: 
        // {
        //     "/css":[
        //         '/css/aaa',
        //         '/css/bbb',
        //     ],
        // },
        [
            {
              title: '关于我',   // 必要的
            //   path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //   collapsable: false, // 可选的, 默认值是 true,
            //   sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/about/about',
              ],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
              title: 'css',
              path: '/css/',
              children: [
                '/css/aaa',
                '/css/bbb',
               ],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
              title: 'css2',
              children: [
                '/css/aaa',
                '/css/bbb',
               ],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'home',
                children: [
                  '',
                  '',
                 ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
              },
          ],
    },
}