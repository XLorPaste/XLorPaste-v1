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
pre, code {
    white-space: pre;
    overflow-x: auto;
}
.hljs {
    display: inline-block;
    overflow-x: auto;
    padding: 0.5em;
    padding-right: 100%;
    background: #002b36;
    color: #839496;
    -webkit-text-size-adjust: none;
}
td.hljs-ln-numbers {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    text-align: right;
    color: #909399;
    /* border-right: 1px solid #CCC; */
    border-right: 1px solid #909399;
    /* box-shadow: inset -1px 0px 1px -1px #909399; */
    vertical-align: top;
    padding-right: 5px !important;

    /* your custom style here */
}
/* td.hljs-ln-numbers>div {
    margin-right: 5px;
} */

@media screen and (-webkit-min-device-pixel-ratio: 2){
    td.hljs-ln-numbers {
        border: none;
        background-position: left top;
        background-image: -webkit-gradient(linear,left top,right top,color-stop(0.96,transparent),color-stop(0.96,#909399),to(#909399));
    }
}

/* for block of code */
td.hljs-ln-code {
    padding-left: 5px !important;
}
</style>
