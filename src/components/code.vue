<template>
  <pre id="xlor-code"><code :class="lang" v-html="code" ref="cd"></code></pre>
</template>

<script>
import "highlightjs-line-numbers.js";

export default {
  name: "CodeRender",
  props: {
    code: String,
    lang: String
  },
  methods: {
    refresh() {
      window.hljs.lineNumbersBlock(this.$refs["cd"], { singleLine: true });
    }
  },
  watch: {
    code: "refresh"
  },
  mounted() {
    this.refresh();
  }
};
</script>

<style>
#xlor-code {
  width: 100%;
}
pre,
code {
  white-space: pre;
  overflow-x: auto;
  font-family: "Fira Code", monospace;
  font-size: 16px !important;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  pre,
  code {
    font-family: "Fira Code", monospace;
    font-size: 6px !important;
  }
}

pre::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.4rem;
}
pre::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.26);
}

.hljs-ln-numbers {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  text-align: right;
  color: #ccc;
  vertical-align: top;
  padding-right: 5px;
}

.hljs-ln-code {
  padding-left: 10px !important;
}
</style>
