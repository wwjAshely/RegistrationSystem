<template>
    <div class="RightList">
        <div class="InterviewInfoBox">
            <div class="InterviewInfo">

                <div class="time_address">
                    <div class="TDTitle">面试信息</div>
                    <div class="time">
                        <span class="demonstration">时间：</span>
                        <el-date-picker
                            v-model="value1"
                            type="datetimerange"
                            range-separator="—"
                            :start-placeholder="dynamicData.startTime"
                            :end-placeholder="dynamicData.endTime"
                            @change="instantPick1"
                            size="large"
                        >
                        </el-date-picker>
                        <!-- <input/>&nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;&nbsp;<input/> -->
                    </div>
                    <div class="address">
                        地点：<input type="text" v-model="addressIpt" @focus="focusIpt" @blur="blurIpt"/>
                    </div>
                </div>

                <div class="consultCode">
                    <div class="CCTitle">新生咨询群二维码</div>
                    <div class="CodeImg">
                        <div class="CodeImgBox">
                            <el-upload
                                action="http://124.222.28.28:7788/api/bmOfInfo/updateInterview"
                              
                                list-type="picture-card"
                                :show-file-list="true"
                                :file-list="files"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove"
                                :on-change="handleChange"> 
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
                    <div class="submit">
                        <button ref="submitBtn" class="submitBtn" @mousedown="clickDown" @mouseup="clickUp" @mouseenter="hoverChange" @mouseleave="clickLeave">提交</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState} from 'vuex'

    export default {
        name: 'DynamicData',
        components:{
          
        },
        data() {
            return {
                value1:'',
                addressIpt:'',
                dialogImageUrl: '',
                dialogVisible: false,
                files:[{
                    qr_url:'http://124.222.28.28:7788/api/file/c2800c97cb41b8f6eb5ba97e8ef683ff.jpg',
                    startTime: '2022-05-24', 
                    endTime: '2022-08-24', 
                    place: '网园咨询工作室',
                }
                ]
            }
        },
        activated() {
            // 获取报名时间、地点、二维码
           axios({
                method: 'get',
                url: 'http://124.222.28.28:7788/api/bmOfInfo/interview',
                headers: {
                    enrollToken: localStorage.getItem('enrollToken')
                }
           }).then(
                response => {
                    this.$store.state.dynamicData = response.data.data
                    this.addressIpt = this.$store.state.dynamicData.place
                }
           )

            // 把
        },
        computed: {
            ...mapState(['dynamicData']),
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
            },
            hoverChange() {
                this.$refs.submitBtn.style.borderColor = '#c6e2ff'
            },
            clickDown() {
                this.$refs.submitBtn.style.borderColor = '#3a8ee6'
            },
            clickUp() {
                this.$refs.submitBtn.style.borderColor = '#c6e2ff'
                console.log(this.$store.state.dateTimeStart);
                console.log(this.$store.state.dateTimeEnd);
                console.log(this.addressIpt);
                console.log(this.$store.state.uploadImg);
                axios({
                    method: 'get',
                    headers:{
                        enrollToken: localStorage.getItem('enrollToken')
                    },
                    data:{
                        startTime: this.$store.state.dateTimeStart,
                        endTime: this.$store.state.dateTimeEnd,
                        Qr: this.$store.state.uploadImg,
                        place: this.addressIpt
                    }
                }).then(
                    response => {
                        console.log(response);
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            clickLeave() {
                this.$refs.submitBtn.style.borderColor = '#a9a8a8'
            },
            // 文件状态改变时的钩子
            handleChange(file,fileList) {
                console.log(file,fileList);
                this.$store.state.uploadImg = file.url
            },
            instantPick1(obj) {
                var a = obj[0]
                var Month1 = a.getMonth() + 1
                var Day1 = a.getDate();
                var Time1 = a.toLocaleTimeString('chinese',{hour12:false})
                var MonthDate1
                var DayDate1
                if(Month1 < 10) {
                    MonthDate1 = '0' + Month1;
                }else {
                    MonthDate1 = Month1
                }
                if(Day1 < 10) {
                    DayDate1 = '0' + Day1
                }else {
                    DayDate1 = Day1
                }
                this.$store.state.dateTimeStart = a.getFullYear() + '-' + MonthDate1 + '-' + DayDate1 + ' ' + Time1
                console.log('有了吗',this.$store.state.dateTimeStart);


                var b = obj[1]
                console.log(b);
                var Month2 = b.getMonth() + 1
                var Day2= b.getDate();
                var Time2 = b.toLocaleTimeString('chinese',{hour12:false})
                var MonthDate2
                var DayDate2
                if(Month2 < 10) {
                    MonthDate2 = '0' + Month2;
                }else {
                    MonthDate2 = Month2
                }
                if(Day2 < 10) {
                    DayDate2 = '0' + Day2
                }else {
                    DayDate2 = Day2
                }
                this.$store.state.dateTimeEnd = b.getFullYear() + '-' + MonthDate2 + '-' + DayDate2 + ' ' + Time2
                console.log('有了吗',this.$store.state.dateTimeEnd);
            },
            focusIpt(e) {
                e.currentTarget.style.border="1px solid #6c95c9"
            },
            blurIpt(e) {
                e.currentTarget.style.borderColor="#000"
            }
        }
    }
</script>

<style scoped>
    *{
		user-select: none;
	}
    
    .RightList {
        width: calc(100vw - 156px);
        height: 100%;
        min-width: 1764px;
    }

    .InterviewInfoBox {
        min-width: 1661px;
        width: 86vw;
        height: 921px;
        background-color: #fff;
        border-radius: 10px;
        margin-left: 4vw;
        margin-top: 55px;
    }

    .InterviewInfo {
        width: 86vw;
        min-width: 1661px;
        height: 921px;
    }

    /* TimeAddress */
    .time_address {
        width: 86vw;
        min-width: 1661px;
        height: 388px;
    }

    .TDTitle {
        width: 86vw;
        min-width: 1661px;
        height: 144px;
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
        font-size: 25px;
        font-weight: bold;
        padding-left: 67px;
        box-sizing: border-box;
        color: #333333;
    }

    .address {
        width: 86vw;
        min-width: 1661px;
        height: 148px;
        /* outline: 1px solid red; */
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
        outline: 0;
    }

    /* 时间输入框 */
    .time >>> .el-input__inner {
        width: 550px;
        height: 53px;
        border-radius: 5px;
        font-size: 43px;
        border: 1px solid #797979;
    }

    .time >>> .el-date-picker__header-label {
        font-size: 30px;
    }

    /* ConsultCode */
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
        height: 250px;
        padding-left: 112px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }

    .CodeImgBox {
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

    .submit {
        width: 86vw;
        min-width: 1661px;
        height: 200px;
    }

    .submitBtn {
        width: 270px;
        height:70px;
        border-radius: 20px;
        margin-top: 60px;
        margin-left: 45%;
        font-size: 35px;
        border: 1px solid #a9a8a8;
        background-color: #fff;
        cursor: pointer;
    }

    .submitBtn:hover {
        background-color: #ecf5ff;
        color: #47a2ff;
    }
</style>