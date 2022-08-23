<template>
    <div class="consultCode">
        <div class="CCTitle">新生咨询群二维码</div>
        <div class="CodeImg">
            <div class="CodeImgBox">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar"> 
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
                <!-- <img :src="img"/>
                <span>网园工作室新生群1</span> -->
            </div> 
            <!-- <div class="addCode">
                <div class="plusX"></div>
                <div class="plusY"></div>
                <span>请输入群名</span>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        name:'ConsultCode',
        data() {
            return{
                imageUrl: ''
                // http://m2.biz.itc.cn/pic/new/n/57/15/Img5601557_n.jpg
                
            }
        },
        methods: {
             handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 50px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 230px;
        height: 230px;
        display: block;
    }

    .consultCode {
        width: 86vw;
        min-width: 1661px;
        height: 533px;
    }

    .CCTitle {
        width: 86vw;
        min-width: 1661px;
        height: 80px;
        outline: 1px solid green;
        font-size: 32px;
        padding-left: 67px;
        box-sizing: border-box;
        font-weight: bold;
        color: #333333;
    }

    .CodeImg {
        width: 86vw;
        min-width: 1661px;
        height: 453px;
        outline: 1px solid green;
        padding-left: 112px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }

    .CodeImgBox {
        outline: 1px solid green;
        position: relative;
        margin-right: 150px;
        width: 230px;
        height: 230px;
    }

    .CodeImgBox span {
        font-size: 25px;
        font-weight: bold;
        color: #333333;
        position: absolute;
        top: 259px;
        left: 7px;
    }

    .addCode {
        width: 230px;
        height: 230px;
        border: 1px dashed #797979;
        border-radius: 10px;
        position: relative;
    }

    .plusX{
        width: 50px;
        height: 50px;
        border: 0;
        border-top: 4px solid #D7D7D7;
        position: absolute;
        top: 113px;
        left: 90px;
    }

    .plusY {
        width: 50px;
        height: 50px;
        border: 0;
        border-left: 4px solid #D7D7D7;
        position: absolute;
        left: 113px;
        top: 90px;
    }

    .addCode span {
        font-size: 25px;
        color: #797979;
        position: absolute;
        top: 259px;
        left: 50px;
    }
</style>