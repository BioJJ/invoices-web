<template>
  <v-card
    class="mx-auto elevation-20"
    color="light blue"
    dark
    style="max-width: 600px"
  >
    <v-row justify="space-between">
      <v-col cols="8">
        <v-card-title>
          <div>
            <div class="text-h5">{{ title }}</div>
            <div>{{ message }}</div>
          </div>
        </v-card-title>
      </v-col>
      <v-img
        class="shrink ma-2"
        contain
        height="125px"
        :src="url"
        style="flex-basis: 125px"
      ></v-img>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4">
      <a :href="href">
        <v-icon class="mr-1"> mdi-heart </v-icon>
        <span class="mr-1">{{ href }}</span>
      </a>
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 text-caption mr-2">
        ({{ rating }})
      </span>
      <v-rating
        v-model="rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
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

  rating = 4.3;
}
</script>
