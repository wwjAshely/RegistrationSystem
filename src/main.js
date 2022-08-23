// 引入要用的框架
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
// 引入阿里云字体图标css
import './assets/IconFont/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './views/index/Index.css'

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
Vue.use(ElementUI)


// 创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    router: router //路由器
})