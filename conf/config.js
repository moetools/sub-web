window.config = {
  // 网站标题
  siteName: 'MoeTools',
  // API 地址
  apiUrls: [
    {
      value: 'https://subapi.fly.dev',
      text: '默认'
    },
    {
      value: 'https://sub.xeton.dev/sub?',
      text: '第三方 - YToo [sub.xeton.dev]'
    },
    {
      value: 'https://api.dler.io/sub?',
      text: '第三方 - Dler [api.dler.io]'
    },
    {
      value: 'https://sub.d1.mk/sub?',
      text: '第三方 - 肥羊 [sub.d1.mk] [支持VLESS REALITY HY2]'
    },
    {
      value: 'http://127.0.0.1:25500',
      text: '本地 [127.0.0.1:25500]'
    }
  ],
  // 短域名服务地址
  shortUrls: ['https://suo.yt', 'https://v1.mk', 'https://s.ops.ci'],
  // 首页菜单
  menuItem: [
    {
      title: '首页',
      link: '/',
      target: '',
    }
  ],
  // 远程配置地址,可以自行按照格式添加。
  remoteConfigOptions: [
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini',
      text: '基础规则（推荐）',
    },
    {
      value: 'https://raw.githubusercontent.com/MoeTools/static/master/config/clash-config.ini',
      text: '进阶规则（详细）',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_BackCN.ini',
      text: '回国规则',
    },
  ],
};
