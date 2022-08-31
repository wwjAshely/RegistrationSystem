<template>
    <div class="header">
		<div>
			<img :src="imgData[0].src" alt="">
			<span class="Title">报名系统后台</span>
		</div>
		<div class="logoutBoutton">
			<i class="iconfont1">&#xe97f;</i>
			<span class="logtitle" @click="clickquitButton()">退出登录</span>
		</div>
	</div>
    <!-- <div class="header">
        <img :src="imgData[0].src">
        <h1>报名系统后台</h1>
    </div> -->
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
        },
        methods: {
            clickquitButton(){
				console.log(1)
				//1.弹窗提示退出登录
				//2.删除本地缓存
				//3.跳转到启动页
				localStorage.clear()
				alert("退出登录，并已清除缓存")
				this.$router.push({
					name:'start'
				})
			}
        }
    }
</script>

<style scoped>
	*{
		user-select: none;
	}
    /* .header{
        width: 100vw;
        min-width: 1920px;
        border: 1px solid #AAAAAA;
        box-sizing: border-box;
        height:75px;
        position:absolute;
        top:0;
        left:0;
    }

    .header .Title{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-weight: 700;
		font-style: normal;
		letter-spacing: 0.0375rem;
		color: #4A5A72;
		font-size: 2rem;
		vertical-align: middle;
		margin-left: 1.375rem;
	}

    .header img{
        position:absolute;
        left:31px;
        top:13px;
    } */

    /* .header h1{
        position:absolute;
        left:118px;
        color: #4A5A72;
        cursor: default;
    } */


    .header{
		width: 100vw;
        min-width: 1900px;
		height: 75px;
		background: rgba(255, 255, 255, 1);
        border: 1px solid #AAAAAA;
		/* padding-left: 1.875rem;
		padding-right: 1.875rem;
		padding-top: 0.9375rem;
		padding-bottom: 0.9375rem; */
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-self: center;
        position:absolute;
        left: 0;
        top: 0;
	}
	.header .Title{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-weight: 700;
		font-style: normal;
		letter-spacing: 0.0375rem;
		color: #4A5A72;
		font-size: 2rem;
		vertical-align: middle;
		margin-left: 1.375rem;
        position:absolute;
        left:100px;
        line-height: 75px;
	}
	.header img{
		width: 3.125rem;
		height: 3.125rem;
		vertical-align: middle;
        position:absolute;
        left:31px;
        top:13px;
	}
	.logoutBoutton{
		/* width: 6.625rem; */
		cursor: pointer;
        margin-right:50px;
	}
	.logoutBoutton:hover .logtitle,.logoutBoutton:hover i{
		color:#0e76b1;
	}
	.logoutBoutton span{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-style: normal;
		font-size: 1.125rem;
		letter-spacing: 0.125rem;
		line-height: 75px;
		color: #000000;
	}
	.logoutBoutton .icon{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-weight: 700;
		font-style: normal;
		font-size: 1.125rem;
		line-height: 75px;
		color:#000000;
		margin-right: 0.3125rem;
	}
</style>