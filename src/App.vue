<template>
  <div id="app">
    <Searchbar />
    <Sidebar />
    <GoogleSingIn />
    <router-view v-if="$store.state.me.logged === true" />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Searchbar from '@/components/Searchbar.vue'
import GoogleSingIn from '@/components/GoogleSignIn.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    Searchbar,
    GoogleSingIn
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
