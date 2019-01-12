<template>
  <div class="routerview">
      <h3>联络名单:</h3>

  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="职位"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="qq"
      label="QQ">
    </el-table-column>
    <el-table-column
      prop="wechat"
      label="微信">
    </el-table-column>
    <el-table-column
      prop="telephone"
      label="TEL">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

 export default {
  name: 'Contact',
    data() {
      return {
        tableData: [{
          date: 'java',
          name: '刘畅',
          wechat:'null',
          qq:'null',
          telephone: 'null'
        },  {
          date: '产品+前端',
          name: '王营超',
          wechat:'way8410',
          qq:'null',
          telephone: 'null'
        }, {
          date: '策划',
          name: '大鹏',
          wechat:'9262981',
          qq:'9262981',
          telephone: '17611262981'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
