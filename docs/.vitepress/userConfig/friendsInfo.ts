interface Friend {
  avatar: string; // 头像链接
  name: string; // 用户 id
  link: string; // 博客链接
  title?: string; // 用户头衔
  tag?: string; // 用户标签
  color?: string; // 标签颜色
}

/**
 * TODO: 缺项处理
 * 在此处填写你的友情链接
 */
export const friendsInfo: Friend[] = [
  //  {
  //    avatar: "https://avatars.githubusercontent.com/u/57825561?v=4",
  //    name: "Runze Cheng",
  //    title: "🐺 A wolf Developer",
  //    link: "https://aidcheng.github.io",
  //    tag: "UCL CS",
  //    color: "indigo",
  //  },
  //  {
  //    avatar: "https://avatars.githubusercontent.com/u/60817914?v=4",
  //    name: "Charles-Donne",
  //    title: "🤖 VLN & Agent & Robotics",
  //    link: "https://github.com/Charles-Donne",
  //    tag: "CSU EE",
  //    color: "sky",
  //  },
   {
     avatar: "https://avatars.githubusercontent.com/u/172581617?v=4",
     name: "SinxHuang",
     title: "🐱 CV & LLM & Model Compression",
     link: "https://sinxhuang.vercel.app/",
     tag: "UESTC EE",
     color: "sky",
   },
  {
     avatar: "https://avatars.githubusercontent.com/u/135297480?v=4",
     name: "Zihao Ma",
     title: "🐎 President Ma & Lao Ma",
     link: "https://github.com/mzhhhh666",
     tag: "CSU EE",
     color: "sky",
   },
    {
     avatar: "https://avatars.githubusercontent.com/u/141605571?v=4",
     name: "Poet Shuting",
     title: "📹 3D Reconstruction",
     link: "https://github.com/Stephentting",
     tag: "UESTC EE",
     color: "sky",
   },
   {
     avatar: "https://avatars.githubusercontent.com/u/224218150?v=4",
     name: "Jianfeng Xiao",
     title: "🤖 Robotics Manipulation & Locomotion",
     link: "https://github.com/jfxiao-165788",
     tag: "NUDT CS",
     color: "indigo",
   },
];
