## 起步
> yarn install

## 运行
> yarn start

## 目录结构
| key            | value     |
| :----------------- | :---------------- |
| redux/ redux-thunk | /store            |
| swiper             | components/swiper |
| react-route        | Router.js         |
| 全局css 变量        | Global.scss       |
| css reset          | Reset.scss        |
| 组件目录 | /components |
| 静态资源文件 | /static |
| 页面 | /pages |
| 自定义配置 | /config |
| 通用功能函数 | /utils |



## 动画属性生成 全局变量调用
> 参数及默认值  ( type="fadeIn", duration=0.5, delay=0.3 )

调用方法
```
<p {...global.aniCreator('fadeIn', 0.8 ,0.5)}> </p>
```





## 技术选型
| key            | value       |
| :----------------- | :---------------- |
| 移动端适配单位 | rem          |
| css 预处理    | scss |
| 移动端网页触摸内容滑动 | swiper.js       |
| 过渡动画 | animate.css |
| 路由管理 | react-router-dom |
| 状态管理    | redux / react-redux / redux-thunk |
| http请求 | axios |
| 状态数据安全 | immutable.js / redux-immutable |