<template>
  <div class="routerview">
    <h3>网络拓扑图/文案梳理---负责人:施佳</h3>
    <!-- <img src='../../assets/anttax/flowstructrue.jpg' width="100%" preview="1" preview-text=""> -->
    <TreeDocumentS></TreeDocumentS>
  </div>
</template>

<script>

import TreeDocumentS from './treedocuments' 

export default {
  name: 'TreeDocument',

  data() {
    return {
    }
  },
  components: {
    TreeDocumentS
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
