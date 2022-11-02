<template>
  <header class="cl-header">
    <el-container>
      <el-row type="flex">
        <el-col :span="24">
          <div class="cl-header--nav">
            <h4>Colic</h4>
            <span>Sushi</span>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <h1 class="cl-header--title">Easily compare income with <br >costs of living</h1>
          <el-form class="cl-header--form" :model="form" label-position="top">
            <el-form-item label="Base currency">
              <el-select v-model="currency" class="el-custom--input" placeholder="Select currency">
                <el-option v-for="currency in currencies" :key="currency.id" :label="currency.label" :value="currency.code" />
              </el-select>
            </el-form-item>
            <el-form-item label="Base salary">
              <el-input v-model.number="form.salary" type="text" class="el-custom--input" />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-container>
  </header>
</template>

<script>
export default {
  name: 'ClHeader',
  data () {
    return {
      form: {
        currency: null,
        salary: null
      },
      currency: null,
      currencies: [
        {
          id: 1,
          image: null,
          symbol: '$',
          code: 'usd',
          label: 'USD'
        },
        {
          id: 2,
          image: null,
          symbol: '£',
          code: 'gbp',
          label: 'GBP'
        },
        {
          id: 3,
          image: null,
          symbol: '€',
          code: 'eur',
          label: 'EUR'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cl-header {
  min-height: 60vh;
  display: grid;
  align-items: center;
  background-color: var(--cl-blue-background);
  position: relative;

  &--nav {
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 100px;
  }

  &--title {
    text-align: center;
  }

  &--form {
    max-width: 600px;
    margin: 30px auto 0;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-column-gap: 15px;
  }
}
</style>
