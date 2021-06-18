<template>
  <v-app id="invoices">
    <sidebar :drawer="drawer" :menu="menu" />

    <v-app-bar app color="#fff" style="color: #133896">
      <div class="d-flex">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="#fff"
        ></v-app-bar-nav-icon>
        <img style="max-height: 45px !important; height: 90% !important" />
      </div>

      <v-btn color="white" class="logout-header" elevation="0">
        GitHub <v-icon small color="primary" class="ml-2">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="pl-12" style="background-color: #eff4ff">
      <router-view style="background-color: #eff4ff"></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "./Sidebar.vue";
import routes from "@/util/menu-routes";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Sidebar,
  },
})
export default class Container extends Vue {
  drawer = true;
  menu = routes;
}
</script>

<style>
.v-toolbar__content,
.v-toolbar__extension {
  justify-content: space-between;
}
.logout-header {
  float: right !important;
  cursor: pointer;
}
.logout-header i {
  transform: translateX(-1px);
}
</style>
