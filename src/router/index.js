import { createRouter, createWebHistory } from 'vue-router'
import SideBar from '../layouts/SideBar.vue'
import NavBar from '../layouts/NavBar.vue'
import HomePages from '../layouts/HomePages.vue';
import LoginAccount from '../pages/LoginAccount.vue'
import RegisterAccount from '../pages/RegisterAccount.vue'
import DeviceLists from '../service/DeviceLists.vue'
import ChangePassword from '../service/ChangePassword.vue'
import AccountInformation from '../service/AccountInformation.vue'

const routes = [
  {
    path:'/login',component: LoginAccount, alias:'/'
  },
  {
    path: '/register', component: RegisterAccount, alias:'/register'
  },
  {
    // dùng để khi người dùng nhập bừa đường dẫn sẽ tự quay về trang login
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'homepage',
    component: HomePages,
    children: [
      {
        path: '',
        components: {
          default: NavBar,
          sidebar: SideBar,
        },
      },
      {
        path:'/deviceList',
        name:'deviceList',
        component: DeviceLists
      },
      {
        path:'/changepassword',
        name:'changepassword',
        component: ChangePassword
      },
      {
        path:'/accountinformation',
        name:' accountinformation',
        component:  AccountInformation
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;