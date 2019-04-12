<template>
  <div id="app">
    <section id="intro" v-if="logged === false">
      <p>
        Qui c'est ? Où est-elle ? Qu'est-ce qu'il fait ?
      </p>
      <h1>Bienvue sur <strong>le répertoire des équipes de Simplon.</strong></h1>
    </section>
    <Searchbar v-if="logged === true" />
    <Sidebar v-if="logged === true" />
    <GoogleSingIn />
    <router-view v-if="logged === true" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Sidebar from '@/components/Sidebar.vue'
  import Searchbar from '@/components/Searchbar.vue'
  import GoogleSingIn from '@/components/GoogleSignIn.vue'

  export default {
    name: 'app',
    components: {
      Sidebar,
      Searchbar,
      GoogleSingIn
    },
    computed: {
      ...mapState({
        logged: state => state.me.logged, 
      })
    },
    created () {
      let loader = this.$loading.show()
      loader.hide()
      this.$root.$on('stoploader', () => {
        loader.hide()
      })
      this.$root.$on('showloader', () => {
        loader = this.$loading.show()
      })
    },
    watch: {
      logged(isLogged) {
        if (isLogged) {
          this.$root.$emit('showloader')
          this.$gapi._libraryInit('client')
            .then(client => this.$store.dispatch('trainers/fetchTrainers', client))
            .then(() => this.$root.$emit('stoploader'))
            .catch(window.console.error)
        }
      }
    }
  }
</script>


<style lang="sass">
/** Fix for the loader */
.vld-overlay .vld-background
  opacity: 1 !important

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
