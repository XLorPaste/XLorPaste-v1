<template>
  <div id="app">
    <xlor-nav @changewidth="changeWidth"></xlor-nav>
    <router-view :width="width"></router-view>
    <xlor-footer></xlor-footer>
    <el-backtop>
      <i class="el-icon-caret-top" style="font-size: 24px"></i>
    </el-backtop>
  </div>
</template>

<script>
import xlorNav from "./components/nav.vue";
import xlorFooter from "./components/footer.vue";

export default {
  name: "app",
  data() {
    return {
      width: document.body.clientWidth
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
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Code&display=swap&subset=latin-ext");

/* @font-face {
  font-family: "Fira Code";
  src: url('./assets/FiraCode-Retina.woff2') format('woff2'),
       url('./assets/FiraCode-Retina.woff') format('woff');
  font-weight: 400;
  font-style: normal;
} */

* {
  margin: 0;
  padding: 0;
  font-family: "Fira Code", Consolas, sans-serif, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial;
}
html,
body {
  height: 100%;
}
a {
  text-decoration: none;
  color: #4183c4;
}

::-webkit-selection {
  background-color: #cce2ff;
}
::-moz-selection {
  background-color: #cce2ff;
}
::selection {
  background-color: #cce2ff;
}

input::-webkit-selection,
textarea::-webkit-selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}
input::-moz-selection,
textarea::-moz-selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
}
input::selection,
textarea::selection {
  background-color: rgba(100, 100, 100, 0.4);
  color: rgba(0, 0, 0, 0.87);
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.code-font {
  font-family: "Fira Code", Consolas, Menlo, "PingFang SC", "Microsoft YaHei",
    monospace;
}
</style>
