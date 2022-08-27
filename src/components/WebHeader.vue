<template>
    <div class="header">
        <img :src="imgData[0].src">
        <h1>报名系统后台</h1>
    </div>
</template>

<script>
    export default {
        name: 'WebHeader',
        data() {
            return {
                imgData: [
                    {title:'img1',src:require("@/assets/WyLogo.png")}
                ]
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100vw;
        min-width: 1920px;
        border: 1px solid #AAAAAA;
        box-sizing: border-box;
        height:75px;
        position:absolute;
        top:0;
        left:0;
    }

    .header img{
        position:absolute;
        left:31px;
        top:13px;
    }

    .header h1{
        position:absolute;
        left:118px;
        /* line-height: 75px; */
        color: #4A5A72;
        cursor: default;
    }
</style>