<template>
  <div class="routerview">
    <h3>进度查询</h3>
    <el-steps :active="0">
      <el-step title="准备阶段" description=""></el-step>
      <el-step title="网络拓扑图" description="整理"></el-step>
      <el-step title="文案" description="整理"></el-step>
    </el-steps>
  </div>
</template>

<script>


export default {
  name: 'TreeDocumentS',

  data() {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
