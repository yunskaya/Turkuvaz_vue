import { createRouter, createWebHistory} from "vue-router";
//import HomeCmp from './views/home'

const routes = [
    {
        name : "HomePage",
        path : "/",
        //component : HomeCmp
        component : () => import("@/views/Home")
    },
    {
        name : "LoginPage",
        path : "/login",
        //component : HomeCmp
        component : () => import("@/views/Login")
    }, 
    {
        name : "RegisterPage",
        path : "/register",
        //component : HomeCmp
        component : () => import("@/views/Register")
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;