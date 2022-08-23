<template>
    <div class="backBox">
        <div class="WyLogo">
            <img src="../../assets/HomeLogo.png"/>
        </div>
        <div class="WelcomeText">
            <div class="text1">Hello,</div>
            <div class="text2">欢迎使用报名系统</div>
            <div class="text3">Sincerely at your service!</div>
        </div>
        <div class="BgImgBox">
            <img src="../../assets/BgImg.png" class="BgImg"/>
            <img src="../../assets/BgImg1.png" class="BgImg1"/>
            <img src="../../assets/BgImg2.png" class="BgImg2"/>
        </div>
        <div class="ToLogin" @click="Gologin()">
            <button class="LoginBtn">GO &nbsp;<i class="iconfont ArrowIcon">&#xe60b;</i></button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'HomeName',
        methods: {
            Gologin(){
                this.$router.push({
                    path:'/index'
                })
            }
        },
    }
</script>

<style scoped>
    .backBox {
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        position: absolute;
        left:0;
        top: 0;
    }

    .WyLogo {
        /* outline: 1px solid red; */
        position: absolute;
        left: 60px;
        top: 29px;
    }

    .WelcomeText {
        position: absolute;
        left: 148px;
        top: 357px;
    }

    .text1 {
        color: #a0a0a0;
        font-size: 94px;
        font-weight: 600;
    }

    .text2 {
        color: #36a8e8;
        font-size: 94px;
        font-family: 'Adobe 黑体 Std';
        font-weight: 600;
        letter-spacing: 13px;
    }

    .text3{
        font-size: 34px;
        color: #b4b4b4;
    }

    .BgImgBox {
        position: absolute;
        right: 0;
    }

    .BgImg {
        position: absolute;
        right: 0;
    }    

    .BgImg1 {
        position: absolute;
        right: 0;
    }

    .BgImg2 {
        position: absolute;
        right: 0;
    }

    .ToLogin {
        position: absolute;
        right: 330px;
        bottom: 160px;
    }

    .LoginBtn {
        width: 398px;
        height: 124px;
        background-color: #36a8e8;
        border-radius: 62px;
        border: 0px;
        font-size: 66px;
        color: #fff;
    }

    .ArrowIcon {
        font-size: 70px;
    }
</style>