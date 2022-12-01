<template>
  <!-- Header -->
  <HeaderComponent :is_blog="false"/>

  <!-- Section Page -->
  <section class="page" id="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col col-left flex-center">
          <hr />
          <div class="social">
            <a href="#">
              <i class="ri-whatsapp-line"></i>
            </a>
            <a href="#">
              <i class="ri-telegram-line"></i>
            </a>
            <a href="#">
              <i class="ri-group-line"></i>
            </a>
          </div>
          <hr />
        </div>
        <div class="col col-middle flex-center">
          <div class="container">
            <h1 class="text-white">Bem-vindo ao espaço</h1>
            <h1 class="text-white font-bold">Creative</h1>
            <h2 class="text-white">
              Um web site cheio de informaçõe sobre tecnologia e uma comunidade onde voce pode expandir seu network e
              compartilhar seus trabalhos.
            </h2>
          </div>
        </div>
        <div class="col col-right flex-center">
          <img src="/images/Community-icon.svg" alt="Creative Community">
        </div>
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