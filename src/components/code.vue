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
  font-size: 16px;
}
pre,
code {
  white-space: pre;
  overflow-x: auto;
  font-size: 16px !important;
}

@media screen and (max-width: 768px) {
  pre,
  code {
    font-size: 9px !important;
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
