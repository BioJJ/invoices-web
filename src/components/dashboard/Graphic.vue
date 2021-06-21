<template>
  <v-card class="mx-auto text-center" :color="color" dark max-width="600">
    <v-card-title>
      <span class="text-h6 font-weight-light">{{ title }}</span>
    </v-card-title>
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item"> {{ item.value }} </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">{{ message }}</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text :to="href"> Go to {{ title }} </v-btn>
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

  value = [423, 446, 675, 510, 590, 610, 760];
}
</script>
