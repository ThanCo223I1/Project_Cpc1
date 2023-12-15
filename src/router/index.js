import { createRouter, createWebHistory } from 'vue-router'
import SideBar from '../layouts/SideBar.vue'
import NavBar from '../layouts/NavBar.vue'
import HomePages from '../layouts/HomePages.vue';
import LoginAccount from '../pages/LoginAccount.vue'
import RegisterAccount from '../pages/RegisterAccount.vue'

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
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;