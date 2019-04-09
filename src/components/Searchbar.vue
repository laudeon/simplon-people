<template>
  <header id="searchbar">
    <form>
      <input type="text" name="s-payload" id="search-input" v-model="spayload">
    </form>
  </header>
</template>

<script>
export default {
  name: 'searchbar',
  data () {
    return {
      spayload: ''
    }
  },
  watch: {
    spayload: function(newPlayload) {
      this.$store.commit('trainers/filter', newPlayload)
    }
  }
}
</script>
