<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon small v-bind="attrs" v-on="on">
        <v-icon> mdi-dots-vertical </v-icon>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list-item class="pa-0">
        <v-btn
          elevation="0"
          color="#fff"
          :to="`${route}/view/${item._id}`"
          block
          class="justify-start"
        >
          View
        </v-btn>
      </v-list-item>
      <v-list-item class="pa-0">
        <v-btn
          elevation="0"
          color="#fff"
          :to="`${route}/edit/${item._id}`"
          block
          class="justify-start"
        >
          Edit
        </v-btn>
      </v-list-item>
      <v-list-item class="pa-0">
        <v-btn
          elevation="0"
          color="#fff"
          @click="deleteModal()"
          block
          class="justify-start red--text"
        >
          Delete
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TableAction extends Vue {
  @Prop() item: {
    type: any;
    required: true;
  };
  @Prop() route: {
    type: string;
    required: true;
  };
  deleteModal(): void {
    this.$emit("delete");
  }
}
</script>
