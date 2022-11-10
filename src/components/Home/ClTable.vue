<template>
  <div class="cl-table">
    <el-container>
      <div class="cl-table--header">
        <h4>Comparing {{ Object.keys(countries).length }}</h4>
        <el-button type="primary" @click="addCountry"
          >Add new location</el-button
        >
      </div>
    </el-container>
    <el-container>
      <el-row type="flex">
        <el-col :span="8">
          <el-table :data="activities" style="width: 100%">
            <el-table-column
              prop="status"
              label="Status"
              width="100"
              :fixed="true"
            >
              <template #default="scope">
                <el-switch
                  v-model="scope.row.active"
                  :active-value="true"
                  :inactive-value="false"
                />
              </template>
            </el-table-column>
            <el-table-column prop="title" label="Activity" :fixed="true" />
          </el-table>
        </el-col>
        <el-col :span="16">
          <el-table
            v-for="country in countries"
            :key="country.id"
            :data="Object.keys(country.properties)"
            style="width: 100%"
          >
            <el-table-column prop="property">
              <template #header>
                <p>{{ country.name }}</p>
              </template>
              <template #default="scope">
                <cl-table-cell
                  v-model:value="country.properties[scope.row]"
                  @updated="compute(country.id, scope.row)"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import { activities } from "@/utils";

import ClTableCell from "@/components/Home/ClTableCell";
export default {
  name: "ClTable",
  props: {
    baseInformation: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  components: { ClTableCell },
  data() {
    return {
      activities: activities(),
      location: null,
      countries: {},
      renderTable: false,
    };
  },
  watch: {
    baseInformation: {
      deep: true,
      handler() {
        this.setBaseLocation();
      },
    },
  },
  methods: {
    setBaseLocation() {
      const { location, salary } = this.baseInformation;
      const country = {
        id: location.id,
        name: location.name,
        label: location.name.toLowerCase(),
      };

      if (!this.location) {
        this.location = location.id;
      } else {
        delete this.countries[this.location];
        this.location = location.id;
      }

      this.countries[country.id] = {
        ...country,
        base: true,
        properties: this.activities.reduce((acc, activity) => {
          return {
            ...acc,
            [activity.tag]: activity.tag === "income" ? salary : 0,
          };
        }, {}),
      };
    },
    compute(country, property) {
      const { income, income_tax } = this.countries[country].properties;

      if (property === "income_tax" && income) {
        const tax = ((income_tax / 100) * income).toFixed(2);
        this.countries[country].properties.income_tax_deduction = tax;
        this.countries[country].properties.annual_net_income = income - tax;
        this.countries[country].properties.monthly_net_income =
          (income - tax) / 12;
      }
    },
    addCountry() {
      const country = {
        id: this.countryTest.toLowerCase(),
        label: this.countryTest.toLowerCase(),
        name: this.countryTest,
      };

      this.data.forEach((row) => {
        const cellId = country.id + "." + row.tag;

        row.countries[cellId] = {
          id: cellId,
          country: country.name,
          value: 0,
        };
      });

      this.countries[country.id] = country;
      this.countryTest = "Japan";
    },
  },
};
</script>

<style lang="scss" scoped>
.cl-table {
  padding: 40px 0;

  &--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 40px;
  }
}
</style>
