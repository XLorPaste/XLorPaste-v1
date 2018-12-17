<template>
<el-row id="xlor-editor" type="flex" align="center">
    <el-col :span="20" :push="2">

        <el-row>
            <strong>语言&nbsp;</strong>
            <el-select v-model="lang" placeholder="请选择">
                <el-option
                v-for="item in langList"
                :key="item"
                :label="item"
                :value="item">
                </el-option>
            </el-select>
        </el-row>

        <el-card shadow="always">
            <monaco-editor
                class="editor"
                v-model="code"
                :options="option"
                :language="lang"
                theme="Visual Studio">
            </monaco-editor>
        </el-card>

        <el-button class="submit-button" type="success" icon="el-icon-upload" @click="submit">提交</el-button>

        <!-- <el-button type="text">查看文本</el-button> -->
    </el-col>
</el-row>
</template>

<script>
import MonacoEditor from 'vue-monaco'
import { Base64 } from 'js-base64'

const LANG = {
    "text": 0,
    "cpp": 1,
    "python": 2,
    "java": 3
};

export default {
    data() {
        return {
            code: "",
            option: {
                scrollBeyondLastLine: false,
            },
            lang: "cpp",
            langList: [ "text", "cpp", "python", "java" ]
        };
    },
    methods: {
        submit() {
            // console.log(this.code);
            this.$notify.closeAll();

            var form = {
                code: Base64.encodeURI(this.code),
                lang: LANG[this.lang]
            };
            this.axios.post("/upload", form).then(function(response) {
                var data = response.data;

                // console.log(data['token']);

                if (data['status'] == 'reject') {
                    
                    return false;
                } 

                const msg = `文本对应的 Token 为 <strong>${data['token']}</strong><br>
                <a href="${this.baseURL}${data['token']}"><button type="button" class="el-button el-button--text">查看文本</button></a>
                <button type="button" class="el-button el-button--text" onclick="window.copyData('${data['token']}')">复制链接</button>`;
                this.$notify({
                    title: '上传成功',
                    type: 'success',
                    dangerouslyUseHTMLString: true,
                    message: msg,
                    duration: 0
                });

            }.bind(this)).catch(error => {
                this.$message.error('上传失败');
            }); 
        }
    },
    components: {
        MonacoEditor
    },    
};    
</script>

<style>
#xlor-editor {
    margin: 10px auto;
    padding: 1px;
    height: 650px;
    /* width: 80%;
    height: 600px; */
    /* border: 1px solid black; */
}
#xlor-editor>.el-col {
    height: 500px;
}
#xlor-editor .el-card {
    margin-top: 10px;
    width: 100%;
    height: 100%;
}
#xlor-editor .el-card>div {
    margin: 0 auto;
    width: 96%;
    height: 96%;
}
#xlor-editor .editor {
  /* margin: 20px auto; */
  width: 100%;
  height: 100%;
  /* height: 600px; */
  /* border: 1px solid black; */
  /* padding: 1px; */
}

#xlor-editor .submit-button {
    margin: 10px auto; 
}
</style>
