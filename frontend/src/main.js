import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

// Thêm icon vào thư viện
library.add(faCircleDollarToSlot)

const app = createApp(App)

// Đăng ký component font-awesome-icon toàn cục
app.component('font-awesome-icon', FontAwesomeIcon)

// Sử dụng router
app.use(router)

// Mount app vào #app
app.mount('#app')
