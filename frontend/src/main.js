import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import router from './router';

library.add(faCircleDollarToSlot, faArrowLeft, faArrowRight)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
