module.exports = {
  theme: 'reco',
  title: '2021年学生组会',
  description: 'LAMOST 运行和发展中心',
  head: [
    ['link', {rel:'shortcut icon', href:'/favicon.ico'}] 
  ],
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['vuepress-plugin-mathjax',
      {
        target: 'chtml',
        macros: {
          '*': '\\times',
        },
      }
    ],
  ],
  base: '/GroupMeeting/',
  themeConfig: {
    // reco-theme
    keyPage: {
      keys: ['8cc15794d76e26500daaf39ce35e0bd6'],  // 1.3.0 版本后需要设置为密文
      color: '#42b983',  // 登录页动画球的颜色
      lineColor: '#42b983'  // 登录页动画线的颜色
    },
    subSidebar: 'auto',  //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    blogConfig: {  // 博客配置
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/iScottMark' },
      ]
    },

    // default-theme
    nav: [
      { text: '使用说明', link: '/Demo/' },
      { text: '秦丽', link: '/qinli/'},
      { text: '鲁燕', link: '/luyan/'},
      { text: '陈静', link: '/chenjing/' },
      { text: '陈向蕾', link: '/chenxianglei/' },
      { text: '韩博冲', link: '/hanbochong/'},
      { text: '屈彩霞', link: '/qucaixia/'},
      { text: '何徐江', link: '/hexujiang/' },
      { text: '马晓骁', link: '/maxiaoxiao/'}
    ],
    displayAllHeaders: false,
    sidebarDepth: 2,
    collapsable: true,
    docsRepo: 'lamost-org/GroupMeeting/',
    docsDir: '/',
    sidebar:{
      '/Demo/': DemoSidebarConf(),        // 使用说明
      '/maxiaoxiao/': mxxSidebarConf(),   // 马晓骁
      '/hexujiang/': hxjSidebarConf(),    // 何徐江
      '/luyan/': lySidebarConf(),         // 鲁燕
      '/chenjing/': cjSidebarConf(),      // 陈静
      '/chenxianglei/': cxlSidebarConf(), // 陈向蕾
      '/hanbochong/': hbcSidebarConf(),   // 韩博冲
      '/qucaixia/': qcxSidebarConf(),     // 屈彩霞
      '/qinli/': qlSidebarConf(),         // 秦丽
    }
  }
} 


// Demo
function DemoSidebarConf() {
  return [
    '',
    'rules',
    'commit',
    'advanced',
  ];
}

// 马晓骁
function mxxSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['1', '2', '3', '4', ],   //该分组下要显示的文件的目录
    },
    {
      title: '02月', 
      children: ['5', '6', '8', '9'], 
    },
    {
      title: '03月', 
      children: ['10', '11', '12', '13'], 
      collapsable: false,
    },
  ];
}

// 何徐江
function hxjSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['1', '2', '3', '4', ],   //该分组下要显示的文件的目录
    },
    {
      title: '02月',
      children: ['5', '8', '9'],
    },
    {
      title: '03月',
      children: ['10', '13'],
      collapsable: false,
    },
  ];
}

// 鲁燕
function lySidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['2', ],   //该分组下要显示的文件的目录
    },
  ];
}    

// 陈静
function cjSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['2', '3', '4']
    },
    {
      title: '02月', 
      children: ['5', '6', '8', '9'], 
    },
    {
      title: '03月',
      children: ['10', '11', '12'],
      collapsable: false,
    },
  ];
}

// 陈向蕾
function cxlSidebarConf() {
  return [
    {
      title: '03月',
      children: ['10', '11', '12'],
      collapsable: false,
    },
  ];
}

// 韩博冲
function hbcSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['2', '4']
    },
    {
      title: '02月', 
      children: ['6',], 
      collapsable: false,
    },
  ];
}

// 屈彩霞
function qcxSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['2', '3', '4', ]
    },
    {
      title: '02月', 
      children: ['5', '8', '9'], 
    },
    {
      title: '03月',
      children: ['10', '11', '12'],
      collapsable: false,
    },
  ];
}

// 秦丽
function qlSidebarConf() {
  return [
    {
      title: '01月',
      children: ['2', '3', '4', ],  //组名
    },
  ];
}
