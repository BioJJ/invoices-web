<template>
  <v-container id="establishment" class="pa-6" fluid>
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
                  v-model="establishment.name"
                  label="Name"
                  readonly
                  filled
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field
                  v-model="establishment.cnpj"
                  label="CNPJ"
                  readonly
                  filled
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <div class="d-flex justify-end">
            <v-btn
              to="/establishments"
              elevation="0"
              color="secondary"
              outlined
              large
            >
              back
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import EstablishmentsServices from "@/services/EstablishmentsServices";
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class EstablishmentView extends Vue {
  establishment: [] = [];

  mounted(): void {
    this.getEstablishment();
  }
  async getEstablishment(): Promise<void> {
    try {
      const { data } = await EstablishmentsServices.get(this.$route.params.id);
      this.establishment = data;
    } catch (error) {
      // this.$toast.error("Department not found", "Error!");
    }
  }
}
</script>
