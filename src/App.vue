<template>
  <div id="app">
    <xlor-nav @changewidth="changeWidth"></xlor-nav>
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
  font-family: FiraCode, Consolas, sans-serif, "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial;
}
html, body {
  height: 100%;
}
a { 
  text-decoration:none;
  color: #4183C4;
} 

@font-face {
  font-family: "FiraCode";
  src: url('./assets/FiraCode-Regular.woff') format('woff');
  src: url('./assets/FiraCode-Retina.ttf') format('truetype');
}

::-webkit-selection {
  background-color: #CCE2FF;
}
::-moz-selection {
  background-color: #CCE2FF;
}
::selection {
  background-color: #CCE2FF;
}

input::-webkit-selection,textarea::-webkit-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.87)
}
input::-moz-selection,textarea::-moz-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.87)
}
input::selection,textarea::selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.87)
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
  font-family: FiraCode, Consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
}
</style>
