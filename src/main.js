import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 引入css
import "normalize.css"
import "./assets/css/index.css"

// 导入vant

import { IndexBar, IndexAnchor,Cell } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(IndexBar)
app.use(IndexAnchor)
app.use(Cell)
app.use(pinia)
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