<template>
  <v-container id="establishment" class="pa-6" fluid>
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
              <h2>Establishment</h2>
              <v-progress-linear
                value="8"
                color="primary"
                background-color="#DDD"
                height="2"
              />
            </div>
            <v-row class="pgc-form-row">
              <v-col cols="5">
                <v-text-field
                  :rules="[rules.required, rules.min5chars, rules.max255chars]"
                  v-model="form.name"
                  label="Name"
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  :rules="[rules.required, rules.min5chars, rules.max255chars]"
                  v-model="form.cnpj"
                  label="CNPJ"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <div class="d-flex justify-end">
            <v-btn
              to="/establishments"
              color="red"
              outlined
              class="ml-5 pgc-btn-form"
            >
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
import EstablishmentsServices from "@/services/EstablishmentsServices";
import { Establishment } from "@/models/Establishment";
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class EstablishmentForm extends Vue {
  formLoading = false;
  rules = rules();
  establishment: [] = [];
  form: Establishment = {
    name: "",
    cnpj: "",
  };

  mounted(): void {
    this.$route.params.id && this.getEstablishment();
  }

  async getEstablishment(): Promise<void> {
    try {
      const { data } = await EstablishmentsServices.get(this.$route.params.id);
      this.establishment = data;
      this.form = data;
    } catch (error) {
      // this.$toast.error("Department not found", "Error!");
    }
  }
  async submitForm(): Promise<void> {
    this.formLoading = true;
    try {
      if (this.$route.params.id) {
        await EstablishmentsServices.update(
          this.$route.params.id,
          this.establishment
        );
      } else {
        await EstablishmentsServices.create(this.form);
      }
      this.formLoading = false;
      this.$router.push({ name: "EstablishmentList" });

      this.formLoading = false;
    } catch (error) {
      this.formLoading = false;
    }
  }
  cancel(): void {
    this.resetForm();
    this.$router.push({ name: "EstablishmentList" });
  }
  resetForm(): void {
    if (this.establishment) {
      console.log(1);
      this.getEstablishment();
    } else {
      this.form = {
        name: "",
        cnpj: "",
      };
    }
  }
}
</script>
