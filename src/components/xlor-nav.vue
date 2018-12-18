<template>
<el-menu id="xlor-nav" :class="menuClass"
    :default-active="activeIndex" :mode="mode" @select="handleSelect">

    <el-col :span="2" :xs="0"></el-col>
    <el-menu-item index="index" class="nav-logo no-select"><router-link to="/index">XLorPaste</router-link></el-menu-item>
    <el-menu-item index="in" style="height: 100%;" class="no-border">
        <el-input placeholder="神秘串串" :style="inputStyle" v-model="codeID" @keyup.enter.native="goUrl">
            <template slot="prepend">{{ baseURL.split('://')[1] }}</template>
            <!-- <el-button slot="append" type="primary" icon="el-icon-arrow-right"></el-button> -->
            <!-- <el-button slot="append">Go</el-button> -->
        </el-input>  
    </el-menu-item>
    
</el-menu>
</template>

<script>
const changeFontSize = function() {
    const width = document.body.clientWidth;
    let ans = "16px";
    if (width < 1024) {
        ans = width / 1024 * 16 + "px";
    }
    document.documentElement.style.fontSize = ans;
}

export default {
    data() {
        return {
            activeIndex: "index",
            codeID: null,
            screenWidth: document.body.clientWidth,
            onMobile: false,
            mode: "horizontal",
            menuClass: [
                "align-center", "el-row", "is-align-middle", "el-row--flex"
            ],
            inputStyle: {
                "width": "400px"
            }
        };
    },
    methods: {
        handleSelect() {
            // this.router.push({
            //     path: '/index'
            // });
        },
        goUrl() {
            // console.log('go:', this.codeID);
            if (!this.codeID) {
                this.router.push({
                    path: '/index'
                });
            } else {
                this.router.push({
                    path: '/' + this.codeID
                });
            }
            this.codeID = null;
        },
    },
    mounted() {
        // document.documentElement.style.fontSize = document.body.clientWidth / 1024 * 14 + "px";
        changeFontSize();

        if (document.body.clientWidth < 430) {
            this.onMobile = true;
            this.mode = "vertical";
            this.menuClass = ["align-center"];
            this.inputStyle['width'] = "100%";
        }

        const that = this;
        window.onresize = () => {
            return (() => {
                changeFontSize();
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
                // console.log(that.screenWidth);
                if (that.screenWidth < 430) {
                    that.onMobile = true;
                    that.mode = "vertical";
                    that.menuClass = ["align-center"];
                    that.inputStyle['width'] = "100%";
                } else {
                    that.onMobile = false;
                    that.mode = "horizontal";
                    that.menuClass = ["align-center", "el-row", "is-align-middle", "el-row--flex"];
                    that.inputStyle['width'] = "400px";
                }
            })()
        } 
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
    font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
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
.no-border {
    border-width: 0px !important;
}
</style>
