<template>

  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link to="/monitoramento">
        <md-icon>dvr</md-icon>
        <p>Monitoramento</p>
      </sidebar-link>

      <sidebar-link to="/filas">
        <md-icon>settings_phone</md-icon>
        <p>Real Time Filas</p>
      </sidebar-link> 

      <!-- <sidebar-link to="/sms">
        <md-icon>textsms</md-icon>
        <p>SMS</p>
      </sidebar-link> 

      <sidebar-link to="/sms/resultados">
        <md-icon>textsms</md-icon>
        <p>Resultados SMS</p>
      </sidebar-link> 

      <sidebar-link to="/table">
        <md-icon>phone</md-icon>
        <p>Ramais</p>
      </sidebar-link> 
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Notificações</p>
      </sidebar-link> -->
       <sidebar-link to="/user">
        <md-icon>fingerprint</md-icon>
        <p>Segurança</p>
      </sidebar-link>
      <!-- <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Adquirir Licença</p>
      </sidebar-link> -->
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
  }
};
</script>
