<template>
<el-row id="xlor-view">
    <el-col :span="20" :push="2">
        <el-card v-if="onload" class="display-code">
            <xlor-code :code="code" :lang="lang"></xlor-code>
        </el-card>
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
        };
    },
    methods: {
        
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
        }
    },
    mounted() {
        this.$notify.closeAll();

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
                message: 'Invalid Token',
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

pre>code {
    font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace;;
    width: 100%;
}

</style>
