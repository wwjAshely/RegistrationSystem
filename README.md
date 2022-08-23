# vue_test

## 脚手架文件结构
|——node_modules
|——public
|  |——favicon.ico：页签图标
|  |——index.html：主页面

## vue.config.js配置文件
    使用vue inspect>output.js可以查看到Vue脚手架的默认配置
    使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### ref属性
1、被用来给元素或子组件注册引用信息（id的替代者）
2、应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）

### 配置项props
props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份,然后去修改data中的数据

### 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

### scoped属性
    Vue.app不适合用 scoped
