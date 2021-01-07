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
      { text: '张三', link: '/Demo/' },
      { text: '陈静', link: '/chenjing/' },
      { text: '陈向蕾', link: '/chenxianglei/'},
      { text: '韩博冲', link: '/hanbochong/'},
      { text: '李硕', link: '/lishuo/'},
      { text: '鲁燕', link: '/luyan/'},
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
          children: ['5', '6', '7', '8'],
        },
        {
          title: '03月',
          children: ['9', '10', '11', '12'],
        },
        {
          title: '04月',
          children: ['13', '14', '15', '16'],
        },
        {
          title: '05月',
          children: ['17', '18', '19', '20'],
        },
        {
          title: '06月',
          children: ['21', '22', '23', '24'],
        },
        {
          title: '07月',
          children: ['25', '26', '27', '28'],
        },
        {
          title: '08月',
          children: ['29', '30', '31', '32'],
        },
        {
          title: '09月',
          children: ['33', '34', '35', '36'],
        },
        {
          title: '10月',
          children: ['37', '38', '39', '40'],
        },
        {
          title: '11月',
          children: ['41', '42', '43', '44'],
        },
        {
          title: '12月',
          children: ['45', '46', '47', '48'],
        }
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
          children: ['5', '6', '7', '8'],
        },
        {
          title: '03月',
          children: ['9', '10', '11', '12'],
        },
        {
          title: '04月',
          children: ['13', '14', '15', '16'],
        },
        {
          title: '05月',
          children: ['17', '18', '19', '20'],
        },
        {
          title: '06月',
          children: ['21', '22', '23', '24'],
        },
        {
          title: '07月',
          children: ['25', '26', '27', '28'],
        },
        {
          title: '08月',
          children: ['29', '30', '31', '32'],
        },
        {
          title: '09月',
          children: ['33', '34', '35', '36'],
        },
        {
          title: '10月',
          children: ['37', '38', '39', '40'],
        },
        {
          title: '11月',
          children: ['41', '42', '43', '44'],
        },
        {
          title: '12月',
          children: ['45', '46', '47', '48'],
        }
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
          children: ['5', '6', '7', '8'],
        },
        {
          title: '03月',
          children: ['9', '10', '11', '12'],
        },
        {
          title: '04月',
          children: ['13', '14', '15', '16'],
        },
        {
          title: '05月',
          children: ['17', '18', '19', '20'],
        },
        {
          title: '06月',
          children: ['21', '22', '23', '24'],
        },
        {
          title: '07月',
          children: ['25', '26', '27', '28'],
        },
        {
          title: '08月',
          children: ['29', '30', '31', '32'],
        },
        {
          title: '09月',
          children: ['33', '34', '35', '36'],
        },
        {
          title: '10月',
          children: ['37', '38', '39', '40'],
        },
        {
          title: '11月',
          children: ['41', '42', '43', '44'],
        },
        {
          title: '12月',
          children: ['45', '46', '47', '48'],
        }
      ],
      /* ============================================================================= */

    }
  }
} 
