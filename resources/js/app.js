import '../css/app.css'

import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import VueSelect from "vue-select"

const appName = import.meta.env.VITE_APP_NAME || 'Jelambu'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('v-select', VueSelect)
            .mount(el)
    },
    title: title => `${title} - ${appName}`,
    progress: {
        color: '#4B5563',
    },
})
