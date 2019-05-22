<template>
<el-row id="xlor-view">
    <transition appear>
    
    <el-col v-if="onload" :span="20" :push="2" ref="faElement" id="faElement">
        <el-card class="display-code">
            <xlor-code :code="code" :lang="lang"></xlor-code>
        </el-card>
        <el-button type="primary" size="mini" class="copy-button" :style="copyStyle" @click="copyData">复制</el-button>
    </el-col>

    </transition>
</el-row>   
</template>

<script>
import { Base64 } from 'js-base64'
import xlorCode from './xlor-code'

const idToLang = {
    0: 'text',
    1: 'cpp',
    2: 'python',
    3: 'java',
    4: 'javascript',
    5: 'html'
};

export default {
    data() {
        return {
            onload: false,
            pcode: '',
            lang: 'text',
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
        },
        getData() {
            this.axios.get('/query/' + this.id).then(function(response) {
                var data = response.data;
                // console.log(data);
                if (data['status'] === 'reject') {
                    this.$message({
                        duration: 4000,
                        message: 'Token不合法',
                        type: 'error'
                    });
                    this.$router.replace({
                        path: '/index'
                    });
                }
                this.code = Base64.decode(data['code']);
                this.lang = idToLang[data['lang']];
                this.onload = true;

            }.bind(this)).catch(function(error) {
                // console.log(error);
                let msg = '服务器错误';
                if (error.response && error.response.status === 404) {
                    msg = 'Token不合法';
                }

                this.$message({
                    duration: 4000,
                    message: msg,
                    type: 'error'
                });
                this.$router.replace({
                    path: '/index'
                });
                
            }.bind(this));
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        code: {
            get() {
                return window.hljs.highlightAuto(this.pcode.replace(/\t/g, '    ')).value ;
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
        this.getData();
    },
    watch: {
        "$route": "getData"
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
    font-family: FiraCode, consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;
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

.v-enter {
    opacity: 0;
    z-index: -1;
    transform: translateY(-100px);
}
.v-enter-active {
    transition: all 0.5s ease;
}
.v-enter-to {
    z-index: 0;
    opacity: 1;
}
</style>
