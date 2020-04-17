import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '../views/login'
// import info from '../views/info'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: ()=>import ('../views/login.vue')
    },
    {
        path: '/',
        name: 'info',
        component: () => import(/* webpackChunkName: "about" */ '../views/info.vue'),
    },
    {
        path: '/info',
        name: 'info',
        component: () => import( '../views/info.vue'),
        children: [
            {
                path: '/',
                name: 'organ',
                component: () => import('../views/info/organ.vue')
            },
            {
                path: 'organ',
                name: 'organ',
                component: () => import('../views/info/organ.vue'),
                children:[
                    {
                        path:'/',
                        name:'userlist',
                        component:()=>import('../views/info/organ/userList.vue')
                    },
                    {
                        path:'userlist',
                        name:'userlist',
                        component:()=> import('../views/info/organ/userList.vue')
                    },
                    {
                        path:'adduser',
                        name:'adduser',
                        component:()=> import('../views/info/organ/adduser.vue')
                    },
                    {
                        path:'deparlist',
                        name:'deparlist',
                        component:()=> import('../views/info/organ/deparList.vue')
                    },{
                        path:'addepart',
                        name:'addepart',
                        component:()=> import('../views/info/organ/addepart.vue')
                    },{
                        path:'joblist',
                        name:'joblist',
                        component:()=> import('../views/info/organ/jobList.vue')
                    },{
                        path:'addjob',
                        name:'addjob',
                        component:()=> import('../views/info/organ/addjob.vue')
                    }
                ]
            },
            {
                path:'client',
                name:'client',
                component:() => import ('../views/info/client.vue'),
                children:[
                    {
                        path:'/',
                        name:'cli',
                        component:()=> import ('../views/info/client/cli.vue')
                    },
                    {
                        path:'cli',
                        name:'cli',
                        component:()=> import ('../views/info/client/cli.vue')
                    },
                    {
                        path:'mycli',
                        name:'mycli',
                        component:()=> import ('../views/info/client/mycli.vue')
                    },
                    {
                        path:'addcli',
                        name:'addcli',
                        component:()=> import ('../views/info/client/addcli.vue')
                    },
                    {
                        path:'visit',
                        name:'visit',
                        component:()=> import ('../views/info/client/visit.vue')
                    }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
