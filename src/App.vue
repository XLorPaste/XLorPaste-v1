<template>
  <div id="app">
    <xlor-nav @changewidth="changeWidth"></xlor-nav>
    <!-- <xlorEditor></xlorEditor> -->
    <router-view :width="width"></router-view>
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
      width: document.body.clientWidth,
    };
  },
  methods: {
    changeWidth(x) {
      this.width = x;
    }
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
  font-family: Consolas, "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
html, body {
  height: 100%;
}
a { 
  text-decoration:none;
  color: #4183C4;
} 

#app {
  position: relative;
  min-height: calc(100% - 40px);
  padding-bottom: 40px;
  box-sizing: border-box;
}

.align-center {
  text-align: center;
}
.no-select {
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.code-font {
  font-family: Consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
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
