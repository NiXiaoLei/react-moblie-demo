## 起步
> yarn install

## 运行
> yarn start

## 目录结构
| 插件               | 文件夹            |
| :----------------- | :---------------- |
| redux/ redux-thunk | store             |
| swiper             | components/swiper |
| react-route        | Router.js         |
| 全局css 变量       | Global.scss       |



## 动画属性生成 全局变量调用
> 参数及默认值  ( type="fadeIn", duration=0.5, delay=0.3 )

调用方法
```
<p {...global.aniCreator('fadeIn', 0.8 ,0.5)}> </p>
```
