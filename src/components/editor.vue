<template>
  <el-row id="xlor-editor" type="flex" align="center">
    <el-col :span="20" :push="2" :xs="{ span: 22, push: 1 }">
      <el-row>
        <strong style="font-size: 14px;">语言&nbsp;</strong>
        <el-select
          size="medium"
          v-model="lang"
          placeholder="请选择"
          style="margin-right: 10px;"
        >
          <el-option
            v-for="item in langList"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <el-button
          size="medium"
          class="submit-button"
          type="success"
          icon="el-icon-upload"
          @click="submit"
          >提交</el-button
        >
      </el-row>

      <el-input
        class="editor"
        type="textarea"
        :autosize="{ minRows: 20 }"
        :rows="20"
        autofocus="true"
        v-model="code"
      >
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
import { uploadCode } from "../service";
import { LANG } from "../config";

export default {
  data() {
    return {
      code: "",
      lang: "cpp",
      langList: Object.keys(LANG)
    };
  },
  methods: {
    async submit() {
      this.$notify.closeAll();

      if (this.code.length < 10) {
        this.$message.error("分享的代码长度至少为 10 个字符");
        return false;
      }

      try {
        const { data } = await uploadCode(this.code, this.lang);
        const msg = `文本对应的 Token 为 <strong>${data.token}</strong><br>
            <a href="/${data.token}"><button type="button" class="el-button el-button--text">查看文本</button></a>
            <button type="button" class="el-button el-button--text" onclick="window.copyData('${data.token}')">复制链接</button>`;
        this.$notify({
          title: "上传成功",
          type: "success",
          dangerouslyUseHTMLString: true,
          message: msg,
          duration: 0
        });
      } catch (err) {
        this.$message.error("上传失败");
      }
    }
  }
};
</script>

<style>
#xlor-editor {
  margin: 10px auto;
  padding: 1px;
}
#xlor-editor .editor {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 16px !important;
}
#xlor-editor .submit-button {
  margin: 10px auto;
}
</style>
