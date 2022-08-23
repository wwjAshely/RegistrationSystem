<template>
    <div>
        <div class="HeaderBox">
            <WebHeader/>
        </div>

        <div class="List">
            <div class="LeftListBox">

                <div class="ItemBox">
                    <router-link class="LeftItemImg" active-class="AClass" to="/MemberMessage">
                        <i class="iconfont MemberIcon" ref="MemberIcon">&#xe656;</i>
                    </router-link>
                    <div class="LeftItemTitle">成员信息</div>
                </div>
                <div class="ItemBox">
                    <router-link class="LeftItemImg" active-class="AClass" to="/CurrentStage1">
                        <i class="iconfont StageIcon" ref="StageIcon">&#xe681;</i>
                    </router-link>
                    <div class="LeftItemTitle">当前阶段</div>
                </div>
                <div class="ItemBox">
                    <router-link class="LeftItemImg" active-class="AClass" to="/DynamicData">
                       <i class="iconfont DataIcon" ref="DataIcon">&#xe8b9;</i>
                    </router-link>
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
    export default {
        name: 'IndexName',
        components:{
            WebHeader
        },
        mounted() {
            this.$bus.$on('MemberIconWhite',()=>{
                this.$refs.MemberIcon.style.color='#fff';
            }),
            this.$bus.$on('MemberIconGray',()=>{
                this.$refs.MemberIcon.style.color='#666666';
            }),
            this.$bus.$on('StageIconWhite',()=>{
                this.$refs.StageIcon.style.color='#fff';
            }),
            this.$bus.$on('StageIconGray',()=>{
                this.$refs.StageIcon.style.color='#666666';
            }),
            this.$bus.$on('DataIconWhite',()=>{
                this.$refs.DataIcon.style.color='#fff';
            }),
            this.$bus.$on('DataIconGray',()=>{
                this.$refs.DataIcon.style.color='#666666';
            })
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
        background-color: #F9F9F9;
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
    .AClass{
        background-color: #0694E4;
    }

    .MemberIcon {
        font-size:35px;
        color: #fff;
        line-height: 50px;
        margin-left: 2px;
    }

    .StageIcon{
        font-size:50px;
        color: #666666;
    }

    .DataIcon{
        font-size:45px;
        color: #666666;
        margin-left: 2px;
        line-height: 50px;
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