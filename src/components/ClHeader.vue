<template>
  <header class="cl-header">
    <el-container>
      <div class="cl-header--nav">
        <img src="../assets/images/colic.svg" alt="C" />
        <ul>
          <li>
            <a href="https://twitter.com/senisulyman/status/1587130039161741319" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/ismailomodara/colic" target="_blank">Github</a>
          </li>
        </ul>
      </div>
      <div class="cl-header--content">
        <h1 class="title">Easily compare income with <br >costs of living</h1>
        <el-form class="form" :model="form" label-position="top">
          <el-form-item label="Base currency">
            <el-select v-model="currency" class="el-custom--input" placeholder="Select currency">
              <el-option v-for="currency in currencies" :key="currency.id" :label="currency.label" :value="currency.code" />
            </el-select>
          </el-form-item>
          <el-form-item label="Base salary">
            <el-input v-model.number="form.salary" type="text" class="el-custom--input" />
          </el-form-item>
        </el-form>
      </div>
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

    img {
      height: 32px;
      width: auto;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;

      li a {
        text-decoration: underline;
        padding: 10px 30px;

        &:last-child {
          padding-right: 0;
        }
      }
    }
  }

  &--content {
    //display: flex;
    .title {
      text-align: center;
    }

    .form {
      max-width: 600px;
      margin: 40px auto 0;
      display: grid;
      grid-template-columns: 0.6fr 1fr;
      grid-column-gap: 15px;
    }
  }
}
</style>
