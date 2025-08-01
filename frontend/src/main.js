import "./assets/main.css";
import { createApp } from "vue";

import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleDollarToSlot,
  faMagnifyingGlass,
  faHeadphones,
  faEnvelope,
  faUser,
  faCartShopping,
  faPhoneVolume,
  faLocationDot,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faPhone,
  faEnvelopeOpen,
  faPlay,
  faTruckFast,
  faHeadset,
  faTruckRampBox,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import AOS from "aos";
import "aos/dist/aos.css";

import router from './Router'

AOS.init();

library.add(
  faCircleDollarToSlot,
  faMagnifyingGlass,
  faHeadphones,
  faEnvelope,
  faUser,
  faHeart,
  faCartShopping,
  faPhoneVolume,
  faLocationDot,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faPhone,
  faEnvelopeOpen,
  faPlay,
  faTruckFast,
  faHeadset,
  faCartShopping,
  faTruckRampBox,
  faArrowLeft,
  faArrowRight
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router)
app.mount("#app");



