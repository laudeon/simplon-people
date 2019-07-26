<template>
  <div id="app">
    <flash-message></flash-message>
    
    <section id="intro" v-if="logged === false">
      <p>
        Qui c'est ? Où est-elle ? Que fait-il ?
      </p>
      <h1>Bienvue sur <strong>le répertoire des équipes de Simplon.</strong></h1>
    </section>
    
    <Sidebar v-if="logged === true" />
    
    <GoogleSingIn :callback="gSignInCallback" :logged="logged" />
    
    <Searchbar v-if="logged === true" />
    
    <List v-if="logged === true" :activeList="$store.state.activeList" />
  </div>
</template>

<script>
  import './assets/normalize.css'
  import { mapState } from 'vuex'
  import Sidebar from '@/components/Sidebar.vue'
  import Searchbar from '@/components/Searchbar.vue'
  import GoogleSingIn from '@/components/GoogleSignIn.vue'
  import List from '@/components/List.vue'

  export default {
    name: 'app',
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
    methods: {
      gSignInCallback (status) {
        this.$store.commit('me/logged', status)
      }
    },
    watch: {
      logged(isLogged) {
        if (isLogged) {
          this.$root.$emit('showloader')
          this.$gapi._libraryInit('client')
            .then(client => Promise.all([
              this.$store.dispatch('coworkers/fetchCoworkers', client),
              this.$store.dispatch('trainers/fetchTrainers', client)
            ]))
            .then(() => this.$root.$emit('stoploader'))
            .catch(error => {
              if (error.status >= 400) {
                this.$store.commit('me/logged', false)
                this.$root.$emit('stoploader')
                this.flash(this.$getErrorMessage(error.status), 'error')
              }
            })

          return
        }

        this.$root.$emit('stoploader')
      }
    },
    components: {
      Sidebar,
      Searchbar,
      GoogleSingIn,
      List
    }
  }
</script>


<style lang="sass">
*, *::after, *::before
  box-sizing: border-box

body
  padding: 0

a
  text-decoration: none

ul
  list-style: none
  padding: 0
  margin: 0

#app
  font-family: 'Ubuntu', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #323232
  font-size: 1rem
  padding-bottom: 2rem
  
  
  // Home signout
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

// Fix for the loader
.vld-overlay .vld-background
  opacity: 1 !important

// Fix material icon default UI
i.material-icons-outlined
  vertical-align: middle
  font-size: 1.3rem
  margin-right: .5rem
  color: #212121

// Fix flash message z-index
div.flash__wrapper .flash__message
  z-index: 1000

</style>
