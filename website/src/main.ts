import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faArrowRight,faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faArrowRight);
library.add(faArrowUp);
library.add(faArrowDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
