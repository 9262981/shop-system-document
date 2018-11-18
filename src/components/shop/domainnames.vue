<template>
  <div class="routerview">
    <h3>进度查询</h3>
    <el-steps :active="0">
      <el-step title="名称选定" description=""></el-step>
      <el-step title="域名申请" description=""></el-step>
      <el-step title="域名预备案" description=""></el-step>
      <el-step title="备案照相" description=""></el-step>
      <el-step title="提交备案" description=""></el-step>
      <el-step title="备案审核" description=""></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "Domainnames",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
