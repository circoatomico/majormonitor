import auth from './../middleware/auth';  

import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import LoginLayout from "@/pages/Layout/LoginLayout.vue";

import Sms from "@/pages/sms/Sms.vue";
import Login from "@/pages/login/Login.vue";

// Cliente
import Cliente from "@/pages/Clientes/Cliente.vue";

// // Perfil
import Perfil from "@/pages/Perfil/Perfil.vue";

import VisualizarSms from "@/pages/sms/Visualizar.vue";
import ResultadosSMS from "@/pages/sms/Resultados.vue"; 
import Monitoramento from "@/pages/Monitoramento.vue";

import DetalhamentoFila from "@/pages/DetalhamentoFila.vue";
import DashFilas from "@/pages/filas/DashFilas.vue";
import UserProfile from "@/pages/UserProfile.vue";

import TableList from "@/pages/TableList.vue";
import Filas from "@/pages/Filas.vue";
import Icons from "@/pages/Icons.vue";

import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [

  {
    path: "/logar",
    component: LoginLayout,
    redirect: "logar",
    
    children: [
      {
        path: "login", 
        component: Login
      }
    ]
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/monitoramento",
    beforeEnter: (to, from, next) => {  
      if (!localStorage.getItem('api_token')) { 
        console.log('sem permissao')
        next('/logar/login') 
      }else{
        console.log('tem permissao')
        next()
      } 
    },    
    children: [
      {
        path: "monitoramento",
        name: "Monitoramento",
        component: Monitoramento
      }, 
      { 
        path: "filas/detalhamento",
        name: "Detalhamento de Fila",
        component: DetalhamentoFila
      },
      {
        path: "filas/dash",
        name: "Dashboard de filas",
        component: DashFilas
      },
      {
        path: "sms",
        name: "Envio de SMS",
        component: Sms
      },
      {
        path: "sms/visualizar",
        name: "Visualização de SMS",
        component: VisualizarSms
      },
      {
        path: "sms/resultados",
        name: "Resultado de disparo SMS",
        component: ResultadosSMS
      },
      {
        path: "user",
        name: "Perfil",
        component: Perfil
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "cliente/:id",
        name: "Detalhamento de Cliente",
        component: Cliente
      },
      {
        path: "Filas",
        name: "Filas",
        component: Filas
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
