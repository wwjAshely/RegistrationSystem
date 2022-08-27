// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router' //VueRouter 可以当成构造函数去用
// 引入组件
import MemberMessage from "../components/MemberMessage";
import CurrentStage1 from "../components/CurrentStage1";
import DynamicData from "../components/DynamicData";
import RightItemOn from '../components/RightItemOn';
import Start from '../views/start/Start.vue'
import Index from '../views/index/Index.vue'


// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name: 'start',
            path:'/start',
            component: Start,
            meta:{
                title:"启动页"
            }
        },
        {
            path:'/index',
            component:Index,
            name: 'index',
            meta:{
                title:"主页"
            },
            children:[
                {
                    path:'MemberMessage',
                    component: MemberMessage
                },
                {
                    path:'CurrentStage1',
                    component: CurrentStage1,
                    children:[
                        {
                            path:'RightItemOn', //二级路由路径前面不用加斜杠
                            component: RightItemOn
                        }
                    ]
                },
                {
                    path:'DynamicData',
                    component: DynamicData
                }
            ]
        }
    ]
})