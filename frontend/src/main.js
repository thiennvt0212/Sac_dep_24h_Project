import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircleDollarToSlot,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faPhone,
  faEnvelopeOpen,
  faPlay,
  faTruckFast,
  faHeadset,
  faCartShopping,
  faTruckPlane,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

library.add(
  faCircleDollarToSlot,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
  faPhone,
  faEnvelopeOpen,
  faPlay,
  faTruckFast,
  faHeadset,
  faCartShopping,
  faTruckPlane
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
