<template>
  <p v-if="!editing" @click="editing = !editing">{{ setValue }}</p>
  <el-input v-else v-model="setValue" type="text" @blur="editing = false" />
</template>

<script>
export default {
  name: 'ClColicTableCell',
  props: {
    value: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      editing: false
    }
  },
  computed: {
    setValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('update:value', value)
      }
    }
  }
}
</script>

<style scoped>

</style>
