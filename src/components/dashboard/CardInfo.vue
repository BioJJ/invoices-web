<template>
  <v-card class="mx-auto" :color="color" dark max-width="800">
    <v-card-title>
      <v-icon large left> {{ icon }} </v-icon>
      <span class="text-h6 font-weight-light">{{ title }}</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold">
      {{ message }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img class="elevation-6" alt="" :src="url"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ title2 }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <a :href="href">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="mr-1">·</span>
          </a>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CardInfo extends Vue {
  @Prop() title: string;
  @Prop() title2: string;
  @Prop() message: string;
  @Prop() color: string;
  @Prop() icon: string;
  @Prop() url: string;
  @Prop() href: string;
}
</script>
