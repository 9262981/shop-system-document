<template>
  <div class="routerview">
    <h3>代码部署</h3>
    <el-steps :active="0">
      <el-step title="代码部署" description=""></el-step>
      <el-step title="代码开发" description=""></el-step>
      <el-step title="代码测试" description=""></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "Deploys",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
