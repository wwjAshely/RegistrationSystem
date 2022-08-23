<template>
    <div class="RightList">
        <div class="SearchBox">
            <div class="Search">
        <div class="SearchTitle">面试</div>
        <div class="SearchCheck">
            <select class="choose1">
                <option value="">部门</option>
                <option value="qianduan">编程-前端</option>
                <option value="houduan">编程-后端</option>
                <option value="sheji">设计部</option>
                <option value="wenmi">文秘部</option>
            </select>

            <select class="choose2">
                <option value="">学院</option>
                <option value="qianduan">信息工程学院</option>
                <option value="houduan">智能工程学院</option>
                <option value="sheji">教师教育学院</option>
                <option value="wenmi">文学与传媒学院</option>
            </select>
        </div>
        <div class="SearchInput">
            <input class="SearchIpt"/>
            <button class="SearchBtn">搜索</button>
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

            <div class="RightFooterBox">
                <div class="RightFooter">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import RightItemOn from "./RightItemOn";
    // import RightItemOff from "./RightItemOff";

    export default {
        name: 'MemberMessage',
        components:{
        //    RightItemOn
        //    RightItemOff
        },
        data() {
            return {
               
            }
        },
        activated() {
            this.$bus.$emit('StageIconWhite')
        },
        deactivated() {
            this.$bus.$emit('StageIconGray')
        },
        mounted() {
           
        },
        methods: {
            SwitchMode() {
                if(this.$refs.switchMode.innerText === '批量模式 开'){
                    this.$refs.switchMode.innerText = '批量模式 关'
                    console.log('关');
                    this.$router.push({
                        path:'/CurrentStage1/RightItemOff'
                    })
                }else if(this.$refs.switchMode.innerText === '批量模式 关'){
                    this.$refs.switchMode.innerText = '批量模式 开'
                    console.log('开');
                    this.$router.push({
                        path:'/CurrentStage1/RightItemOn'
                    })
                }
            }
        }
    }
</script>

<style scoped>
    /* Search */
    .Search {
        width: 86vw;
        height: 90px;
        border-radius: 10px;
        min-width: 1653px;
    }

    .SearchTitle {
        width: 30%;
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
        width: 18%;
        height: 100%;
        position: relative;
        float: left;
    }

    .choose1 {
        height: 48px;
        width: 110px;
        border-radius: 10px;
        position: absolute;
        top: 23px;
        font-size: 23px;
        padding-left: 5px;
    }

    .choose2 {
        height: 48px;
        width: 110px;
        border-radius: 10px;
        position: absolute;
        top: 23px;
        left: 150px;
        font-size: 23px;
        padding-left: 5px;
    }

    .SearchInput {
        width: 42%;
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
    }

    .manage {
        width: 10%;
        height: 90px;
        outline: 1px solid red;
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

    .RightFooterBox {
        width: 86vw;
        height: 141px;
        outline: 1px solid red;
        min-width: 1653px;
    }

    /* RightFooter */
    .RightFooter {
        width: 86vw;
        height: 141px;
        min-width: 1653px;
    }
</style>