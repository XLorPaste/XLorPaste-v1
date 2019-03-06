<template>
<el-row id="xlor-ide">
    <el-col class="ide" :span="20" :push="2">
        <div class="sec-widget" data-widget="2f3005ca967eed19140c66f0b2659e39"></div>
    </el-col>
</el-row>  
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted() {
        let SEC_HTTPS = true;
        let SEC_BASE = "compilers.widgets.sphere-engine.com"; 
        (function(d, s, id){ SEC = window.SEC || (window.SEC = []);
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; 
        js.src = (SEC_HTTPS ? "https" : "http") + "://" + SEC_BASE + "/static/sdk/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);   
        }(document, "script", "sphere-engine-compilers-jssdk"));
    }
}
</script>

<style>
#xlor-ide {
    margin-top: 10px;
}

.ide {
    height: 550px;
}
</style>
