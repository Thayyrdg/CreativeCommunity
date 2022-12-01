<template>
  <div class="wrapper">
    <HeaderComponent />
    <RouterView></RouterView>
  </div>
</template>
<style scoped>
  @import "./assets/scss/app.scss";
</style>
<script>
  import HeaderComponent from "./components/partials/HeaderComponent.vue";

  export default {
    name: "App",
    components: {
      HeaderComponent
    }
  }
</script>
