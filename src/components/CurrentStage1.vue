<template>
    <div class="RightList">
        <div class="SearchBox">
            <div class="Search">
        <div class="SearchTitle">{{SearchTitle}}</div>
        <div class="SearchCheck">
            <select class="choose1" 
                @change="chooseDepartment" 
                v-model="department" 
                @focus="departmentFocus"
                @blur="departmentBlur"
                ref="choose1"
            >
                <option value="">部门</option>
                <option v-for="(item,index) in departments" :key="index">{{item.value}}</option>
            </select>

            <select class="choose2" 
                v-model="college" 
                @change="chooseCollege"
                @focus="collegeFocus"
                @blur="collegeBlur"
                ref="choose2"
            >
                <option value="">学院</option>
                <option v-for="(item,index) in colleges" :key="index" :college = "item.value">{{item.value}}</option>
            </select>

            <el-select 
                v-model="value" 
                placeholder="请选择阶段" 
                @change="chooseStage" 
                @blur="stageBlur"
                ref="chooseStage"
            >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label">
                </el-option>
            </el-select>
        </div>
        <div class="SearchInput">
            <input type="text" 
                class="SearchIpt" 
                ref="searchIpt"
                v-model="KeyWord"
                @focus="searchIptFocus"
                @blur="searchIptBlur"
            />
            <button 
                class="SearchBtn" 
                @click="searchUsers" 
                @mouseenter="searchEnter" 
                ref="searchBtn"
                @mousedown="searchDown"
                @mouseup="searchUp"
                @mouseleave="searchLeave"
                >
                搜索
            </button>
        </div>
        <div class="manage">
            <button class="BatchMode">
                <div @click="SwitchMode" ref="switchMode">批量模式 开</div>
            </button>
        </div>
    </div>
        </div>

        <div class="concreteMessage">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
     import axios from 'axios'

    export default {
        name: 'MemberMessage',
        components:{
       
        },
        data() {
            return {
                SearchTitle:'面试',
                SearchTitleNumber: '2',
                departmentId: '',
                options: [{
                    value: '选项1',
                    label: '报名'
                    },{
                    value: '选项2',
                    label: '面试'
                    }, {
                    value: '选项3',
                    label: '一轮考核'
                    }, {
                    value: '选项4',
                    label: '二轮考核'
                    }, {
                    value: '选项5',
                    label: '小比赛'
                    }, {
                    value: '选项6',
                    label: '三轮考核'
                }],
                value: '',
                college: '',
                colleges: [{
                    value: '信息工程学院'    
                    },{
                    value: '智能工程学院'
                    },{
                    value: '教师教育学院（韶州师范学院）'
                    },{
                    value: '文学与传媒学院'
                    },{
                    value: '马克思主义学院'
                    },{
                        value: '化学与土木工程学院'
                    },{
                        value: '英东食品学院'
                    },{
                        value: '美术与设计学院'
                    },{
                        value: '商学院'
                    },{
                        value: '医学院'
                    },{
                        value: '政法学院'
                    },{
                        value: '数学与统计学院'
                    },{
                        value: '英东生物与农业学院'
                    },{
                        value: '体育学院'
                    },{
                        value: '外国语学院'
                    },{
                        value: '旅游与地理学院'
                    },{
                        value: '音乐与舞蹈学院'
                    }
                ],
                department: '',
                departments:[{
                    value:'设计部',
                    id: '1'
                },{
                    value:'编程-前端',
                    id:'2'
                },{
                    value: '编程-后端',
                    id:'3'
                },{
                    value:'文秘部',
                    id:'4'
                }
                ],
                KeyWord: ''
            }
        },
        computed:{
            ...mapState(['switchMode']),//从vuex那边获取当前栏目title
            ...mapState(['rightList']), //从vuex那边获取右边成员列表数据
            ...mapState(['total']),
            ...mapState(['stageId'])
        },
        mounted() {
           localStorage.setItem('switchMode',this.$refs.switchMode.innerText)
           this.$store.state.switchMode = localStorage.getItem('switchMode') 
        },
        methods: {
            SwitchMode() {
                if(this.$refs.switchMode.innerText === '批量模式 开'){
                    this.$refs.switchMode.innerText = '批量模式 关'
                    // 存到本地
                    localStorage.setItem('switchMode',this.$refs.switchMode.innerText)
                    this.$store.state.switchMode = localStorage.getItem('switchMode')
                }else if(this.$refs.switchMode.innerText === '批量模式 关'){
                    this.$refs.switchMode.innerText = '批量模式 开'
                    // 存到本地
                    localStorage.setItem('switchMode',this.$refs.switchMode.innerText)
                    this.$store.state.switchMode = localStorage.getItem('switchMode')
                }
            },
            chooseCollege() {
                console.log(this.college);
                axios({
                    method: 'get',
                    url: `http://124.222.28.28:7788/api/user/sift?college=${this.college}&departmentId=&stageId=${this.SearchTitleNumber}&current=1`,
                    headers:{
                        enrollToken: localStorage.getItem('enrollToken')
                    }
                }).then(
                    response => {
                        console.log('用学院筛选',response.data.data.data);
                        this.$store.state.rightList = response.data.data.data
                    }
                )
            },
            collegeFocus() {
                this.$refs.choose2.style.border="2px solid #000"
            },
            collegeBlur() {
                this.$refs.choose2.style.border="1px solid #818181"
            },
            chooseDepartment() {
                if(this.department === '设计部'){
                    this.departmentId = '1'
                }else if(this.department === '编程-前端'){
                    this.departmentId = '2'
                }else if(this.department === '编程-后端'){
                    this.departmentId = '3'
                }else if(this.department === '文秘部'){
                    this.departmentId = '4'
                }
                console.log(this.departmentId);
                axios({
                    method: 'get',
                    url: `http://124.222.28.28:7788/api/user/sift?college=&departmentId=${this.departmentId}&stageId=${this.SearchTitleNumber}&current=1`,
                    headers:{
                        enrollToken: localStorage.getItem('enrollToken')
                    }
                }).then(
                    response => {
                        console.log('用部门筛选',response.data.data.data);
                        this.$store.state.rightList = response.data.data.data
                    }
                )
            },
            departmentFocus() {
                this.$refs.choose1.style.border="2px solid #000"
            },
            departmentBlur() {
                this.$refs.choose1.style.border="1px solid #818181"
            },
            chooseStage() {
                if(this.value === '报名') {
                    this.SearchTitle = '报名'
                    this.SearchTitleNumber = '1'
                    this.$store.state.stageId = '1',
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=1',
                        headers:{
                            enrollToken: localStorage.getItem('enrollToken')
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
                }else if(this.value === '面试') {
                    this.SearchTitle = '面试',
                    this.SearchTitleNumber = '2',
                    this.$store.state.stageId = '2',
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=2',
                        headers:{
                            enrollToken: localStorage.getItem('enrollToken')
                        }
                    }).then(
                        response => {
                            this.$store.state.rightList = response.data.data.data
                            this.$store.state.total = response.data.data.data.length
                            // console.log('store里的rightList面试',this.$store.state.rightList);
                        },
                        error => {
                            console.log('请求失败了',error);
                        }
                    )
                }else if(this.value === '一轮考核') {
                    this.SearchTitle = '一轮考核',
                    this.SearchTitleNumber = '3',
                    this.$store.state.stageId = '3',
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=3',
                        headers:{
                            enrollToken: localStorage.getItem('enrollToken')
                        }
                    }).then(
                        response => {
                            this.$store.state.rightList = response.data.data.data
                            this.$store.state.total = response.data.data.data.length
                            // console.log('store里的rightList一轮考核',this.$store.state.rightList);

                        },
                        error => {
                            console.log('请求失败了',error);
                        }
                    )
                }else if(this.value === '二轮考核') {
                    this.SearchTitle = '二轮考核',
                    this.SearchTitleNumber = '4',
                    this.$store.state.stageId = '4',
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=4',
                        headers:{
                            enrollToken: localStorage.getItem('enrollToken')
                        }
                    }).then(
                        response => {
                            this.$store.state.rightList = response.data.data.data
                            this.$store.state.total = response.data.data.data.length
                            // console.log('store里的rightList二轮考核',this.$store.state.rightList);
                        },
                        error => {
                            console.log('请求失败了',error);
                        }
                    )
                }else if(this.value === '小比赛') {
                    this.SearchTitle = '小比赛',
                    this.SearchTitleNumber = '5',
                    this.$store.state.stageId = '5',
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=5',
                        headers:{
                            enrollToken: localStorage.getItem('enrollToken')
                        }
                    }).then(
                        response => {
                            this.$store.state.rightList = response.data.data.data
                            this.$store.state.total = response.data.data.data.length
                            // console.log('store里的rightList小比赛',this.$store.state.rightList);
                        },
                        error => {
                            console.log('请求失败了',error);
                        }
                    )
                }else if(this.value === '三轮考核'){
                    this.SearchTitle = '三轮考核',
                    this.SearchTitleNumber = '6',
                    this.$store.state.stageId = '6',
                    axios({
                        method: 'get',
                        url: 'http://124.222.28.28:7788/api/user/stage?current=2&stageId=6',
                        headers:{
                            enrollToken: localStorage.getItem('enrollToken')
                        }
                    }).then(
                        response => {
                            this.$store.state.rightList = response.data.data.data
                            this.$store.state.total = response.data.data.data.length
                            // console.log('store里的rightList三轮考核',this.$store.state.rightList);
                        },
                        error => {
                            console.log('请求失败了',error);
                        }
                    )
                }
            },
            stageBlur() {
                console.log(this.$refs.chooseStage);
            },
            // 搜索
            searchUsers() {
                if(this.KeyWord.trim() === '') {
                    console.log('输入不能为空');
                    this.KeyWord = ''
                } else {
                    axios({
                    method: 'get',
                    url: `http://124.222.28.28:7788/api/user/search/?current=1&keyword=${this.KeyWord}`,
                    headers:{
                        enrollToken: localStorage.getItem('enrollToken')
                    }
                }).then(
                    response => {
                        console.log('搜索',response.data.data.data);
                        this.$store.state.rightList = response.data.data.data
                        this.KeyWord = ''
                    }
                )
                }
            },
            searchEnter() {
                this.$refs.searchBtn.style.backgroundColor = 'rgba(5,132,204,0.8)'
            },
            searchDown() {
                this.$refs.searchBtn.style.backgroundColor = 'rgb(5,132,204)'
            },
            searchUp() {
                this.$refs.searchBtn.style.backgroundColor = 'rgba(5,132,204,0.8)'
            },
            searchLeave() {
                this.$refs.searchBtn.style.backgroundColor = 'rgb(5,132,204)'
            },
            searchIptFocus() {
                this.$refs.searchIpt.style.border = "1px solid #90c4f6"
            },
            searchIptBlur() {
                this.$refs.searchIpt.style.border = "1px solid #000"
            }
        }
    }
</script>

<style scoped>
    *{
		user-select: none;
	}

    /* Search */
    .Search {
        width: 86vw;
        height: 90px;
        border-radius: 10px;
        min-width: 1653px;
    }

    .SearchTitle {
        width: 20%;
        height: 100%;
        font-size: 36px;
        color: #333333;
        font-weight: bold;
        line-height: 90px;
        padding-left: 80px;
        box-sizing: border-box;
        cursor: default;
        float: left;
    }

    .SearchCheck {
        width: 38%;
        height: 100%;
        position: relative;
        float: left;
    }

    .choose1 {
        height: 48px;
        width: 150px;
        border-radius: 10px;
        position: absolute;
        top: 23px;
        font-size: 23px;
        padding-left: 5px;
        outline: 0;
    }

    .choose2 {
        height: 48px;
        width: 200px;
        border-radius: 10px;
        position: absolute;
        top: 23px;
        left: 180px;
        font-size: 23px;
        padding-left: 5px;
        outline: 0;
    }

    .SearchCheck >>> .el-select {
        height: 48px;
        width: 160px;
        position: absolute;
        top: 23px;
        left: 440px;
        padding-left: 5px;
    }

    .SearchCheck >>> .el-input__inner {
        height: 48px;
        font-size: 23px;
        border-radius: 10px;
        border-color: #818181;
    }

    .choose3 {
        height: 48px;
        width: 150px;
        border-radius: 10px;
        position: absolute;
        top: 23px;
        left: 450px;
        font-size: 23px;
        padding-left: 5px;
    }

    .SearchInput {
        width: 32%;
        height: 100%;
        position: relative;
        float: left;
    }

    .SearchIpt {
        width: 400px;
        height: 50px;
        position: absolute;
        border-radius: 10px;
        top: 21px;
        box-sizing: border-box;
        font-size: 22px;
        outline: 0;
        padding-left: 15px;
    }

    .SearchBtn {
        width: 120px;
        height: 50px;
        background-color: #0584CC;
        border-radius: 10px;
        position: absolute;
        top: 21px;
        left: 280px; 
        outline: 0;
        font-size: 25px;
        color: #fff;
        border: 0px solid #0584CC;
        cursor: pointer;
    }

    .manage {
        width: 10%;
        height: 90px;
        float: left;
    }

    .BatchMode {
        width: 150px;
        height: 40px;
        background-color: #0584CC;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        margin-top: 20px;
        border: 1px solid #797979;
        cursor: pointer;
    }

    .RightList {
        width: calc(100vw - 156px);
        height: 100%;
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

</style>