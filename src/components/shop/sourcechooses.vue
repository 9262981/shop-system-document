<template>
  <div class="routerview">
    <h3>源码方案选定</h3>
    <el-steps :active="3">
      <el-step title="方案整理" description="源码方案整理"></el-step>
      <el-step title="源码选定" description=""></el-step>
      <el-step title="方案实施" description=""></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "SourceChooseS",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
