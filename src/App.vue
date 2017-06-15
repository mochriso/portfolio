

<template>
  <div id="app">
    <div class="logo">
    <img src="./assets/logo.png">
  </div>
  <catswiper></catswiper>
  </div>
</template>

<script>
import Catswiper from '@/components/Catswiper';

export default {
  name: 'app',
  components: {
    Catswiper,
  },
};
</script>

<style lang="scss">
html, body {
  position: relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height: 100vh;
  .logo {
    text-align: left;
    margin: 2%;
    img {
      width: 5vw;
      height: auto;
    }
  }
}
</style>
