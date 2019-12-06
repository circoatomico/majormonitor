<template>

  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link v-if="menu.monitoramento" to="/monitoramento">
        <md-icon>dvr</md-icon>
        <p>Monitoramento</p>
      </sidebar-link>

      <sidebar-link v-if="menu.filas" to="/filas">
        <md-icon>settings_phone</md-icon>
        <p>Real Time Filas</p>
      </sidebar-link> 
 
       <sidebar-link v-if="menu.seguranca" to="/admin">
        <md-icon>apps</md-icon>
        <p>Administração</p>
      </sidebar-link> 

      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Perfil</p>
      </sidebar-link> 

    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>

</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },

  data(){
    return{
      menu: {
        monitoramento: false, 
        seguranca: false,
        filas: false,
        administracao: false
      }
    }
  },
  mounted(){

    let menus = JSON.parse(localStorage.getItem('menus'));

    console.log(menus)
 
    this.menu.monitoramento = menus.monitoramento
    this.menu.seguranca = menus.seguranca
    this.menu.filas = menus.filas
    this.menu.administracao = menus.administracao 
  }
};
</script>