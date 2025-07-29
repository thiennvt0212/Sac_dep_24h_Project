import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faCircleDollarToSlot, faMagnifyingGlass, faHeadphones, faEnvelope, faUser,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCircleDollarToSlot, faMagnifyingGlass, faHeadphones, faEnvelope, faUser, faHeart, faCartShopping)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
