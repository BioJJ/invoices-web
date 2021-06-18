<template>
  <v-container id="note" class="pa-6" fluid>
    <v-row class="mb-3">
      <v-col cols="6">
        <v-breadcrumbs divider="|" class="pa-0 breadcrumbs-pgc">
          {{ $router.history.current.meta.title }}
        </v-breadcrumbs>
      </v-col>
      <v-col cols="6"></v-col>
      <v-col cols="12">
        <v-card class="pa-10 pgc-card-box pgc-card-crud">
          <v-form ref="form" lazy-validation>
            <div class="pgc-crud-header">
              <h2>Note</h2>
              <v-progress-linear
                value="8"
                color="primary"
                background-color="#DDD"
                height="2"
              />
            </div>
            <v-row class="pgc-form-row">
              <v-col cols="4">
                <v-text-field
                  v-model="note.establishment"
                  label="Establishment"
                  readonly
                  filled
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  v-model="note.total"
                  label="Valor total"
                  readonly
                  filled
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  v-model="note.issue_date"
                  label="Valor total"
                  readonly
                  filled
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <div class="d-flex justify-end">
            <v-btn to="/notes" elevation="0" color="secondary" outlined large>
              back
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import NotesServices from "@/services/NotesServices";
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class NoteView extends Vue {
  note: [] = [];

  mounted(): void {
    this.getNote();
  }
  async getNote(): Promise<void> {
    try {
      const { data } = await NotesServices.get(this.$route.params.id);
      this.note = data;
    } catch (error) {
      // this.$toast.error("Department not found", "Error!");
    }
  }
}
</script>
