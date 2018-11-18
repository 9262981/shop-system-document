<template>
  <div class="routerview">

    <h3>商城名称选定</h3>
    <div style="">
      <p>1.</p>
      <p>1.</p>
      <p>3.</p>
    </div>
    <h3>域名名称选定</h3>
    <div style="">
      <p>1.</p>
      <p>1.</p>
      <p>3.</p>
    </div>
    <Domainnames></Domainnames>

  </div>
</template>

<script>
import Domainnames from './domainnames' 

export default {
  name: 'Domainname',

  data() {
    return {
    }
  },
  components: {
    Domainnames
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
