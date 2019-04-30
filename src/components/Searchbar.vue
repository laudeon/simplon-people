<template>
  <header id="searchbar">
    <form>
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
        this.$store.commit(`${this.$store.state.activeView}/filter`, newPlayload)
      }
    }
  }
</script>

<style lang="sass" scoped>
header#searchbar
  margin-left: 200px

  form
    width: 50vw
    margin: 0 auto

    input
      width: 100%
      height: 2rem
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

