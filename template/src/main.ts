import * as Vue from 'vue';
import { router } from './conf/routes';
import { NavbarComponent } from './components/navbar/navbar.component';

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
