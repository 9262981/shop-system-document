<template>
  <div class="routerview">
    <h3>进度查询-UI-前端</h3>
    <el-steps :active="0">
      <el-step title="UI设计--logo提案" description=""></el-step>
      <el-step title="UI设计--界面提案" description=""></el-step>
      <el-step title="前端实施" description=""></el-step>
      <el-step title="后端整合" description=""></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "Uis",

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
