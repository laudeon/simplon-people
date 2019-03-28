<template>
  <div id="app">
    <Searchbar />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Searchbar from '@/components/Searchbar.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    Searchbar
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
