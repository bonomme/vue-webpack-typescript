import * as Vue from 'vue';
import { router } from './conf/routes';
import { NavbarComponent } from './components/navbar/component/navbar.component';

new Vue({
  el: 'main-app',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
