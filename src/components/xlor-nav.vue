<template>
<el-menu id="xlor-nav" class="el-row is-align-middle el-row--flex"
    :default-active="activeIndex" mode="horizontal">

    <el-col :span="2"></el-col>
    <el-menu-item index="index" class="nav-logo">XLorPaste</el-menu-item>
    
    <div style="height: 100%; width: 400px; margin-left: 5px;">
        <el-input placeholder="Token串" v-model="codeID">
            <template slot="prepend">localhost:8080/</template>
            <!-- <el-button slot="append" type="primary" icon="el-icon-arrow-right"></el-button> -->
            <!-- <el-button slot="append">Go</el-button> -->
        </el-input>  
    </div>
    
</el-menu>
</template>

<script>

export default {
    data() {
        return {
            activeIndex: "index",
            codeID: null,
        };
    },
    methods: {
        
    }
};

</script>

<style>
#xlor-nav {
    /* width: 80%; */
    margin: 0 auto;
}
#xlor-nav .nav-logo {
    font-size: 23px;
    font-family: Consolas;
}
#xlor-nav .go-url {
    padding: 0 10px;
}

#xlor-nav .el-input-group__prepend {
    /* custom slot style */
    padding: 0 10px !important;
}
#xlor-nav .el-input-group__append {
    /* padding: auto 10px !important; */
    padding: 0 12px !important;
    background-color: #409EFF !important;
    color: #ffffff !important;
    border-width: 0px !important;
}
</style>
