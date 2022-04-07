import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import  About from '../components/About'
import Home from '../components/Home'
import Web from '../components/Web'
import Contact from '../components/Contact'
//import Map from '../components/Map'
import Q4 from '../components/Q4'



Vue.use(Router)


const routes = [
    {
        path:'/hello',
        name:"HelloWorld",
        component:HelloWorld

    },
    
    {
        path:'/about',
        name:"About",
        component:About
    },
    {
    path:'/home',
    name:"Home",
    component:Home
    },
    {
        path:'/web',
        name:"Web",
        component:Web
    },
    {
        path:'/contact',
        name:"Contact",
        component:Contact
    },
    // {
    //     path:'/map',
    //     name:"Map",
    //     component:map
    // },
    {
        path:'/q4',
        name:"Q4",
        component:Q4
    },
]
 let router = new Router({routes})

 export default router
