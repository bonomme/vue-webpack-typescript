import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
    template: require('../template/navbar.template.html')
})

export class NavbarComponent extends Vue {
    links = [
        new NavLink('Home', '/')
    ];

    @Watch('$route.path')

    pathChanged() {
    }

    mounted() {
    }
}

class NavLink {
    name: string;
    path: string;

    constructor(name: string, path: string) {
        this.name = name;
        this.path = path;
    }
}
