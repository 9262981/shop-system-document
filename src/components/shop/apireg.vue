<template>
  <div class="routerview">

    <h3>支付宝接口申请</h3>
    
    <h3>微信支付接口申请</h3>
  
    <h3>短信服务接口申请</h3>

    <Apiregs></Apiregs>

  </div>
</template>

<script>
import Apiregs from './apiregs' 

export default {
  name: 'Apireg',

  data() {
    return {
    }
  },
  components: {
    Apiregs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
