<template>
  <el-row id="xlor-view">
    <transition appear>
      <el-col
        v-if="onload"
        ref="faElement"
        id="faElement"
        :span="20"
        :push="2"
        :xs="{ span: 22, push: 1 }"
      >
        <el-card class="display-code">
          <xlor-code :code="code" :lang="lang"></xlor-code>
        </el-card>
        <el-button
          type="primary"
          size="mini"
          class="copy-button"
          :style="copyStyle"
          @click="copyData"
          >复制</el-button
        >
      </el-col>
    </transition>
  </el-row>
</template>

<script>
import xlorCode from "./code";
import { getCode } from "../service";

export default {
  data() {
    return {
      onload: false,
      pcode: "",
      lang: "text"
    };
  },
  props: {
    width: Number
  },
  methods: {
    copyData() {
      window.copyData(this.pcode, 1);
      this.$message({
        message: "复制成功",
        type: "success"
      });
    },
    async getData() {
      try {
        const code = await getCode(this.id);
        this.code = code.body;
        this.lang = code.lang;
        this.onload = true;
      } catch (err) {
        let msg = "服务器错误";
        if (err.response && err.response.status === 404) {
          msg = "Token不合法";
        }
        this.$message({
          duration: 4000,
          message: msg,
          type: "error"
        });
        this.$router.replace({
          path: "/index"
        });
      }
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    code: {
      get() {
        return window.hljs.highlightAuto(this.pcode.replace(/\t/g, "    "))
          .value;
      },
      set(x) {
        this.pcode = x;
      }
    },
    copyStyle() {
      if (this.width >= 1024) {
        return { top: "9px" };
      } else {
        return { top: "7px" };
      }
    }
  },
  mounted() {
    this.$notify.closeAll();
    this.getData();
  },
  watch: {
    $route: "getData"
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
#xlor-view > .el-col {
  position: relative;
}

pre > code {
  font-family: FiraCode, consolas, Menlo, "PingFang SC", "Microsoft YaHei",
    monospace;
  width: 100%;
}
#xlor-view .copy-button {
  position: absolute;
  right: 1.5%;
  padding: 7px 10px !important;
}

#xlor-view .display-code > div {
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
