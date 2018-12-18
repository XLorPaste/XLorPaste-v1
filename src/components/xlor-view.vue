<template>
<el-row id="xlor-view">
    <el-col :span="20" :push="2" ref="faElement" id="faElement">
        <el-card v-if="onload" class="display-code">
            <xlor-code :code="code" :lang="lang"></xlor-code>
        </el-card>
        <el-button type="primary" size="mini" class="copy-button" :style="copyStyle" @click="copyData">复制</el-button>
    </el-col>
</el-row>   
</template>

<script>
import { Base64 } from 'js-base64'
import xlorCode from './xlor-code'

const idToLang = {
    0: 'text',
    1: 'cpp',
    2: 'python',
    3: 'java'
};

export default {
    data() {
        return {
            onload: false,
            pcode: '',
            lang: 'plaintext',
            // copyStyle: {
            //     top: "9px",
            // },
        };
    },
    props: {
        width: Number,
    },
    methods: {
        copyData() {
            window.copyData(this.pcode, 1);
            this.$message({
                message: '复制成功',
                type: 'success'
            });
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        code: {
            get() {
                return window.hljs.highlightAuto(this.pcode).value ;
            },
            set(x) {
                this.pcode = x;
            }
        },
        copyStyle() {
            if (this.width >= 1024) {
                return { top: "9px" }
            } else {
                return { top: "7px" }
            }
        }
    },
    mounted() {
        this.$notify.closeAll();

        // if (document.body.clientWidth < 1024) {
        //     this.copyStyle.top = "6px";
        // }

        // this.copyStyle.top = this.$refs.faElement.$el.offsetWidth * 0.015 + "px";
        // let sz = parseInt(document.documentElement.style.fontSize.split('px')[0]);
        // if (sz <= 12) {
        //     this.copyStyle['font-size'] = document.documentElement.style.fontSize + " !important";
        // }
        // console.log(this.copyStyle['font-size']);
        // console.log(this.copyStyle.top);

        this.axios.get('/query/' + this.id).then(function(response) {
            var data = response.data;
            // console.log(data);
            if (data['status'] === 'reject') {

                return false;
            }
            this.code = Base64.decode(data['code']);
            this.lang = idToLang[data['lang']];
            this.onload = true;

        }.bind(this)).catch(function(error) {
            console.log(error);

            this.$message({
                duration: 4000,
                message: 'Token不合法',
                type: 'error'
            });
            this.router.replace({
                path: '/index'
            });
            
        }.bind(this));

    },
    components: {
        xlorCode
    }
};
</script>

<style>
#xlor-view {
    margin: 20px auto;
}
#xlor-view>.el-col {
    position: relative;
}

pre>code {
    font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
    width: 100%;
}
#xlor-view .copy-button {
    /* position: absolute;
    top: 10px;
    right: 2%; */
    position: absolute;
    right: 1.5%;
    padding: 7px 10px !important;
}

#xlor-view .display-code>div {
    padding: 12px 2% !important;
    height: 100%;
    width: 96%;
}
</style>
