<template>
<div id="xlor-footer">
    <el-row>Powered by <a href="http://xlor.cn">XLor</a></el-row>
    <el-row>© 2018 XLorPaste</el-row>
</div>
</template>

<script>
export default {
    name: "xlor-footer",
    props: {

    }
};
</script>

<style>
#xlor-footer{
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 10px;
    color: #909399;
    text-align: center;
    font-family: Consolas, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", monospace;
    font-size: 14px;
}
</style>