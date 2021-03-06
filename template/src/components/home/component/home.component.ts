import Vue, * as VueTypes from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('../template/home.template.html')
})

export class HomeComponent extends Vue {
    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/bonomme/vue-webpack-typescript';
    mode: string = process.env.ENV;
}
