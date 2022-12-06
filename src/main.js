import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 引入css
import "normalize.css"
import "./assets/css/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)
app.mount('#app')


/**
 * 生成ssh
 * ssh-keygen -t rsa -C "自己的邮箱"
 * 查看ssh
 * cat ~/.ssh/id_rsa.pub
 * 
 * github生成一个密钥
 * settings=>SSH and GPG =>new SSH=>加上生成的ssh=>add KEY
 * 
 */