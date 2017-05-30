import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';

@Component({
    template: '../template/navbar.html'
})
export class NavbarComponent extends Vue {
    links = [
        new navLink("Home", "/")
    ];

    @watch('$route.path')
    pathChanged() {
    }

    mounted() {
    }
}

class navLink{
    name: string;
    path: string;

    constructor(name: string, path: string){
        this.name = name;
        this.path = path;
    }
}
