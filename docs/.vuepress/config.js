module.exports = {
  title: '2021年学生组会',
  description: 'LAMOST 运行和发展中心',
  head: [
    ['link', {rel:'shortcut icon', href:'/favicon.ico'}] 
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
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
      { text: '秦丽', link: '/qinli/'},
      { text: '鲁燕', link: '/luyan/'},
      { text: '陈静', link: '/chenjing/' },
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
  ];
}

// 何徐江
function hxjSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['1', '2', '3', '4', ],   //该分组下要显示的文件的目录
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
  ];
}

// 韩博冲
function hbcSidebarConf() {
  return [
    {
      title: '01月',  //组名
      children: ['2', '4']
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
