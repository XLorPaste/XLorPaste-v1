<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <xlorEditor></xlorEditor>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import MonacoEditor from 'vue-monaco'
import xlorEditor from './components/xlor-editor'

export default {
  name: 'app',
  data(){
    return {
      
    };
  },
  components: {
    HelloWorld,
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
