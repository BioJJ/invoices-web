<template>
  <v-container id="notes" class="pa-6" fluid>
    <delete-modal
      @delete="deleteNote"
      ref="DeleteModal"
      :table="'note'"
      :route="'notes'"
    />

    <v-row class="mb-3">
      <v-col cols="6">
        <v-breadcrumbs divider="|" class="pa-0 breadcrumbs-pgc">
          {{ $router.history.current.meta.title }}
        </v-breadcrumbs>
      </v-col>
      <v-col cols="6">
        <v-btn to="/notes/create" elevation="1" class="btn-create-pgc">
          <v-icon class="mr-1">mdi-plus</v-icon>
          Create Note
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
            :items="notes"
            class="pgc-table"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.action`]="{ item }">
              <table-action
                @delete="deleteModal(item.name, item.id)"
                route="notes"
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
import NotesServices from "@/services/NotesServices";
export default {
  components: { DeleteModal, TableAction },
  data: () => ({
    search: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    notes: [],
    headers: [
      { text: "Id", align: "start", value: "_id" },
      { text: "Issue Date", align: "start", value: "issue_date" },
      { text: "Total", align: "start", value: "total" },
      { text: "Establishment", align: "start", value: "establishment" },
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
    this.getNotes();
  },

  methods: {
    async getNotes(): Promise<void> {
      const { data } = await NotesServices.getAll();
      this.notes = data;
    },

    deleteModal(name: string, id: string) {
      // this.$refs.DeleteModal.showModal(name, id);
    },
    deleteNote() {
      // this.$toast.success("Establishment deleted successfully", "Success!");
      this.getNotes();
    },
  },
};
</script>
