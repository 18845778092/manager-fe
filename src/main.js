import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request.js'

const app=createApp(App)
app.config.globalProperties.$request=request
app.use(router)
app.use(ElementPlus)

app.mount('#app')
