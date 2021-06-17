<template>
  <v-container id="establishments" class="pa-6" fluid>
    <delete-modal
      @delete="deleteEstablishment"
      ref="DeleteModal"
      :table="'establishment'"
      :route="'establishments'"
    />

    <v-row class="mb-3">
      <v-col cols="6">
        <v-breadcrumbs divider="|" class="pa-0 breadcrumbs-pgc">
          {{ $router.history.current.meta.title }}
        </v-breadcrumbs>
      </v-col>
      <v-col cols="6">
        <v-btn to="/establishments/create" elevation="1" class="btn-create-pgc">
          <v-icon class="mr-1">mdi-plus</v-icon>
          Create Establishment
        </v-btn>
      </v-col>

      <v-col cols="12">
        <v-card class="pt-10 pb-7 px-6 pgc-card-box">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-btn
                elevation="1"
                color="bluesky"
                style="color: #fff; transform: translateY(6px)"
                large
              >
                Search
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="py-3 px-6 pgc-card-box">
          <v-data-table
            :headers="headers"
            :items="establishments"
            class="pgc-table"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.action`]="{ item }">
              <table-action
                @delete="deleteModal(item.name, item.id)"
                route="establishments"
                :item="item"
              />
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TableAction from "@/components/layout/TableAction.vue";
import DeleteModal from "@/components/layout/DeleteModal.vue";
import EstablishmentsServices from "@/services/EstablishmentsServices";
export default {
  components: { DeleteModal, TableAction },
  data: () => ({
    search: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    establishments: [],
    headers: [
      { text: "Name", align: "start", value: "name" },
      { text: "CNPJ", align: "start", value: "cnpj" },
      {
        text: "Action",
        align: "center",
        value: "action",
        sortable: false,
        width: "150px",
      },
    ],
  }),
  mounted() {
    this.getEstablishments();
  },

  methods: {
    async getEstablishments(): Promise<void> {
      const { data } = await EstablishmentsServices.getAll();
      this.establishments = data;
    },

    deleteModal(name: string, id: string) {
      // this.$refs.DeleteModal.showModal(name, id);
    },
    deleteEstablishment() {
      // this.$toast.success("Establishment deleted successfully", "Success!");
      this.getEstablishments();
    },
  },
};
</script>
