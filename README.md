# 个人博客

## 目录结构

```
- assets // 存放静态资源，主要是图片
    -imgs
    　　css.png // CSS文章背景图
　　　　 ...
- common // 存放组件
    -SVG // 存放VUE图标组件
        SvgDown.vue // "向下"按钮
        SVGLeft.vue // "收起"按钮
        ...
    BaseSidebar.vue // 侧边栏组件
    BaseList.vue // 文章列表组件
    ...
- components // 存放页面组件
    Blog.vue // 文章界面组件
    Home.vue // 首页组件
    tag.vue // tag界面组件       
    ...
- router // 存放路由
    index.js 
- store // 存放vuex
    -modules // 存放Vuex的模块
        Timer.vue // 计时器
    index.js
```
## 首屏
![首屏](https://github.com/xinghaizhuiyi/blog/blob/master/src/assets/home.png)

使用了canvas绘制的动态气泡效果，下方的箭头点击可以直接下拉到博客列表，左上角的按钮可以打开侧边栏

## 侧边栏
![侧边栏](https://github.com/xinghaizhuiyi/blog/blob/master/src/assets/sidebar.png)
侧边栏包括头像（点击返回主页），日历，搜索栏（支持模糊查询，如果有多条相关会以列表形式展现，如果只有1条结果直接跳转到此文章），tag栏（点击tag可以进入tag界面，查看相关的文章）
点击侧边栏内的箭头或者侧边栏的外部半透明区域可以将侧边栏最小化为按钮

## 博文列表
![列表](https://github.com/xinghaizhuiyi/blog/blob/master/src/assets/bowen.png)
![分页](https://github.com/xinghaizhuiyi/blog/blob/master/src/assets/page.png)
每页显示10篇文章，支持智能分页

## 博文界面
![博文](https://github.com/xinghaizhuiyi/blog/blob/master/src/assets/blog.png)
能将Markdown格式渲染为HTML并自动生成索引并添加锚点（锚点不改变url）