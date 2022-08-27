import request from './request.js'

export default{
	getinterview,//获取报名时间、地点、二维码图片
	getSelectRegister,//筛选数据
	getsearchInputRegister,//搜索框查询数据
	getUserlist,//获取用户列表
}

//获取enrollToken接口
//检查enrollToken是否过期
//返回新系统接口
//操作数据通过和不通过接口
//修改动态数据接口
//获取所有成员信息的接口


//获取报名时间、地点、二维码图片
async function getinterview(){
	return new Promise((resolve,reject)=>{
		request.get('api/interview').then(res=>{resolve(res)}).catch(err=>{reject(err)})
	})
}

//筛选数据(记得传参数)
async function getSelectRegister(data){
	return new Promise((resolve,reject)=>{
		request.get('api/user/sift',{
			data:data
		}).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}

//搜索框查询数据(记得传参)
async function getsearchInputRegister(data){
	return new Promise((resolve,reject)=>{
		request.get('api/user/search',{
			data:data
		}).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}

//查询对应阶段用户列表(记得传参)
async function getUserlist(data){
	return new Promise((resolve,reject)=>{
		request.get('api/user/stage',{
			data:data
		}).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
