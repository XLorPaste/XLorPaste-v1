<template>
<el-row id="xlor-editor">
    <el-col :span="20" :push="2">
        <el-card shadow="always">
            <monaco-editor
                class="editor"
                v-model="code"
                :options="option"
                language="python">
            </monaco-editor>
        </el-card>
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
            }
        };
    },
    components: {
        MonacoEditor
    },    
};    
</script>

<style>
#xlor-editor {
    margin: 30px auto;
    padding: 1px;
    /* width: 80%;
    height: 600px; */
    /* border: 1px solid black; */
}
#xlor-editor>.el-col {
    height: 600px;
}
#xlor-editor .el-card {
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
</style>
