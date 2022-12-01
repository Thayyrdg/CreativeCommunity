<template>
  <nav v-if="path !== 'blog'" class="header">
    <ul>
      <li><a href="/home" :class="{ 'active': path === '/home' }">Home</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/community">Community</a></li>
      <li><a href="/auth/sign-in">Sign in</a></li>
    </ul>
  </nav>
  <header v-else>
    <div class="navbar-left">
      <div class="full-logo">
        <a href="/home"><img src="/img/Creative-Community-full-logo.svg" alt=""></a>
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
  </header>
</template>
<script>
export default {
  data () {
    return {
      path: this.$route
    }
  },
  computed() {
    console.log(this.path);
  }
}
</script>