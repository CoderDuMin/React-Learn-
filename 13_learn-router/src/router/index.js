import Home from "../pages/Home";
import About, { AboutContact, AboutCulture, AboutJoinUs, AboutMain } from "../pages/About";
import Profile from "../pages/Profile";
import Detail3 from "../pages/Detail3";


const routes = [
  {
    path:'/',
    exact:true,
    component:Home
  },
  {
    path:'/about',
    component: About,
    routes:[
      {
        path:'/about',
        exact:true,
        component: AboutMain
      },
      {
        path:'/about/culture',
        component: AboutCulture
      },{
        path:'/about/contact',
        component: AboutContact
      },{
        path:'/about/join',
        component: AboutJoinUs
      }
    ]
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail',
    state:{
      name:'aaa',
      age:28
    },
    component:Detail3
  }
]

export {routes} 