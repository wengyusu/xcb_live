// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// const service = axios.create({ //baseURL: baseUrls.ybapi,           // api的base_url
// timeout: 60000, // 请求超时时间
// transformRequest: [function (data) {

// // Do whatever you want to transform the data
// let ret = ''
// for (let it in data) {
// ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
// }
// return ret
// }],
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
// },
// })

// // request拦截器
// service.interceptors.request.use(config => {
// // Do something before request is sent
// if (config.url.indexOf('ips_api') == -1) {
//  config.headers.token = window.localStorage['yb_token'];
//  }

//   //debugger
//    return config
//  }, error => {
//   // Do something with request error
//   return Promise.reject(error)
// })

// // respone拦截器
// service.interceptors.response.use(
//  response => {
//      return response;
//   },
//  error => {
//    return Promise.reject(error)
//   }
//  )

Vue.prototype.$ajax = axios;