// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions———用于响应组件中的动作
// const actions = {}
// 准备mutations———用于操作数据（state）
// const mutations = {}
// 准备state———用于存储数据
// const state = {}

const store = new Vuex.Store({
    state: {
        currentState:"",//index栏目状态
        switchMode: '', //开关状态
        LOADING: false,//加载页面是否隐藏
        rightList: '',
        total:'',
        dynamicData: '', //获取的动态数据
        dateTimeStart: '',
        dateTimeEnd: '',
        uploadImg: '',
        stageId: '',
        listId: [] //批量操作的上传的id数组
    },
    mutations: {
        showLoading(state){
            state.LOADING = true    
        },
        hideLoading (state) {
            state.LOADING = false
        },
    }
})

export default store