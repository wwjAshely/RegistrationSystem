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
import './assets/IconFont1/iconfont.css'
// 引入element组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入插件
import vueResource from 'vue-resource'

// 引入Vuex
// import Vuex from 'vuex'
import store from './store/store.js'

//引入vue-qr插件生成二维码
import VueQr from 'vue-qr';

import './views/index/Index.css'

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(vueResource)
Vue.use(VueQr);

// 获取原型对象上的 push 函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err => err)
}

// 创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    router: router, //路由器
    store: store
})
