import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue';
import CadastroView from '../views/auth/CadastroView.vue';
import DashboardClient from '../views/dashboard/client/MainView.vue';
import CardapioClient from '../views/dashboard/client/CardapioView.vue';
import CadPratoView from '../views/dashboard/client/CadPratoView.vue';
import CadBebidaView from '../views/dashboard/client/CadBebidasView.vue';
import PedidosView from '../views/dashboard/client/PedidoView.vue';
import MesasView from '../views/dashboard/client/CadMesasView.vue';
import EmpregadoView from '../views/dashboard/client/CadEmpregadosView.vue';
import InicialView from '../views/auth/InitView.vue';
import RestaurantClient from '../views/dashboard/client/MyRestaurantView.vue';
import md5 from 'crypto-js/md5';

const generateMD5 = () => {
  return md5(new Date().toISOString()).toString();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/my-dashboard',
      name: 'DashboardClient',
      component: DashboardClient,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/my-dashboard/${hash}`);
      }
    },

    {
      path: '/my-dashboard/:hash',
      name: 'DashboardClientWithHash',
      component: DashboardClient
    },

    {
      path: '/my-restaurant',
      name: 'RestaurantClient',
      component: RestaurantClient,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/my-restaurant/${hash}`);
      }
    },

    {
      path: '/my-restaurant/:hash',
      name: 'RestaurantClientWithHash',
      component: RestaurantClient
    },



    {
      path: '/cardapio',
      name: 'CardapioClient',
      component: CardapioClient,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/cardapio/${hash}`);
      }
    },
    {
      path: '/cardapio/:hash',
      name: 'CardapioClientWithHash',
      component: CardapioClient
    },



    {
      path: '/area-prato',
      name: 'CadPrato',
      component: CadPratoView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/area-prato/${hash}`);
      }
    },
    {
      path: '/area-prato/:hash',
      name: 'CadPratoWithHash',
      component: CadPratoView
    },
    {
      path: '/area-bebida',
      name: 'CadBebida',
      component: CadBebidaView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/area-bebida/${hash}`);
      }
    },
    {
      path: '/area-bebida/:hash',
      name: 'CadBebidaWithHash',
      component: CadBebidaView
    },
    {
      path: '/novo-funcionario',
      name: 'CadFuncionario',
      component: EmpregadoView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/novo-funcionario/${hash}`);
      }
    },
    {
      path: '/novo-funcionario/:hash',
      name: 'CadFuncionarioWithHash',
      component: EmpregadoView
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: PedidosView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/pedidos/${hash}`);
      }
    },
    {
      path: '/pedidos/:hash',
      name: 'pedidosWithHash',
      component: PedidosView
    },
    {
      path: '/nova-mesa',
      name: 'mesa',
      component: MesasView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/nova-mesa/${hash}`);
      }
    },
    {
      path: '/nova-mesa/:hash',
      name: 'mesaWithHash',
      component: MesasView
    },
    {
      path: '/registo',
      name: 'cadastro',
      component: CadastroView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/registo/${hash}`);
      }
    },
    {
      path: '/registo/:hash',
      name: 'cadastroWithHash',
      component: CadastroView
    },
    {
      path: '/Inicial',
      name: 'inicialPage',
      component: InicialView,
      beforeEnter: (to, from, next) => {
        const hash = generateMD5();
        next(`/Inicial/${hash}`);
      }
    },
    {
      path: '/Inicial/:hash',
      name: 'inicialPageWithHash',
      component: InicialView
    }
  ]
});

export default router;