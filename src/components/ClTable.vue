<template>
  <div class="cl-table">
    <el-container>
      <el-row type="flex">
        <el-col :span="24">
          <el-table :data="data" style="width: 100%">
            <el-table-column prop="status" label="Status" width="100" :fixed="true">
              <template #default="scope">
                <el-switch v-model="scope.row.active" :active-value="true" :inactive-value="false" />
              </template>
            </el-table-column>
            <el-table-column prop="title" label="Activity" min-width="200" :fixed="true" />
            <el-table-column
              v-for="(country) in countries"
              :key="country.id"
              width="200"
            >
              <template #header>
                <p>{{ country.name }}</p>
              </template>
              <template #default="scope">
                <cl-table-cell
                  v-model:value="scope.row.countries[`${country.id}.${scope.row.tag}`].value"
                  :key="`${scope.$index}-${country.id}`" />
              </template>
            </el-table-column>
          </el-table>
          <div>
            <el-input type="text" v-model="countryTest" />
            <el-button type="primary" @click="addCountry">Add Country</el-button>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import ClTableCell from '@/components/ClTableCell'
export default {
  name: 'ClColicTable',
  components: { ClTableCell },
  data () {
    return {
      countryTest: 'Spain',
      countries: {},
      data: [
        {
          active: true,
          editable: false,
          tag: 'exchange_rate',
          title: 'Exchange Rate',
          countries: {}
        },
        {
          active: true,
          editable: true,
          tag: 'income',
          title: 'Income',
          countries: {}
        },
        {
          active: true,
          editable: true,
          tag: 'income_tax',
          title: 'Income Tax',
          countries: {}
        },
        {
          active: true,
          editable: false,
          tag: 'income_tax_deduction',
          title: 'Income Tax Deduction',
          countries: {}
        },
        {
          active: true,
          editable: false,
          tag: 'annual_net_income',
          title: 'Net Income (Annual)',
          countries: {}
        },
        {
          active: true,
          editable: false,
          tag: 'monthly_net_income',
          title: 'Net Income (Monthly)',
          countries: {}
        },
        {
          active: true,
          editable: true,
          tag: 'rent',
          title: 'Rent (1 br Apartment)',
          countries: {}
        }
      ]
    }
  },
  methods: {
    addCountry () {
      const country = {
        id: this.countryTest.toLowerCase(),
        label: this.countryTest.toLowerCase(),
        name: this.countryTest
      }

      this.data.forEach(row => {
        const cellId = country.id + '.' + row.tag

        row.countries[cellId] = {
          id: cellId,
          country: country.name,
          value: 0
        }
      })

      this.countries[country.id] = country
      this.countryTest = 'Japan'
    }
  }
}
</script>

<style lang="scss" scoped>
.cl-table {
  padding: 40px 0;
}
</style>
