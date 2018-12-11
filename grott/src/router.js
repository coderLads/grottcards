import Vue from 'vue';
import Router from 'vue-router';

// import views
import Home from '@/views/Home.vue';
import Quiz from '@/views/Quiz.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/quiz/:id',
            component: Quiz
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});