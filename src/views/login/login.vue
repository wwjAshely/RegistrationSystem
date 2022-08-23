<template>
    <div>
        <div class="loginContent">
            <div class="background">
                <div class="scanBox">
                    <!-- <vue-qr ref="Qrcode" 
                            :text= "getQR"
                            class="QR"
                            qid="testQrId"
                            :logoSrc="qr.logoSrc"
                            style="display: block;">
                    </vue-qr> -->
                    <img src="https://wy-official-website.qiniu.wangyuan.info/footpage.png" class="footpage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginName'
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    /* @media screen and (max-width: 1600px) {
        html,body{
            width: 100%;
            height: 100%;
            font-size: 13.33px;
        }
    } */

    .loginContent{
        width: 100%;
        min-height: 100vh;
        display: flex;
        background: #f2f3f4;
        overflow: hidden;
    }

    .background{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .scanBox {
        background-color: rgb(255, 255, 255);
        box-shadow: 0rem 0.5rem 2.94rem 0.1225rem rgba(44, 128, 175, 0.14);
        width: 36.25rem;
        height: 51.25rem;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2.5rem;
        margin-bottom: 7.8125rem;;
    }
</style>