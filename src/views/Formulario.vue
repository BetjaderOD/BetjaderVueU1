<template>
  <div class="Formulario">
    <div class="row">
      <navbar></navbar>
      <div class="col-md-3">
        <sidebar></sidebar>
      </div>

      <div class="col-md-9">
        <b-breadcrumb :items="items"></b-breadcrumb>

        <h1>Formulario</h1>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mt-5">
          <div class="row">
            <div class="col-md-6">
              <b-form-group label="Auto">
                <b-form-input v-model="form.marca" type="text" placeholder="Marca" required pattern="[A-Za-z0-9]+" />
                <br>
                <b-form-input v-model="form.modelo" type="text" placeholder="Modelo" required pattern="[A-Za-z0-9]+" />
              </b-form-group>

              <b-form-group label="Detalles">
                <b-form-input v-model="form.year" type="number" placeholder="Año de fabricación" required
                  :max="currentYear" />
                <br>
                <b-form-input v-model="form.numeroSerie" type="text" placeholder="Número de serie (XXXX000-00XX)" required
                  pattern="[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}" />
              </b-form-group>
            </div>
          </div>

          <div>
            <b-button type="submit" variant="primary">Enviar</b-button>
          </div>
        </b-form>

        <div v-if="formError" class="alert alert-danger mt-3">{{ formError }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import guardarCarros from '../services/Axios';

export default {
  name: 'Formulario',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      form: {
        marca: '',
        modelo: '',
        year: '',
        numeroSerie: '',
      },
      currentYear: new Date().getFullYear(),
      show: true,
      formError: '',
      items: [
        {
          text: "Landing page",
          href: "/",
          name: 'landing'
        },
        {
          text: "Formulario",
          href: "/formulario",
          name: 'formulario'
        },
      ],

    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      if (!this.validateForm()) {
        return;
      }

      try {
        await guardarCarros.guardarCarros(this.form.marca, this.form.modelo, this.form.numeroSerie, this.form.year);
        Swal.fire({


          icon: "success",
          title: "Auto guardado",
          showConfirmButton: false,
          timer: 1500
        });
        this.resetForm();
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error al guardar el auto",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
    validateForm() {
      if (!/^[A-Za-z0-9]+$/.test(this.form.marca)) {
        this.formError = 'Los signos no son validos';
        return false;
      }

      if (!/^[A-Za-z0-9]+$/.test(this.form.modelo)) {
        this.formError = 'Los signos no son validos';
        return false;
      }

      if (parseInt(this.form.year) > this.currentYear) {
        this.formError = 'El año no puede ser mayor al actual';
        return false;
      }

      if (!/^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/.test(this.form.numeroSerie)) {
        this.formError = 'El número de serie debe seguir el formato XXXX000-00XX';
        return false;
      }

      this.formError = '';
      return true;
    },
    resetForm() {
      this.form = {
        marca: '',
        modelo: '',
        year: '',
        numeroSerie: '',
      };
      this.formError = '';
    }
  }
}
</script>

<style></style>
