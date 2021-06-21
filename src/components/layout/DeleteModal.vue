<template>
  <v-dialog v-model="show" persistent max-width="400">
    <v-card>
      <v-card-title class="headline red--text"> Delete? </v-card-title>
      <v-card-text>
        This will erase the {{ table }} data "{{ name }}" from the system. Are
        you sure you want to delete the {{ table }}?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="show = false"> Back </v-btn>
        <v-btn color="red" text @click="delet"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import EstablishmentsServices from "@/services/EstablishmentsServices";
import NotesServices from "@/services/NotesServices";

@Component({})
export default class DeleteModal extends Vue {
  @Prop() table: string;
  show = false;
  name = "";
  id = "";
  loading = true;

  async delet(): Promise<void> {
    try {
      if (this.table == "establishments") {
        await EstablishmentsServices.delete(this.id);
      } else if (this.table == "notes") {
        await NotesServices.delete(this.id);
      }
      this.show = false;
      this.loading = false;
      this.$emit("delete");
    } catch (error) {
      console.log(error);
      this.loading = false;
      // this.$toast.error("Error deleting " + this.table, "Error!");
    }
  }
  showModal(name: string, _id: string): void {
    this.name = name;
    this.id = _id;
    this.show = true;
  }
}
</script>
