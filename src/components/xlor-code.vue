<template>
<pre ref="cd"><code :class="lang" v-html="code" ref="cd2"></code></pre>
</template>

<script>
import 'highlightjs-line-numbers.js'

export default {
    data() {
        return {

        };
    },
    props: {
        code: String,
        lang: String,
    },
    methods: {

    },
    mounted() {
        // window.hljs.initLineNumbersOnLoad();
        // console.log(this.$refs['cd'].innerHTML);
        window.hljs.lineNumbersBlock(this.$refs['cd2'], {singleLine: true});
    }
};    
</script>

<style>
td.hljs-ln-numbers {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    text-align: right;
    /* color: #ccc; */
    color: #909399;
    /* border-right: 1px solid #CCC; */
    border-right: 1.5px solid #909399;
    vertical-align: top;
    padding-right: 10px;

    /* your custom style here */
}

/* for block of code */
td.hljs-ln-code {
    padding-left: 10px;
}
</style>
