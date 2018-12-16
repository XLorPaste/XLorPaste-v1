<template>
  <div id="app">
    <xlor-nav></xlor-nav>
    <!-- <xlorEditor></xlorEditor> -->
    <router-view></router-view>
    <xlor-footer></xlor-footer>
  </div>
</template>

<script>
import xlorNav from './components/xlor-nav.vue'
import xlorFooter from './components/xlor-footer.vue'

export default {
  name: 'app',
  data(){
    return {
      
    };
  },
  components: {
    xlorNav,
    xlorFooter
  },
  mounted() {

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
