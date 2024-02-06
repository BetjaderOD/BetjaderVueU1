<template>
  <div class="about">
    <div class="row">
      <navbar></navbar>
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>

      <div class="col-md-9">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Tabla</h1>
        <div class="overflow-auto">
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
            aria-controls="my-table"></b-pagination>

          <p class="mt-3">Current Page: {{ currentPage }}</p>
          <div class="container table">

            <b-table id="my-table" :items="carros" :per-page="perPage" :current-page="currentPage" :fields="fields"
              :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" label-sort-asc="" label-sort-desc="" :filter="filtro"
              @filtered="onFiltered" small></b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Axios from '../services/Axios';

export default {
  name: 'About',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      filtro: null,
      sortBy: "brand",
      sortDesc: false,
      perPage: 10,
      rows: 0,
      currentPage: 1,
      carros: [],
      fields: [
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "year", label: "Año de Fabricación", sortable: true },
        { key: "serie", label: "Número de Serie", sortable: true },
      ],
      items: [
        {
          text: "Landing page",
          href: "/",
          name: 'landing'
        },
        {
          text: "Tabla",
          href: "/table",
          name: 'table'
        },
      ],
    };
  },
  mounted() {
    this.obtenerCarros();
  },
  methods: {
    async obtenerCarros() {
      try {
        const data = await Axios.obtenerCarros(
          this.currentPage - 1,
          this.perPage,
          this.sortBy
        );
        this.carros = data.content;
        this.rows = data.totalElements;
      } catch (error) {

      }
    },

    onFiltered(filteredItems) {
      this.rows = filteredItems.length;
    }
  },
  computed: {
    rows() {
      return this.carros.length
    }
  }
};
</script>

<style>
.table {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
