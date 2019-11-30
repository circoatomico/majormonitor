 
import Vue from "vue";
import VueRouter from "vue-router";
import Notifications from 'vue-notification'
import App from "./App"; 
import VModal from 'vue-js-modal' 
import routes from "./routes/routes"; 
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";  
import MaterialDashboard from "./material-dashboard";
import VueCookies from 'vue-cookies' 

// import VueMaterialComponents from "vue-material-components"; 
// import 'vue-material-components/assets/css/materialize.min.css' 

import Chartist from "chartist";

import VueResource from 'vue-resource'; 
import VueTimepicker from 'vue2-timepicker' 
import 'vue2-timepicker/dist/VueTimepicker.css'




const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;

// Vue.use(moment)

Vue.config.productionTip = false;

if(Vue.config.productionTip){

}else{
  Vue.prototype.$apiurl = 'http://127.0.0.1:8000/api/'
}

Vue.use(VueTimepicker); 
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueResource);
// Vue.use(Vue);
// Vue.use(VueMaterialComponents);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueCookies);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
