<template>
  <div id="Sidebar" class="d-flex flex-column justify-content-between">
    <b-col md="3" class="sidebar">
      <div class="p-3">
        <b-nav vertical class="pt-5">
          <b-nav-item>
            <b-link class="sidebar-link" :to="{ name: 'table' }">
              Lista de autos
            </b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link class="sidebar-link" :to="{ name: 'formulario' }">
              Agregar autos
            </b-link>
          </b-nav-item>
        </b-nav>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
.sidebar {
  background-color: #3D90D9;
  height: 100vh;
  width: 300px;
}

.sidebar-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.sidebar-link:hover {
  background-color: #2b6cb0;

}
</style>
