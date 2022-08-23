<template>
    <div class="time_address">
        <div class="TDTitle">面试信息</div>
        <div class="time">
            <span class="demonstration">时间：</span>
                <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                >
                </el-date-picker>
            <!-- <input/>&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;&nbsp;<input/> -->
        </div>
        <div class="address">
            地点：<input/>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TimeAddress',
        data() {
            return {
                value1: ''
            };
        }
    }
</script>

<style scoped>
    .time_address {
        width: 86vw;
        min-width: 1661px;
        height: 388px;
        outline: 1px solid red;
    }

    .TDTitle {
        width: 86vw;
        min-width: 1661px;
        height: 144px;
        outline: 1px solid red;
        color: #000;
        font-size: 32px;
        font-weight: bold;
        padding-left: 67px;
        padding-top: 70px;
        box-sizing: border-box;
    }

    .time {
        width: 86vw;
        min-width: 1661px;
        height: 96px;
        outline: 1px solid red;
        font-size: 25px;
        font-weight: bold;
        padding-left: 67px;
        box-sizing: border-box;
        color: #333333;
    }

    .time input {
        width: 250px;
        height: 53px;
        border-radius: 5px;
        font-size: 23px;
    }

    .address {
        width: 86vw;
        min-width: 1661px;
        height: 148px;
        outline: 1px solid red;
        outline: 1px solid red;
        font-size: 25px;
        font-weight: bold;
        padding-left: 67px;
        box-sizing: border-box;
        color: #333333;
    }

    .address input {
        width: 330px;
        height: 53px;
        border-radius: 5px;
        font-size: 23px;
    }
</style>