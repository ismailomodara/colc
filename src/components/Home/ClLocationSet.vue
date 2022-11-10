<template>
  <el-dialog
    v-model="setShow"
    title="Set Location"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    width="40%"
  >
    <el-form class="form" :model="form" label-position="top">
      <el-row type="flex">
        <el-col :md="16">
          <el-form-item label="Current location">
            <el-select
              v-model="form.location"
              class="el-custom--input"
              placeholder="Select location"
              value-key="id"
              @change="setCurrency"
            >
              <el-option
                v-for="location in locations"
                :key="location.id"
                :label="location.name"
                :value="location"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="8">
          <el-form-item label="Location currency">
            <el-input v-model="form.location_currency" disabled />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="Current salary">
        <el-input
          v-model.number="form.salary"
          type="text"
          class="el-custom--input input-with-select"
          placeholder="Enter amount"
          @keydown="validateAmount"
        >
          <template #append>
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
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">Cancel</el-button>
        <el-button type="primary" @click="set"> Set </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { currencies, locations, validateAmount } from '@/utils'

export default {
  name: "ClLocationSet",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        location: null,
        location_currency: null,
        salary: null,
        currency: null,
      },
      locations: locations(),
      currencies: currencies(),
    };
  },
  computed: {
    setShow: {
      get() {
        return this.show;
      },
      set(value) {
        this.$emit("update:show", value);
      },
    },
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
    cancel() {
      this.setShow = false;
    },
    set() {
      //
    },
    validateAmount,
    setCurrency() {
      this.form.currency = this.form.location.currency_id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
