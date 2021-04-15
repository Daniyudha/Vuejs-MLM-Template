<template>
  <div id="app">
    <Navbar1/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar1 from '@/components/Navbar1.vue'

export default {
  components: {
    Navbar1
  }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
@import "assets/css/style.css";
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>
