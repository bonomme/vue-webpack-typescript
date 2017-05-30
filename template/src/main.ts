import * as Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './conf/routes';
import { NavbarComponent } from './components/navbar/component/navbar.component';
import { HomeComponent } from './components/home/component/home.component';

new Vue({
  el: '#main-app',
  router: router,
  components: {
    'navbar': NavbarComponent,
    'home': HomeComponent
  }
});
