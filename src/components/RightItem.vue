<template>
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
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>12345678901</div>
            <div>面试</div>
            <div>信息工程学院</div>
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
        border-top: 1px solid #AAAAAA;
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