<template>
  <header id="searchbar">
    <form @submit.prevent>
      <input type="text" name="s-payload" id="search-input" v-model="spayload" placeholder="Rechercher...">
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
        this.$store.commit('search', newPlayload)
      }
    }
  }
</script>

<style lang="sass" scoped>
header#searchbar
  background: #ffffff
  margin-left: 220px
  height: 5rem
  padding: 1.2rem 0 0 30px

  form
    width: 50vw

    input
      width: 70%
      height: 2.5rem
      border: 1px solid #eeeeee
      border-radius: 3px
      box-shadow: 0 2px 8px #dedede
      padding: .5rem
      color: #929292
      transition: .3s

      &:focus
        box-shadow: 0 2px 10px #cecece
        color: #424242
</style>

