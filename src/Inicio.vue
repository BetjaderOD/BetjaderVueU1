<template>
  <div id="app">
    <header>
      <div>
        <div>
          <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand class="titile-nav">Betjader Ortiz</b-navbar-brand>
            <b-navbar-brand class="titile-nav">Examen Unidad 1</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item>
                  <router-link class="nav-item" :to="{ path: '/table' }">Tabla</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="nav-item" :to="{ path: '/formulario' }">Formulario</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="nav-item" :to="{ path: '/' }">Landing</router-link>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>

    </header>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.nav-item {
  color: white;
  margin: 0 10px;
  text-decoration: none;

}

.nav-item:hover {
  color: #0D0D0D;

}
</style>
