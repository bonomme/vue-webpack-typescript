import * as Vue from 'vue';
import VueRouter from 'vue-router';
import { HomeComponent } from '../components/home';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
      { path: '/', component: HomeComponent }
  ]
});