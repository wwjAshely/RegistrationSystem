<template>
<div>
    <div class="RightItemBox">
        <div class="RightItemTitle">
            <div class="TitleDiv1">姓名</div>
            <div class="TitleDiv1">部门</div>
            <div class="TitleDiv1">年级</div>
            <div class="TitleDiv1">性别</div>
            <div class="TitleDiv">考核进度</div>
            <div class="collegebox">学院</div>
            <div class="statusbox">状态</div>
            <div class="TitleDiv" :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}">
                操作
            </div>
            <input type="checkbox" :style="{'display': (switchMode == '批量模式 开' ? 'none' : 'block')}"/>
            <!-- <el-checkbox 
                v-model="checked" 
                :style="{'display': (switchMode == '批量模式 开' ? 'none' : 'block')}"
                :border="true"
                size="mini"
            >
            </el-checkbox> -->
        </div>

        <div class="RightItem" v-for="item in rightList.slice((queryInfo.pagenum - 1)*queryInfo.pagesize,queryInfo.pagenum * queryInfo.pagesize)" :key="item.id">
            <div class="RightItemDiv1">{{item.name}}</div>
            <div class="RightItemDiv1">{{item.department}}</div>
            <div class="RightItemDiv1">{{item.grade}}</div>
            <div class="RightItemDiv1">{{item.gender}}</div>
            <div class="RightItemDiv">{{item.stage}}</div>
            <div class="collegeBox">{{item.collegeAbbreviation}}</div>
            <div class="statusBox">{{item.status}}</div>
            <div class="RightItemDiv">
                <button 
                    class="pass" 
                    :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}"
                    @mouseup = 'pass($event)'
                    :data-id="item.id"
                >
                    通过
                </button>

                <button 
                    class="nopass"  
                    :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}"
                    @mouseup = 'nopass($event)'
                    :data-id="item.id"
                >
                    未通过
                </button>
                <input 
                    type="checkbox" 
                    :style="{'display': (switchMode == '批量模式 开' ? 'none' : 'block')}"
                    :data-id="item.id"
                    @click="checkboxOnclick"
                />
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
                    :total="rightList.length">
                </el-pagination>
            </div>
            <div class="totalNumber" :style="{'display': (switchMode == '批量模式 关' ? 'none' : 'block')}">
                总人数:&nbsp;&nbsp;<span>{{this.$store.state.total}}
                </span>&nbsp;&nbsp;人
            </div>
            <div class="isPass" :style="{'display': (switchMode == '批量模式 开' ? 'none' : 'block')}">
                已选中&nbsp;{{this.$store.state.listId.length}}&nbsp;项&nbsp;&nbsp;&nbsp;
                <span @click="morePass">通过</span>&nbsp;|&nbsp;
                <span @click="moreFail">不通过</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import {mapState} from 'vuex';
    import axios from 'axios'
    export default {
        name: 'RightItemOn',
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
                enrollToken: '',
                checked: true
            }
        },
        computed:{
            ...mapState(['switchMode']),//从vuex那边获取当前栏目title
            ...mapState(['rightList']), //从vuex那边获取右边成员列表数据
            ...mapState(['total']),
            ...mapState(['listId'])
        },
        mounted() {
            this.$store.state.switchMode = localStorage.getItem('switchMode')
            axios.get('http://124.222.28.28:7788/api/user/getTokenTest?userId=2').then(
                response => {
                    localStorage.setItem('enrollToken',response.data.data.enrollToken)
                    var enrollToken = localStorage.getItem('enrollToken')
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=2',
                        headers:{
                            enrollToken: enrollToken
                        }
                    }).then(
                        response => {
                            this.$store.state.rightList = response.data.data.data
                            this.$store.state.total = response.data.data.data.length
                        },
                        error => {
                            console.log('请求失败了',error);
                        }
                    )
                },
                error => {
                    console.log('请求失败了',error.message);
                }
            )
        },
        methods: {
            // 监听页码值改变的事件
            handleCurrentChange(newPage){
                this.queryInfo.pagenum = newPage
            },
            // 通过
            pass(event) {
                var listid = [];
                listid.push(event.currentTarget.dataset.id);
                console.log(listid);
                axios({
                    method:'post',
                    url: 'http://124.222.28.28:7788/api/process/updateStatusList',
                    headers: {
                        enrollToken: localStorage.getItem('enrollToken')
                    },
                    data: {
                        userIdList: listid,
                        stageId: this.$store.state.stageId,
                        status: 1
                    }
                }).then(
                    response => {
                        console.log(response.data.data.data);
                        axios({
                            method:'get',
                            url:`http://124.222.28.28:7788/api/user/stage?current=2&stageId=${this.$store.state.stageId}`,
                            headers: {
                                enrollToken: localStorage.getItem('enrollToken')
                            },
                        }).then(
                            response => {
                                this.$store.state.rightList = response.data.data.data
                                this.$store.state.total = response.data.data.data.length
                            }
                        )
                    },
                    error => {
                        console.log('通过发生错误',error);
                    }
                )
            },
            // 批量通过
            morePass() {
                console.log('批量通过');
                axios({
                    method:'post',
                    url:'http://124.222.28.28:7788/api/process/updateStatusList',
                    headers:{
                        enrollToken:localStorage.getItem('enrollToken')
                    },
                    data:{
                        status:1,
                        userIdList: this.$store.state.listId,
                    }
                }).then(
                    response => {
                        console.log(response);
                        axios({
                            method:'get',
                            url:`http://124.222.28.28:7788/api/user/stage?current=2&stageId=${this.$store.state.stageId}`,
                            headers: {
                                enrollToken: localStorage.getItem('enrollToken')
                            },
                        }).then(
                            response => {
                                this.$store.state.rightList = response.data.data.data
                                this.$store.state.total = response.data.data.data.length
                            }
                        )
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            // 批量不通过
            moreFail() {
                console.log('批量不通过');
                axios({
                    method:'post',
                    url:'http://124.222.28.28:7788/api/process/updateStatusList',
                    headers:{
                        enrollToken:localStorage.getItem('enrollToken')
                    },
                    data:{
                        status:2,
                        userIdList: this.$store.state.listId,
                    }
                }).then(
                    response => {
                        console.log(response);
                        axios({
                            method:'get',
                            url:`http://124.222.28.28:7788/api/user/stage?current=2&stageId=${this.$store.state.stageId}`,
                            headers: {
                                enrollToken: localStorage.getItem('enrollToken')
                            },
                        }).then(
                            response => {
                                this.$store.state.rightList = response.data.data.data
                                this.$store.state.total = response.data.data.data.length
                            }
                        )
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            // 未通过
            nopass(event) {
                var listid = [];
                listid.push(event.currentTarget.dataset.id);
                console.log(listid);
                axios({
                    method:'post',
                    url: 'http://124.222.28.28:7788/api/process/updateStatusList',
                    headers: {
                        enrollToken: localStorage.getItem('enrollToken')
                    },
                    data: {
                        userIdList: listid,
                        stageId: this.$store.state.stageId,
                        status: 2
                    }
                }).then(
                    response => {
                        console.log('不通过',response);
                        axios({
                            method:'get',
                            url:`http://124.222.28.28:7788/api/user/stage?current=2&stageId=${this.$store.state.stageId}`,
                            headers: {
                                enrollToken: localStorage.getItem('enrollToken')
                            },
                        }).then(
                            response => {
                                this.$store.state.rightList = response.data.data.data
                                this.$store.state.total = response.data.data.data.length
                            }
                        )
                    },
                    error => {
                        console.log('通过发生错误',error);
                    }
                )
            },
            // 勾选事件
            checkboxOnclick(e) {
                if(e.target.checked == true) {
                    this.$store.state.listId.push(e.currentTarget.dataset.id);
                }else if(e.target.checked === false){
                    for(var i=0;i<this.$store.state.listId.length;i++){
                        if(this.$store.state.listId[i] === e.currentTarget.dataset.id) {
                            let index = this.$store.state.listId.indexOf(e.currentTarget.dataset.id)
                            this.$store.state.listId.splice(index,1)
                            console.log(this.$store.state.listId);
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    *{
		user-select: none;
	}
    
   .RightItemBox {
        width: calc(86vw - 108px);
        min-width: 1545px;
        height: 666px;
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

    .TitleDiv {
        width: 12.5%;
        height: 82px;
        color: #333333;
        font-size: 25px;
        font-weight: bold;
        line-height: 82px;
        text-align: center;
    }

    .TitleDiv1 {
        width: 11%;
        height: 82px;
        color: #333333;
        font-size: 25px;
        font-weight: bold;
        line-height: 82px;
        text-align: center;
    }

    .collegebox {
        width: 20%;
        height: 82px;
        color: #333333;
        font-size: 25px;
        font-weight: bold;
        line-height: 82px;
        text-align: center;
    }

    .statusbox {
        width: 11%;
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
        border-bottom: 1px solid #E4E4E4;
        display: flex;
        flex-direction: row;
    }

    .RightItemDiv {
        width: 12.5%;
        height: 72px;
        color: #333333;
        font-size: 23px;
        line-height: 72px;
        text-align: center;
    }

    .RightItemDiv1 {
        width: 11%;
        height: 72px;
        color: #333333;
        font-size: 23px;
        line-height: 72px;
        text-align: center;
    }

    .statusBox {
         width: 11%;
        height: 72px;
        color: #333333;
        font-size: 23px;
        line-height: 72px;
        text-align: center;
    }

    .collegeBox {
        width: 20%;
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

    .RightItemTitle >>> .el-checkbox {
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
        position: relative;
        padding-top: 1px;
    }

    .pageBox {
        width:260px;
        height:50px;
        margin: 0 auto;
        margin-top: 50px;
    }

    .totalNumber {
        width: 180px;
        height: 30px;
        position: absolute;
        right: 85px;
        top: 25px;
        font-size: 23px;
    }

    .totalNumber span {
        color: #0584CC
    }

    .isPass {
        width: 300px;
        height: 30px;
        position: absolute;
        right: 85px;
        top: 25px;
        font-size: 23px;
        color: #333333;
        cursor:default;
    }

    .isPass span {
        color: #0584CC;
        cursor: pointer;
    }
</style>