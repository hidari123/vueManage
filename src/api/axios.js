// 二次封装axios 拦截器
import axios from 'axios'
import config from '../config/index'
// 设置配置 根据开发 和 生产环境不一样

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  constructor (baseUrl) {
    // this要创建的实例
    this.baseUrl = baseUrl
  }

  // 获取axios配置
  getInsideConfig () {
    const config = {
      // 全局配置
      baseURL: this.baseUrl,
      header: {}
    }
    return config
  }

  interceptor (instance) {
    // 添加请求拦截器
    instance.interceptors.request.use((config) => {
      console.log('拦截处理请求')
      // 在发送请求之前做些什么
      return config
    }, (error) => {
      // 对请求错误做些什么
      console.log(error)
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((response) => {
      console.log('处理响应')
      // 对响应数据做点什么
      return response.data
    }, (error) => {
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }

  // 创建实例 主方法
  request (options) {
    // 请求
    // /api/getList  /api/getHome
    const instance = axios.create()
    // 技巧
    options = { ...(this.getInsideConfig()), ...options }
    this.interceptor(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
