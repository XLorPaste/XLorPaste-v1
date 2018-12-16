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
                language="python">
            </monaco-editor>
        </el-card>

        <el-button class="submit-button" type="success" icon="el-icon-upload" @click="submit">提交</el-button>

    </el-col>
</el-row>
</template>

<script>
import MonacoEditor from 'vue-monaco'

export default {
    data() {
        return {
            code: "print('Hello World')",
            option: {
                scrollBeyondLastLine: false,
            },
            lang: "C++",
            langList: [ "Text", "C++", "python", "Java" ]
        };
    },
    methods: {
        submit() {
            console.log(this.code);
            
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
