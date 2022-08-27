<template>
    <div class="consultCode">
        <div class="CCTitle">新生咨询群二维码</div>
        <div class="CodeImg">
            <div class="CodeImgBox">
                <el-upload
                    action="http://124.222.28.28:7788/api/bmOfInfo/updateInterview"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"> 
                    <i class="el-icon-plus"></i>
                </el-upload>
                <!-- 弹窗预览 -->
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                
                <!-- <span>网园工作室新生群1</span> -->
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
                dialogImageUrl: '',
                dialogVisible: false
                
            }
        },
         methods: {
            // on-remove 是文件列表中移除文件时执行的
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            // 预览时执行的
            handlePictureCardPreview(file) {
                console.log(file);
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>
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
        /* outline: 1px solid green; */
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
        width: 2000px;
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

    .CodeImgBox >>> .el-upload {
        width:230px;
        height: 230px;
        background-color: #fff;
        padding-top: 50px;
    }

    .CodeImgBox >>> .el-icon-plus {
        font-size: 70px;
        color: #D7D7D7;
    }

    .CodeImgBox >>> .el-upload-list--picture-card .el-upload-list__item {
        width: 230px;
        height: 230px;
        margin-right: 90px;
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