<template>
  <div class="routerview">
    <h3>进度查询</h3>
    <el-steps :active="0">
      <el-step title="支付宝接口申请" description=""></el-step>
      <el-step title="微信支付接口申请" description=""></el-step>
      <el-step title="短信服务接口申请" description=""></el-step>

    </el-steps>
  </div>
</template>

<script>
export default {
  name: "Apiregs",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
