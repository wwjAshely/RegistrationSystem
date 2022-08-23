<template>
    <div class="RightItemBox">
        <div class="RightItemTitle">
            <div>姓名</div>
            <div>部门</div>
            <div>年级</div>
            <div>性别</div>
            <div>考核进度</div>
            <div>学院</div>
            <div>状态</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <input type="checkbox"/>
            </div>
        </div>
        <div class="RightItem">
            <div>陈佳贤</div>
            <div>设计</div>
            <div>20</div>
            <div>女</div>
            <div>面试</div>
            <div>信息工程学院</div>
            <div>未通过</div>
            <div>
                <a class="isPass">
                    <input type="checkbox"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RightItemOff',
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
        width: 12.5%;
        height: 82px;
        color: #333333;
        font-size: 25px;
        font-weight: bold;
        line-height: 82px;
        text-align: center;
    }

    .RightItemTitle input {
        width: 30px;
        height: 30px;
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
    }

    .pass {
        width: 74px;
        height: 40px;
        background-color: #0584CC;
        border: 0;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        margin-right: 15px;
    }

    .nopass {
        width: 93px;
        height: 40px;
        border: 0;
        color: #000;
        background-color: #ECECEC;
        font-size: 18px;
        border-radius: 5px;
    }
</style>