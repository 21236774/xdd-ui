export default {
  title: "xddUi",
  base:  process.env.NODE_ENV === 'production' ? '/xdd-ui/' : '/',
  themeConfig: {
    logo: "/logo.jpg",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/21236774" }],
    sidebar: {
      "/guild": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/components": [
        {
          text: "基础组件",
          items: [
            {
              text: "按钮 Button",
              link: "/components/button/",
            },
            {
              text: "弹框 Modal",
              link: "/components/modal/",
            },
            {
              text: "配置 ConfigProvider",
              link: "/components/config-provider/",
            },
          ],
        },
      ],
    },
  },
};
