<template>
  <v-dialog v-model="show" persistent max-width="450">
    <v-card>
      <v-card-title class="headline red--text"> Delete <span class="text-capitalize ml-1">{{ table }}</span>? </v-card-title>
      <v-card-text>
        This will erase the {{ table }} data "{{ name }}" from the
        system. Are you sure you want to delete the {{ table }}?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="show = false"> Cancel </v-btn>
        <v-btn color="red" text @click="confirmDelete" :loading="loading">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    table: { 
      type: String,
      required: true
    },
    route: { 
      type: String,
      required: true
    },
  },
  data: () => ({
    show: false,
    name: '',
    id: '',
    loading: false,
    userId: ''
  }),
  methods: {
    async confirmDelete() {
      this.loading = true;
      try {
        this.userId = localStorage.getItem('id')
        if(this.userId != this.id){
          await this.$axios.delete(`${this.route}/${this.id}`);
          this.show = false;
          this.loading = false;
          this.$emit("delete");
        }
        else {
          this.loading = false;
          this.$toast.error("Error, you can't delete your user!", "Error!");
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.$toast.error("Error deleting " + this.table, "Error!");
      }
    },
    showModal(name, id) {
      this.name = name;
      this.id = id;
      this.show = true;
    },
  },
};
</script>