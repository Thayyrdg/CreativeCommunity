<template>
  <header :class="{ 'header': true, 'top-fixed': is_blog === false}">
    <nav v-if="is_blog !== true" class="navigation">
      <!-- Navbar others pages -->
      <div class="navbar-brand navbar-left"></div>
      <div class="navbar-items navbar-right">
        <ul>
          <li class="nav-item"><a href="/home" class="active">Home</a></li>
          <li class="nav-item"><a href="/blog">Blog</a></li>
          <li class="nav-item"><a href="/community">Community</a></li>
          <li class="nav-item"><a href="/auth/sign-in">Sign in</a></li>
        </ul>
      </div>
    </nav>
    <!-- Navbar Blog -->
    <nav v-else class="navbar-blog" style="z-index: 99">
      <div class="navbar-left">
        <div class="full-logo">
          <a href="/home"><img src="/images/Creative-Community-full-logo.svg" alt=""></a>
        </div>
      </div>
      <div class="navbar-middle">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a class="active" href="/blog">Blog</a></li>
          <li><a href="/sign-in">Community</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
        </ul>
      </div>
      <div class="navbar-right">
        <div class="button">
          <a href="/auth/sign-in">Sign in</a>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>

@import "../../assets/scss/app.scss";
@import "../../assets/scss/blog.scss";




</style>
<script>
export default {
  name: 'HeaderComponent',
  props: {
    is_blog: Boolean,
  }
}
</script>