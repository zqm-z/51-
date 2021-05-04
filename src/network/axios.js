import Axios from 'axios'

// 实例化 基础的配置
let axios = new Axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    timeout: 5000
})
export default axios