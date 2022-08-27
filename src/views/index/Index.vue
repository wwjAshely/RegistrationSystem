<template>
    <div>
        <div class="HeaderBox">
            <WebHeader/>
        </div>

        <div class="List">
            <div class="LeftListBox">

                <div class="ItemBox" @click="clickList1">
                    <div class="LeftItemImg" :style="{'backgroundColor': (currentState == '成员信息' ? '#0694E4' : '#F9F9F9')}">
                        <i class="iconfont MemberIcon" ref="MemberIcon" :style="{'color': (currentState == '成员信息' ? '#fff' : '#666666')}">&#xe656;</i>
                    </div>
                    <div class="LeftItemTitle">成员信息</div>
                </div>

                <div class="ItemBox" @click="clickList2">
                    <div class="LeftItemImg" :style="{'backgroundColor': (currentState == '当前阶段' ? '#0694E4' : '#F9F9F9')}">
                        <i class="iconfont StageIcon" ref="StageIcon" :style="{'color': (currentState == '当前阶段' ? '#fff' : '#666666')}">&#xe681;</i>
                    </div>
                    <div class="LeftItemTitle">当前阶段</div>
                </div>

                <div class="ItemBox" @click="clickList3">
                    <div class="LeftItemImg" :style="{'backgroundColor': (currentState == '动态数据' ? '#0694E4' : '#F9F9F9')}">
                       <i class="iconfont DataIcon" ref="DataIcon" :style="{'color': (currentState == '动态数据' ? '#fff' : '#666666')}">&#xe8b9;</i>
                    </div>
                    <div class="LeftItemTitle">动态数据</div>
                </div>

                <div class="ItemBox">
                    <div class="LeftItemImg">
                        <i class="iconfont BackIcon">&#xe617;</i>
                    </div>
                    <div class="LeftItemTitle">返回其他系统</div>
                </div>

            </div>

            <div class="RightList">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import WebHeader from '../../components/WebHeader'
    import {mapState} from 'vuex';
    export default {
        name: 'IndexName',
        components:{
            WebHeader
        },
        data(){
            return {
            }
        },
        computed:{
            ...mapState(['currentState'])//从vuex那边获取当前栏目title
        },
        methods: {
            clickList1() {
                this.$router.push({
                    path:'/index/MemberMessage'
                })
                this.$store.state.currentState = '成员信息'
                localStorage.setItem('currentTitle',this.$store.state.currentState)
            },
            clickList2() {
                this.$router.push({
                    path:'/index/CurrentStage1/RightItemOn'
                })
                this.$store.state.currentState = '当前阶段'
                localStorage.setItem('currentTitle',this.$store.state.currentState)
            },
            clickList3() {
                this.$router.push({
                    path:'/index/DynamicData'
                })
                this.$store.state.currentState = '动态数据'
                localStorage.setItem('currentTitle',this.$store.state.currentState)
            }
        },
        mounted() {
            this.$store.state.currentState = localStorage.getItem('currentTitle')
        }
    }
</script>

<style>
    /* base */
    .HeaderBox{
        width:100vw;
        min-width: 1920px;
        height:75px;
    }

    .LeftListBox{
        width: 156px;
        height:100%;
        float: left;
        
    }

    .RightList {
        width: calc(100vw - 156px);
        height: 100%;
        background-color: #F2F3F4;
        min-width: 1764px;
        float: left;
        border-left: 1px solid #AAAAAA;
    }

    .List {
        width: 100vw;
        min-width:1920px;
        height: 100%;
        min-height: 1005px;
        position:absolute;
        left:0;
        top:75px;
        display: flex;
    }

    /* LeftList */
    .ItemBox {
        width:156px;
        height:152px;
        box-sizing: border-box;
        position: relative;
    }

    .LeftItemImg {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 35px;
        left: 50px;
        border-radius: 10px;
    }

    .LeftItemTitle {
        font-size: 22px;
        color: #383838;
        width: 100%;
        height: 27px;
        position: absolute;
        top: 88px;
        text-align: center;
        cursor: pointer;
    }

    /* icon */

    .MemberIcon {
        font-size:35px;
        color: #666666;
        line-height: 50px;
        margin-left: 2px;
        cursor: pointer;
    }

    .StageIcon{
        font-size:50px;
        color: #666666;
        cursor: pointer;
    }

    .DataIcon{
        font-size:45px;
        color: #666666;
        margin-left: 2px;
        line-height: 50px;
        cursor: pointer;
    }

    .BackIcon{
        font-size:42px;
        color: #666666;
        margin-left: 3px;
        line-height: 50px;
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
</style>