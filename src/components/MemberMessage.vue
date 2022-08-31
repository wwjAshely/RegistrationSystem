<template>
    <div class="RightList">
        <div class="SearchBox">
            <Search/>
        </div>

        <div class="concreteMessage">
            <div class="RightItemBox">
                <div class="RightItemTitle">
                    <div>姓名</div>
                    <div>部门</div>
                    <div>年级</div>
                    <div>性别</div>
                    <div>手机号</div>
                    <div>考核进度</div>
                    <div>学院</div>
                </div>
                <div class="RightItem" v-for="(item,index) in memberMessage" :key="index">
                    <div>{{item.name}}</div>
                    <div>{{item.department}}</div>
                    <div>{{item.grade}}</div>
                    <div>{{item.sex}}</div>
                    <div>{{item.number}}</div>
                    <div>{{item.progress}}</div>
                    <div>{{item.college}}</div>
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
    </div>
</template>

<script>
    import Search from "./Search";
    //  import RightItem from "./RightItem";

    export default {
        name: 'MemberMessage',
        components:{
           Search,
        //    RightItem,
        },
        data() {
            return {
                // 获取用户列表的参数对象
                queryInfo: {
                    query: '',
                    // 当前的页数
                    pagenum: 1,
                    // 当前每页显示多少条数据
                    pagesize: 8
                },
                total: 40,
                memberMessage: [
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'},
                    {name:'陈佳贤',department:'设计',grade:'20',sex:'女',number:'1234567890',progress:'面试',college:'信息工程学院'}
                ]
            }
        },
        mounted() {

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
    *{
		user-select: none;
	}
    
    .RightList {
        width: calc(100vw - 156px);
        height: 100%;
        /* background-color: rgb(154, 148, 149); */
        min-width: 1764px;
    }

    .SearchBox {
        /* width: 91%; */
        width: 86vw;
        height: 90px;
        background-color: white;
        margin-left: 4vw;
        margin-top: 55px;
        border-radius: 10px;
        min-width: 1653px;
    }

    .concreteMessage {
        width: 86vw;
        height: 808px;
        margin-left: 4vw;
        margin-top: 18px;
        border-radius: 10px;
        background-color: white;
        min-width: 1653px;
    }

    .RightFooterBox {
        width: 86vw;
        height: 141px;
        min-width: 1653px;
    }

    /* RightFooter */
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

    /* RightItem */
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
        width: 15%;
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
        border-bottom: 1px solid #AAAAAA;
        display: flex;
        flex-direction: row;
    }

    .RightItem div {
        width: 15%;
        height: 72px;
        color: #333333;
        font-size: 23px;
        line-height: 72px;
        text-align: center;
    }
</style>