<template>
  <div id="landing-page">

    <div class="hero-image">
      <div class="hero-text">
        <h1>Bienvenido</h1>
        <p>Explora nuestro catalogo de autos</p>
        <b-button variant="primary" to="table">Ver autos</b-button>
      </div>
    </div>

    <b-footer class="footer">
      <span class="text">Pagina hecha por betjader</span>
    </b-footer>

  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style>
.hero-image {
  background-image: url('https://helios-i.mashable.com/imagery/articles/02IocbfjknjvJZUuQYiC6or/hero-image.fill.size_1248x702.v1623384088.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  text-align: center;
  color: white;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-text p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.b-button {
  font-size: 1.2rem;
  padding: 10px 20px;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #034AA6;
  color: white;
  padding: 20px 0;
}

text {
  color: white;
}
</style>
