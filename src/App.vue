<template>
  <div id="app">
    <section id="intro" v-if="$store.state.me.logged === false">
      <p>
        Qui c'est ? Où est-elle ? Qu'est-ce qu'il fait ?
      </p>
      <h1>Bienvue sur <strong>le répertoire des équipes de Simplon.</strong></h1>
    </section>
    <Searchbar v-if="$store.state.me.logged === true" />
    <Sidebar v-if="$store.state.me.logged === true" />
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


<style lang="sass">
#app
  font-family: 'Ubuntu', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #323232
  font-size: 1rem
  
  section#intro
    text-align: center
    margin: 20vh auto 6rem auto
    
    p
      color: #ce0033
      font-size: 1.5rem

    h1
      margin: 0
      font-size: 3rem
      font-weight: 200

</style>
