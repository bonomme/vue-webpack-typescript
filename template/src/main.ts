import * as Vue from 'vue';
import { HomeComponent } from './components/home';
import { router } from './conf/routes';
import { NavbarComponent } from './components/navbar/navbar.component';

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
