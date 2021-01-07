module.exports = {
  title: '2021年学生组会',
  description: 'LAMOST 运行和发展中心',
  plugins: [
        '@vuepress/back-to-top',
        '@vuepress/last-updated0',
        ['vuepress-plugin-mathjax'],
        {
          target: 'chtml',
          macros: {
            '*': '\\times',
          },
        },
  ],
  base: '/GroupMeeting/',
  themeConfig: {
    nav: [
      { text: '使用说明', link: '/Demo/' },
      { text: '李硕', link: '/lishuo/'},
      { text: '鲁燕', link: '/luyan/'},
      { text: '陈静', link: '/chenjing/' },
      { text: '陈向蕾', link: '/chenxianglei/'},
      { text: '韩博冲', link: '/hanbochong/'},
      { text: '屈彩霞', link: '/qucaixia/'},
      { text: '张允晋', link: '/zhangyunjin/'},
      { text: '何徐江', link: '/hexujiang/' },
      { text: '马晓骁', link: '/maxiaoxiao/'}
    ],
    displayAllHeaders: false,
    sidebarDepth: 2,
    collapsable: true,
    docsRepo: 'lamost-org/GroupMeeting/',
    docsDir: '/',
    sidebar:{

      /* 张三 */
      '/Demo/':[
        {
          title: '01月',  //组名
          children: ['1', '2', '3', '4'],   //该分组下要显示的文件的目录
        },
        {
          title: '02月',
        },
        {
          title: '03月',
        },
        {
          title: '04月',
        },
        {
          title: '05月',
        },
        {
          title: '06月',
        },
        {
          title: '07月',
                  },
        {
          title: '08月',
                  },
        {
          title: '09月',
                  },
        {
          title: '10月',
                 },
        {
          title: '11月',
                  },
        {
          title: '12月',
        },
      ],
      /* ============================================================================= */

      /* 马晓骁 */
      '/maxiaoxiao/':[
        {
          title: '01月',  //组名
          children: ['1', ],   //该分组下要显示的文件的目录
        },
        {
          title: '02月',
        },
        {
          title: '03月',
        },
        {
          title: '04月',
        },
        {
          title: '05月',
        },
        {
          title: '06月',
        },
        {
          title: '07月',
                  },
        {
          title: '08月',
                  },
        {
          title: '09月',
                  },
        {
          title: '10月',
                 },
        {
          title: '11月',
                  },
        {
          title: '12月',
        },
      ],
      /* ============================================================================= */

      /* 何徐江 */
      '/hexujiang/':[
        {
          title: '01月',  //组名
          children: ['1', ],   //该分组下要显示的文件的目录
        },
        {
          title: '02月',
        },
        {
          title: '03月',
        },
        {
          title: '04月',
        },
        {
          title: '05月',
        },
        {
          title: '06月',
        },
        {
          title: '07月',
                  },
        {
          title: '08月',
                  },
        {
          title: '09月',
                  },
        {
          title: '10月',
                 },
        {
          title: '11月',
                  },
        {
          title: '12月',
        },
      ],
      /* ============================================================================= */

    }
  }
} 
