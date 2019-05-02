<template>
    <nav>
      <img src="https://img.icons8.com/dusk/34/000000/rss.png" />
      <h1 class="logo">Nuxt Blog</h1>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Wendy+One');

  .logo {
    margin-left: 10px;
    font-family: 'Wendy One', sans-serif;
    text-shadow: 0 0 0 6px #000;
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
    background: #2967a0;
    color: #fff;
    text-shadow: 0 0 4px #000;
  }
</style>
