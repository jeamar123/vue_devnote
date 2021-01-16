import Vue from 'vue';
import VCalendar from 'v-calendar';
import VueSweetalert2 from 'vue-sweetalert2';
import VueMoment from 'vue-moment';
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import $ from 'jquery'; 
import 'alpinejs';


/*  
  *
  * FontAwesome Library
  *
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { 
  faTwitter,
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faHome,
  faTwitter,
  faLinkedin,
  faFacebookSquare,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)




import App from './App.vue';
import router from './router';



// import 'v-calendar/lib/v-calendar.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/styles/font.css';
import './assets/styles/index.css';



const options = {
  confirmButtonColor: '#0392CF',
  cancelButtonColor: '#FF5959',
};




Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(VCalendar);
Vue.use(VueSweetalert2,options);
Vue.use(VueMoment);





Vue.config.productionTip = false;

// const $ = require('jquery');
window.$ = $; 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
