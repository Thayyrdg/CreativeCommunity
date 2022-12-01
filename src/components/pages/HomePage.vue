<template>
  <!-- Header -->
  <HeaderComponent :is_blog="false"/>

  <!-- Section Page -->
  <section class="page" id="home">
    <div class="container-fluid">
      <div class="row">
        <header clasS="header-page" id="header-page-home">
          <div class="container">
            <h1 class="text-white">Bem-vindo ao espaço</h1>
            <h1 class="text-white font-bold">Creative</h1>
            <h3 class="text-white">
              Um web site cheio de informaçõe sobre tecnologia e uma comunidade onde voce pode expandir seu network e
              compartilhar seus trabalhos.
            </h3>
          </div>
        </header>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/app.scss";
</style>
<script>
import HeaderComponent from "../partials/HeaderComponent.vue";

export default {
  name: 'HomePage',
  components: {
    HeaderComponent
  }
}
</script>