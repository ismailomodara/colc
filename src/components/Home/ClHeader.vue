<template>
  <header class="cl-header">
    <el-container>
      <div class="cl-header--content">
        <h1 class="title">Easily compare incomes <br />with costs of living</h1>
        <el-form class="form" :model="form" label-position="top">
          <el-row type="flex" :gutter="20">
            <el-col :md="10">
              <el-form-item label="Current location">
                <el-select
                  v-model="form.location"
                  class="el-custom--input"
                  placeholder="Select location"
                  value-key="id"
                >
                  <el-option
                    v-for="location in locations"
                    :key="location.id"
                    :label="location.name"
                    :value="location"
                  >
                    <span class="cl-location--label">
                      <img :src="location.image" :alt="location.name" />
                      <span>{{ location.name }}</span>
                    </span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :md="14">
              <el-form-item label="Current salary">
                <el-input
                  v-model.number="form.salary"
                  type="text"
                  class="el-custom--input"
                  placeholder="Enter amount"
                  @keydown="validateAmount"
                >
                  <template #prepend>
                    <el-select
                      v-model="form.currency"
                      class="el-custom--input"
                      placeholder="Currency"
                    >
                      <el-option
                        v-for="currency in currencies"
                        :key="currency.id"
                        :label="currency.label"
                        :value="currency.id"
                      />
                    </el-select>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-container>
  </header>
</template>

<script>
import { locations, currencies, validateAmount } from "@/utils";

export default {
  name: "ClHeader",
  data() {
    return {
      form: {
        location: null,
        salary: null,
        currency: 2,
      },
      locations: locations(),
      currencies: currencies(),
    };
  },

  watch: {
    form: {
      deep: true,
      handler() {
        const { location, salary } = this.form;
        if (location && salary) {
          this.$emit("update-base-information", this.form);
        }
      },
    },
  },
  methods: {
    validateAmount,
  },
};
</script>

<style lang="scss" scoped>
.cl-header {
  min-height: 80vh;
  display: grid;
  align-items: center;
  //background: #04395e;
  background: #04395e url("../../assets/images/background.jpeg");
  background-blend-mode: multiply;
  position: relative;

  &--content {
    //display: flex;
    .title {
      text-align: center;
      color: #fff;
    }

    .form {
      max-width: 600px;
      margin: 40px auto 0;
    }
  }
}

.cl-location--label {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 5px;
  align-items: center;

  img {
    height: 14px;
    width: auto;
  }
}
</style>
