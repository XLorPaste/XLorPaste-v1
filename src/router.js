import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/index', 
            name: 'index',
            component: resolve => require(['./components/xlor-editor.vue'], resolve)  
        },
        { 
            path: '', 
            redirect: '/index'
        },
        // {
        //     path: '/ide',
        //     name: 'ide',
        //     component: resolve => require(['./components/xlor-ide.vue'], resolve)  
        // },
        {
            path: '/:id',
            component: resolve => require(['./components/xlor-view.vue'], resolve)
        },
        {
            path: '*',
            component: resolve => require(['./components/xlor-error.vue'], resolve)
        }
    ]
});
