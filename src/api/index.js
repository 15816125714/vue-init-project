import Vue from 'vue';
import axios from 'axios';
import router from '../router';
import {global, domain} from '../config/global.js';

const service = axios.create({
  // 设置超时时间
  timeout: 60000
})

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(config => {
  config.headers.token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem(global.USER_INFO)) || {}
  // 补全接口绝对路径
  if (!config.url.match(/http/gi)) config.url = domain.ROOT_API + config.url
  return config
})

/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
  const { data = {}, status: code } = response;
  if (code === 200) {
    const { data: resData, status, message } = data;
    // if (status !== 200) {
    //   Vue.prototype.$toast.center(message);
    // }
    // if ([401, 403].includes(parseInt(status))) { // 登录超时 - 返回登录
    //   router.push('/login');
    //   localStorage.clear();
    //   location.href = "/login";
    //   return false
    // }
    // 返回结果
    if (status === 200) {
      return Promise.resolve(resData)
    }
    return Promise.reject(response);
  } else {
    return Promise.reject(response)
  }
}, error => {
  return Promise.reject(error)
})

export default service
