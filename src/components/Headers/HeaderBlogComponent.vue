<template>
    <header>
        <div class="navbar-left">
          <div class="full-logo">
            <img src="/img/Creative-Community-full-logo.svg" alt="">
          </div>
          </div>
          <div class="navbar-middle">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a class="active" href="#blog">Blog</a></li>
              <li><a href="Community-login.html">Community</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div class="navbar-right">
            <div v-if="( username == null)" class="button" ><a href="Community-login.html">Sign in</a></div>
            <div v-else class="button" ><a href="Community-login.html">{{ username }}</a></div>
          </div>
      </header>
</template>
<script>
  export default {
    name: "HeaderBlogComponent",
    props: {
      username: String
    }
  }
</script>