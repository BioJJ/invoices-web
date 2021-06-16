<template>
  <v-navigation-drawer
    color="#133896"
    class="pgc-navigation"
    permanent
    expand-on-hover
  >
    <v-list nav dense>
      <v-list-item
        v-for="item in menu"
        :key="item.title"
        :to="item.to"
        active-class="active-item-list"
        link
      >
        <v-list-item-icon>
          <v-icon color="#fff">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="color: #fff">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: { type: Boolean, default: true },
    menu: { default: [] },
  },
  data: () => ({
    localDrawner: true,
  }),

  watch: {
    drawer() {
      this.localDrawner = !this.localDrawner;
    },
  },
};
</script>

<style>
.pgc-navigation {
  position: fixed;
  padding-top: 64px;
  z-index: 5;
}
.pgc-navigation .v-list-item:hover {
  background-color: #0177fb;
}
.active-item-list {
  background-color: #0177fb;
}
</style>
