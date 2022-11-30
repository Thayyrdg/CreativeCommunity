<template>

    <HeaderLandingPageComponent></HeaderLandingPageComponent>

     <section class="landing-page">
  
        <div class="left-side">
            <div class="before"></div>
            <div class="icons">
            <img src="/img/Whatsapp.svg" alt="">
            <img src="/img/Telegram.svg" alt="">
            <img src="/img/Community.svg" alt="">
            </div>
            <div class="after"></div>
        </div>

        <div class="middle-side">
          <h1>Bem-vindo ao espaço</h1>
          <h1>Creative</h1>
          <h3>Um web site cheio de informaçõe sobre tecnologia e uma
            comunidade onde voce pode expandir seu network e 
            compartilhar seus trabalhos.</h3>
        </div>

        <div class="right-side">
            <img src="/img/Community-icon.svg" alt="">
        </div>

    </section>
</template>
<script>
    import HeaderLandingPageComponent from './Headers/HeaderLandingPageComponent.vue';

    export default {
        name: "Home",
        components: {
            HeaderLandingPageComponent
        }
    }
</script>