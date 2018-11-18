<template>
  <div class="routerview">
      <h3>联络名单:(QQ群:******)</h3>

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
          date: '项目主管',
          name: '王小虎',
          wechat:'111111',
          qq:'111111',
          telephone: '13311112222'
        }, {
          date: '后端',
          name: '王小虎',
          wechat:'111111',
          qq:'111111',
          telephone: '13311112222'
        }, {
          date: '前端',
          name: '王小虎',
          wechat:'111111',
          qq:'111111',
          telephone: '13311112222'
        }, {
          date: 'UI',
          name: '王小虎',
          wechat:'111111',
          qq:'111111',
          telephone: '13311112222'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
