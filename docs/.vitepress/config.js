// .vitepress/config.js
export default {
    // site-level options
    title: 'Nest flow',
    base : '/nest-flow-doc/',
    description: 'A nest js code generator using Yeoman',
  
    themeConfig: {
      logo: "https://docs.nestjs.com/assets/logo-small.svg",
      nav : [
        {text : "Guide" , link : "/get-start"},
        {text : "About" , link : "/about"},
        {text : "Contact" , link : "/contact"}
      ] , 
      sidebar : [
        {text : "What is nest flow ?" ,link :  '/'  },
        {text : "Get start" ,link :  '/get-start'},
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/mostafasissi/generator-nest-flow.git" },
        { icon: "twitter", link: "https://twitter.com/victorekea" },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-present SISSI Mostafa'
      }
    }
  }