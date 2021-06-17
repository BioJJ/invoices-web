<template>
  <v-app id="inspire">
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: true,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
* {
  font-family: "Poppins", Arial, sans-serif !important;
}
html,
body,
.v-application {
  height: 100% !important;
}
.h-100 {
  height: 100% !important;
}
.w-100 {
  width: 100% !important;
}
.w-25 {
  width: 25% !important;
}
.w-50px {
  width: 50px !important;
}
.w-100px {
  width: 100px !important;
}
.title-form {
  color: #133896;
  font-size: 40px;
  font-weight: 400;
  font: normal normal 600 40px/40px Segoe UI;
}
.sub-title-form {
  color: #133896;
  font-size: 23px;
  font-weight: 400;
  font: normal normal 600 23px/23px Segoe UI;
}
.lean-alert {
  max-width: max-content;
  position: absolute !important;
  z-index: 2;
  right: 0;
}
.v-application--wrap {
  min-height: 100% !important;
}
.iziToast-color-green {
  background-color: #4caf50 !important;
}
.iziToast-color-red {
  background-color: #ff5252 !important;
}
.iziToast-color-orange {
  background-color: #ffa726 !important;
}
.btn-create-pgc {
  background-color: #f0582e !important;
  color: #fff !important;
  float: right !important;
}
.breadcrumbs-pgc {
  color: #1a2a51;
  font-weight: 600;
  font-size: 20px;
  transform: translateY(2px);
}
.pgc-table th {
  color: #1a2a51 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
}
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: 2px solid rgba(0, 0, 0, 0.15) !important;
}
.pgc-card-box {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1) !important;
}
.pgc-btn-form {
  width: 140px;
  height: 40px !important;
  font-size: 13px !important;
}
.pgc-card-crud {
  height: max-content !important;
  min-height: 80vh !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
}
.pgc-crud-header {
  margin-bottom: 40px;
}
.pgc-crud-header h2 {
  font-size: 18px;
  font-weight: 300;
  color: #0177fb;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.pgc-form-row {
  padding-right: 20%;
}
.pgc-pagination {
  height: 60px;
}
.rows-per-page {
  font-size: 13px;
  padding-top: 22px;
  padding-right: 20px;
}
.arrows-pagination {
  padding-top: 18px;
}
.pgc-property-title-style {
  color: #757575;
  font-size: 15px;
  font-weight: 400;
  margin: 10px 20px;
}
.pgc-color-font-label {
  width: 100%;
  color: #a3a3a3;
  font-size: 12px;
  text-align: center;
  margin-top: -4px;
}
.v-color-picker__alpha {
  display: none !important;
}
.v-color-picker__hue {
  transform: translateY(12px);
}
.v-input--radio-group--row .v-input--radio-group__input {
  justify-content: space-between !important;
}
</style>
