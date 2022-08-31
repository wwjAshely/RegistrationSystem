<template>
	<div class="header">
		<div>
			<img src="../assets/u2.png" alt="">
			<span class="Title">报名系统后台</span>
		</div>
		<div class="logoutBoutton">
			<i class="iconfont1">&#xe97f;</i>
			<span class="logtitle" @click="clickquitButton()">退出登录</span>
		</div>
	</div>
</template>

<script>
	// import '../style/font/iconfont.js'
	export default{
		name:'comHead',
		methods:{
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

<style>
	*{
		user-select: none;
	}
	
	.header{
		width: 100%;
		height: 5rem;
		background: rgba(255, 255, 255, 1);
		padding-left: 1.875rem;
		padding-right: 1.875rem;
		padding-top: 0.9375rem;
		padding-bottom: 0.9375rem;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-self: center;
	}
	.header .Title{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-weight: 700;
		font-style: normal;
		letter-spacing: 0.0375rem;
		color: #0685CC;
		font-size: 2rem;
		vertical-align: middle;
		margin-left: 1.375rem;
	}
	.header img{
		width: 3.125rem;
		height: 3.125rem;
		vertical-align: middle;
	}
	.logoutBoutton{
		/* width: 6.625rem; */
		cursor: pointer;
	}
	.logoutBoutton:hover .logtitle,.logoutBoutton:hover i{
		color:#0e76b1;
	}
	.logoutBoutton span{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-style: normal;
		font-size: 1.125rem;
		letter-spacing: 0.125rem;
		line-height: 2.625rem;
		color: #000000;
	}
	.logoutBoutton .icon{
		font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
		font-weight: 700;
		font-style: normal;
		font-size: 1.125rem;
		line-height: 2.625rem;
		color:#000000;
		margin-right: 0.3125rem;
	}
</style>
