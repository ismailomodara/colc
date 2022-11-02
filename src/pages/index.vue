<template>
  <cl-header />
  <cl-colic-table />
</template>

<script>
import ClHeader from '@/components/ClHeader'
import ClColicTable from '@/components/ClColicTable'

export default {
  name: 'AppIndex',
  components: { ClColicTable, ClHeader },
  data () {
    return {
      form: {
        currency: null
      }
    }
  }
}
</script>

<style lang="scss">

</style>
