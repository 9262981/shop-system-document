<template>
  <div class="routerview">

    <h3>代码部署细节</h3>
    

    <Deploys></Deploys>

  </div>
</template>

<script>
import Deploys from './deploys' 

export default {
  name: 'Deploy',

  data() {
    return {
    }
  },
  components: {
    Deploys
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
