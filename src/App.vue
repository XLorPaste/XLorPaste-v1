<template>
  <div id="app">
    <xlor-nav></xlor-nav>
    <xlorEditor></xlorEditor>
  </div>
</template>

<script>
import xlorEditor from './components/xlor-editor'
import xlorNav from './components/xlor-nav.vue'

export default {
  name: 'app',
  data(){
    return {
      
    };
  },
  components: {
    xlorNav,
    xlorEditor
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
