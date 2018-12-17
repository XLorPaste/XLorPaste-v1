import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
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
