<template>
  <div class="routerview">

    <h3>项目实施/总进度查询</h3>
    <SourceChooseS></SourceChooseS>
    <Domainnames></Domainnames>
    <Uis></Uis>
    <Apiregs></Apiregs>
    <Productfunctions></Productfunctions>
    <Deploys></Deploys>
    <TreeDocumentS></TreeDocumentS>
  </div>
</template>

<script>

import SourceChooseS from '@/components/shop/sourcechooses.vue'
import Domainnames from '@/components/shop/domainnames.vue'
import Apiregs from '@/components/shop/apiregs.vue'
import Productfunctions from '@/components/shop/productfunctions.vue'
import Deploys from '@/components/shop/deploys.vue'
import TreeDocumentS from '@/components/shop/treedocuments.vue'
import Uis from '@/components/shop/uis.vue'

export default {
  name: 'ScheduleV100',

  data() {
    return {
    }
  },
  components: {
    SourceChooseS,
    Domainnames,
    Apiregs,
    Productfunctions,
    Deploys,
    TreeDocumentS,
    Uis,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
