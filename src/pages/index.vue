<template>
  <cl-header />
  <cl-table />
</template>

<script>
import ClHeader from '@/components/ClHeader'
import ClTable from '@/components/ClTable'

export default {
  name: 'AppIndex',
  components: { ClTable, ClHeader },
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
