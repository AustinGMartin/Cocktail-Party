import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Home",
            props: true,
            component: () =>
                import ("./views/Home.vue")
        },
        {
            path: '/drink/:idDrink',
            name: 'DrinkDetails',
            props: true,
            component: () =>
                import ("./views/DrinkDetails.vue")
        }
    ]
});