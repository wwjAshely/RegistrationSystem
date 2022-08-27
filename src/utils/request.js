import axios from 'axios'
// import {getToken} from '@/utils/token'

const service = axios.create({
	baseURL : 'http://124.222.28.28:7788/',
	timeout : 1000,
	header:{'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzYWZlLWNvZGUiOiJjODc2NDM2MTI3Mzc0Y2Y4OTYyY2VlYjUyMzM3MWRjMiIsImlzcyI6Indhbmd5dWFuIiwiZXhwIjoxNjYxODYxNTk2LCJ1c2VySWQiOjJ9.gLw7TI0uWEs-a-gAjoMmcItn0SOrsWNzxAq2jOEWaww'}
})

//请求拦截器
service.interceptors.request.use(
	// Config =>{
	// 	//检查enrollToken(报名系统token)是否过期
	// 	if(getToken()){
	// 		//enrollToken未过期
	// 	}else{
	// 		//enrollToekn过期
	// 	}
	// }
)

//响应拦截器
service.interceptors.response.use()


export default service