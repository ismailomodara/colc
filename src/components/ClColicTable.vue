<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column label="Name">
        <template #default="scope">
          <cl-colic-table-cell v-model:value="scope.row.name" />
        </template>
      </el-table-column>
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script>
import ClColicTableCell from '@/components/ClColicTableCell'
export default {
  name: 'ClColicTable',
  components: { ClColicTableCell },
  data () {
    return {
      editCell: false,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
