<template>
    <div class="Search">
        <div class="SearchTitle">成员信息</div>
        <div class="SearchCheck">
            <select class="choose1" placeholder="部门">
                <option value="">部门</option>
                <option value="" v-for="item in options" :key = 'item.value'>{{item.label}}</option>
            </select>
             <!-- <el-select v-model="value" placeholder="部门" class="choose1">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                </el-option>
            </el-select> -->

            <select class="choose2">
                <option value="">学院</option>
                <option value="" v-for="item in colleges" :key = 'item.id'>{{item.value}}</option>
            </select>
        </div>
        <div class="SearchInput">
            <input class="SearchIpt"/>
            <button class="SearchBtn">搜索</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchName',
        data() {
            return {
                options: [
                    {
                    value:'wenmi',
                    label: '文秘部'
                    }, 
                    {
                    value:'sheji',
                    label: '设计部'
                    }, 
                    {
                    value:'qianduan',
                    label: '编程-前端'
                    },
                     {
                    value:'houduan',
                    label: '编程-后端'
                    }
                ],
                colleges: [
                    {value: '信息工程学院',id:0},
                    {value: '智能工程学院',id:1},
                    {value: '文学与传媒学院',id:2},
                    {value: '教师教育学院',id:3}
                ]
            }
        }
    }
</script>

<style scoped>
   .Search {
        width: 86vw;
        height: 90px;
        border-radius: 10px;
        min-width: 1653px;
        display: flex;
        flex-direction: row;
    }

    .SearchTitle {
        width: 520px;
        height: 100%;
        font-size: 36px;
        color: #333333;
        font-weight: bold;
        line-height: 90px;
        padding-left: 50px;
        cursor: default;
    }

    .SearchCheck {
        width: 305px;
        height: 100%;
        position: relative;
        /* outline: 1px solid red; */
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
        width: 900px;
        height: 100%;
        position: relative;
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
</style>
