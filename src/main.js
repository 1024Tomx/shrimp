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

import vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vant)
// app.use(ElementPlus)

app.mount('#app')


/**
 * git init
 * git add .
 * git commit -m "备份"
 * git remote -v  查看关联
 * git remote add origin ""
 * git push --set-upstream "当前git仓库的地址" master
 * git push
 * 
 */

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