<template>
    <div class="ListBox">
        <div class="ItemBox">
            <div class="LeftItemImg">
                <img src="../assets/user1.png"/>
            </div>
            <div class="LeftItemTitle">成员信息</div>
        </div>
        <div class="ItemBox">
            <div class="LeftItemImg">
                <img src="../assets/page1.png"/>
            </div>
            <div class="LeftItemTitle">当前阶段</div>
        </div>
        <div class="ItemBox">
            <div class="LeftItemImg">
                <img src="../assets/data1.png"/>
            </div>
            <div class="LeftItemTitle">动态数据</div>
        </div>
        <div class="ItemBox">
            <div class="LeftItemImg">
                <img src="../assets/back1.png"/>
            </div>
            <div class="LeftItemTitle">返回其他系统</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LeftList',
        data() {
            return {
               
            }
        }
    }
</script>

<style scoped>
   .ListBox{
    border: 1px solid #AAAAAA;
    box-sizing: border-box;
    width:156px;
   }

   .ItemBox {
        width:156px;
        height:152px;
        background-color:pink;
        border: 1px solid gray;
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
</style>