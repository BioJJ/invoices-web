<template>
  <v-container id="notesServices" class="pa-6" fluid>
    <v-row>
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
              <h2>Notes</h2>
              <v-progress-linear
                value="8"
                color="primary"
                background-color="#DDD"
                height="2"
              />
            </div>
            <v-row class="pgc-form-row">
              <v-col cols="3">
                <v-autocomplete
                  :items="establishments"
                  :rules="[rules.required]"
                  v-model="form.establishment"
                  label="Establishment"
                  item-value="_id"
                  item-text="name"
                  dense
                  filled
                ></v-autocomplete>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  :rules="[rules.required]"
                  v-model="form.total"
                  type="number"
                  label="Amount"
                  dense
                  filled
                ></v-text-field>
              </v-col>

              <v-col cols="5">
                <v-text-field
                  v-model="form.issue_date"
                  label="Issue Date"
                  readonly
                  filled
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <div class="d-flex justify-end">
            <v-btn to="/notes" color="red" outlined class="ml-5 pgc-btn-form">
              Cancel
            </v-btn>
            <v-btn
              @click="resetForm"
              color="warning"
              outlined
              class="ml-5 pgc-btn-form"
            >
              Clean
            </v-btn>
            <v-btn
              @click="submitForm"
              :loading="formLoading"
              color="primary"
              class="ml-5 pgc-btn-form"
            >
              <v-icon small class="mr-1">mdi-content-save</v-icon> Save
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { rules } from "@/util/general-rules";
import NotesServices from "@/services/NotesServices";
import EstablishmentsServices from "@/services/EstablishmentsServices";
import { Note } from "@/models/Note";
import { Vue, Component } from "vue-property-decorator";
import { Establishment } from "@/models/Establishment";

@Component({})
export default class NoteForm extends Vue {
  formLoading = false;
  rules = rules();
  establishments: Establishment[] = [];
  note: Note[] = [];
  form = {
    total: null,
    issue_date: new Date(this.getDateNow()),
    establishment: new Establishment(),
  };
  mounted(): void {
    this.getEstablishments();
    this.$route.params.id && this.getNote();
  }
  async getEstablishments(): Promise<void> {
    const { data } = await EstablishmentsServices.getAll();
    this.establishments = data;
  }
  async getNote(): Promise<void> {
    try {
      const { data } = await NotesServices.get(this.$route.params.id);
      this.note = data;
      this.form = data;
    } catch (error) {
      this.$toast.error("Notes not found", "Error!");
    }
  }
  async submitForm(): Promise<void> {
    this.formLoading = true;
    try {
      if (this.$route.params.id) {
        await NotesServices.update(this.$route.params.id, this.note);
        this.$toast.info("Note Updated successfully", "Success!");
      } else {
        await NotesServices.create(this.form);
        this.$toast.success("Note Saved successfully", "Success!");
      }
      this.formLoading = false;
      this.$router.push({ name: "NoteList" });

      this.formLoading = false;
    } catch (error) {
      this.formLoading = false;
    }
  }
  cancel(): void {
    this.resetForm();
    this.$router.push({ name: "NoteList" });
  }
  resetForm(): void {
    if (this.note) {
      console.log(1);
      this.getNote();
    } else {
      this.form = {
        total: null,
        issue_date: new Date(this.getDateNow()),
        establishment: new Establishment(),
      };
    }
  }
  getDateNow() {
    let dateNow = Date.now();

    dateNow.toLocaleString();

    return dateNow;
  }
}
</script>
