<template>
<pre id="xlor-code"><code :class="lang" v-html="code" ref="cd"></code></pre>
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
        refresh() {
            window.hljs.lineNumbersBlock(this.$refs['cd'], {singleLine: true});   
        }
    },
    watch: {
        code: "refresh"
    },
    mounted() {
        const dom = this.$refs['cd'];

        const changeFontSize = function() {
            const width = document.body.clientWidth;
            let fs = '16px', lh = '24px';
            if (width < 1024) {
                fs = "10px"; lh = '18px';
            }

            try {
                dom.style['font-size'] = fs;
                dom.style['line-height'] = lh;
                dom.style['height'] = lh;
            } catch(ex) {
                console.log(ex);
            } finally {
                return false;
            }
        };
        changeFontSize();

        window.addEventListener('resize', changeFontSize);

        window.hljs.lineNumbersBlock(this.$refs['cd'], {singleLine: true});
    }
};    
</script>

<style>
#xlor-code {
    width: 100%;
    font-size: 16px;
}
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
    border-right: 1px solid #909399;
    vertical-align: top;
    padding-right: 5px !important;

    /* your custom style here */
    /* font-size: 16px;
    line-height: 24px;
    height: 24px; */
}

@media screen and (-webkit-min-device-pixel-ratio: 2){
    td.hljs-ln-numbers {
        border: none;
        background-position: left top;
        background-image: -webkit-gradient(linear,left top,right top,color-stop(0.96,transparent),color-stop(0.96,#909399),to(#909399));
    }
}

/* for block of code */
td.hljs-ln-code {
    /* height: 24px; */
    padding-left: 10px !important;
    /* line-height: 24px; */
}

pre>code tr {
    /* line-height: 24px; */
    padding: 0px;
}
</style>
