<template>
<div>
    <div class="RightItemBox">
        <div class="RightItemTitle">
            <div>姓名</div>
            <div>部门</div>
            <div>年级</div>
            <div>性别</div>
            <div>考核进度</div>
            <div>学院</div>
            <div>状态</div>
            <div :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}">
                操作
            </div>
            <input type="checkbox" :style="{'display': (switchMode == '批量模式 开' ? 'none' : 'block')}"/>
        </div>

        <div class="RightItem" v-for="(item,index) in rightList" :key="index">
            <div>{{item.name}}</div>
            <div>{{item.department}}</div>
            <div>{{item.grade}}</div>
            <div>{{item.sex}}</div>
            <div>{{item.progress}}</div>
            <div>{{item.college}}</div>
            <div>{{item.state}}</div>
            <div>
                <button class="pass" :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}">通过</button>
                <button class="nopass" :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}">未通过</button>
                <input type="checkbox" :style="{'display': (switchMode == '批量模式 开' ? 'none' : 'block')}"/>
            </div>
        </div>
    </div>

    <div class="RightFooterBox">
        <div class="RightFooter">
            <div class="pageBox">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.pagenum"
                    :page-size="queryInfo.pagesize"
                    layout="prev, pager, next"
                    :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'RightItemOn',
        data() {
            return {
                rightList: [
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未操作'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',progress:'面试',college:'信息工程学院',state:'未通过'}
                ],
                // 获取用户列表的参数对象
                queryInfo: {
                    query: '',
                    // 当前的页数
                    pagenum: 1,
                    // 当前每页显示多少条数据
                    pagesize: 8
                },
                total: 40,
            }
        },
        computed:{
            ...mapState(['switchMode'])//从vuex那边获取当前栏目title
        },
        mounted() {
           this.$store.state.switchMode = localStorage.getItem('switchMode')
        },
        methods: {
            // 监听页码值改变的事件
            handleCurrentChange(newPage){
                console.log(newPage);
                this.queryInfo.pagenum = newPage
            }
        }
    }
</script>

<style scoped>
   .RightItemBox {
        width: calc(86vw - 108px);
        min-width: 1545px;
        height: 666px;
        background-color: rgb(195, 209, 231);
        border-bottom: 1px solid #797979;
        margin: 0 auto;
    }

    .RightItemTitle {
        width: 100%;
        height: 82px;
        border-bottom: 1px solid #797979;
        display: flex;
        flex-direction: row;
    }

    .RightItemTitle div {
        width: 12.5%;
        height: 82px;
        color: #333333;
        font-size: 25px;
        font-weight: bold;
        line-height: 82px;
        text-align: center;
    }

    .RightItem {
        width: 100%;
        height: 72px;
        border-top: 1px solid #AAAAAA;
        display: flex;
        flex-direction: row;
    }

    .RightItem div {
        width: 12.5%;
        height: 72px;
        color: #333333;
        font-size: 23px;
        line-height: 72px;
        text-align: center;
    }

    .RightItem input {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        margin-top: 20px; 
    }

    .RightItemTitle input {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        margin-top: 20px; 
    }

    .pass {
        width: 74px;
        height: 40px;
        background-color: #0584CC;
        border: 0;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        float: left;
        margin-left: 15px;
        margin-right: 11px;
        margin-top: 15px;
    }

    .nopass {
        width: 93px;
        height: 40px;
        border: 0;
        color: #000;
        background-color: #ECECEC;
        font-size: 18px;
        border-radius: 5px;
        margin-top: 15px;
    }

    /* RightFooter */
    .RightFooterBox {
        width: 86vw;
        height: 141px;
        min-width: 1653px;
    }

    .RightFooter {
        width: 86vw;
        height: 141px;
        min-width: 1653px;
    }

    .pageBox {
        width:260px;
        height:50px;
        margin: 0 auto;
        margin-top: 50px;
    }
</style>